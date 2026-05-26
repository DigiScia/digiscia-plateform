from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, permission_classes
from rest_framework.reverse import reverse
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.conf import settings

from .permissions import IsAdminOrCommunityManager, IsContentManager
from .models import UserPerso, Services, News, NewsLetterSuscribers, JobOffer, JobApplication
from .serializers import (
    UserSerializer, ServiceSerializer, NewsSerializer,
    NewsLetterSuscriberSerializer, UserRegistrationSerializer,
    JobOfferSerializer, JobApplicationSerializer
)


# ============================================
# ROOT API - PAGE D'ACCUEIL
# ============================================
@api_view(['GET'])
@permission_classes([AllowAny])
def api_root(request, format=None):
    """Page d'accueil de l'API DigiScia avec tous les endpoints"""
    return Response({
        'message': '🎯 Bienvenue sur l\'API DigiScia',
        'version': '1.0.0',
        'documentation': request.build_absolute_uri('/api/docs/'),
        
        'endpoints': {
            '🔐 Authentification': {
                'obtenir_token': {
                    'url': request.build_absolute_uri(reverse('token_obtain_pair')),
                    'method': 'POST',
                    'description': 'Obtenir un token JWT',
                    'auth_required': False,
                    'body_example': {
                        'email': 'user@example.com',
                        'password': 'votre_mot_de_passe'
                    }
                },
                'rafraichir_token': {
                    'url': request.build_absolute_uri(reverse('token_refresh')),
                    'method': 'POST',
                    'description': 'Rafraîchir un token expiré',
                    'auth_required': False,
                    'body_example': {
                        'refresh': 'votre_refresh_token'
                    }
                }
            },
            
            '👥 Utilisateurs': {
                'liste_utilisateurs': {
                    'url': request.build_absolute_uri(reverse('users')),
                    'methods': ['GET', 'POST'],
                    'description': 'Liste des utilisateurs / Inscription',
                    'auth_required': 'POST: Non, GET: Oui (Admin)'
                },
                'detail_utilisateur': {
                    'url': request.build_absolute_uri('/api/v1/user/{uuid}/'),
                    'methods': ['GET', 'PUT', 'PATCH', 'DELETE'],
                    'description': 'Détail d\'un utilisateur',
                    'auth_required': True
                }
            },
            
            '📰 News': {
                'liste_news': {
                    'url': request.build_absolute_uri(reverse('news')),
                    'method': 'GET',
                    'description': 'Liste publique des actualités',
                    'auth_required': False
                },
                'creer_news': {
                    'url': request.build_absolute_uri(reverse('news-create')),
                    'method': 'POST',
                    'description': 'Créer une actualité (Community Manager)',
                    'auth_required': True,
                    'role_required': 'Community Manager'
                },
                'detail_news': {
                    'url': request.build_absolute_uri('/api/v1/news/{uuid}/'),
                    'methods': ['GET', 'PUT', 'PATCH', 'DELETE'],
                    'description': 'Détail/Modification/Suppression',
                    'auth_required': 'GET: Non, Autres: Oui (CM)'
                }
            },
            
            '🛠️ Services': {
                'liste_services': {
                    'url': request.build_absolute_uri(reverse('services')),
                    'methods': ['GET', 'POST'],
                    'description': 'Liste publique / Création (Content Manager)',
                    'auth_required': 'POST uniquement'
                },
                'detail_service': {
                    'url': request.build_absolute_uri('/api/v1/service/{id}/'),
                    'methods': ['GET', 'PUT', 'PATCH', 'DELETE'],
                    'description': 'Détail/Modification/Suppression',
                    'auth_required': 'GET: Non, Autres: Oui (Content)'
                }
            },
            
            '📬 Newsletter': {
                'liste_abonnes': {
                    'url': request.build_absolute_uri(reverse('subscribers')),
                    'method': 'GET',
                    'description': 'Liste des abonnés (Community Manager)',
                    'auth_required': True,
                    'role_required': 'Community Manager'
                },
                'inscription': {
                    'url': request.build_absolute_uri(reverse('subscribers-create')),
                    'method': 'POST',
                    'description': 'S\'inscrire à la newsletter (Public)',
                    'auth_required': False,
                    'body_example': {
                        'email': 'user@example.com'
                    }
                },
                'detail_abonne': {
                    'url': request.build_absolute_uri('/api/v1/subscribers/{uuid}/'),
                    'methods': ['GET', 'DELETE'],
                    'description': 'Voir/Supprimer un abonné (CM)',
                    'auth_required': True,
                    'role_required': 'Community Manager'
                }
            },
            
            '⚙️ Administration': {
                'panel_admin': {
                    'url': request.build_absolute_uri('/administration.digiscia/'),
                    'method': 'GET',
                    'description': 'Interface d\'administration Django',
                    'auth_required': True,
                    'role_required': 'Staff'
                }
            }
        },
        
        'roles_et_permissions': {
            '🔴 SuperAdmin': [
                'Accès complet à tous les endpoints',
                'Gestion des utilisateurs',
                'Créer/Modifier/Supprimer tout contenu'
            ],
            '🟢 Community Manager': [
                'Gérer les actualités (News)',
                'Gérer les abonnés newsletter'
            ],
            '🔵 Content Manager': [
                'Gérer les services',
                'Créer/Modifier du contenu'
            ],
            '⚪ Utilisateur Public': [
                'Voir les actualités',
                'Voir les services',
                'Envoyer un message de contact',
                'S\'inscrire à la newsletter',
                'Créer un compte'
            ]
        },
        
        'exemples_authentification': {
            'avec_jwt': {
                'description': 'Utiliser le token dans les headers',
                'header': 'Authorization: Bearer <votre_token_jwt>',
                'exemple_curl': 'curl -H "Authorization: Bearer eyJ0eXAi..." http://127.0.0.1:8000/api/v1/news/create/'
            },
            'obtenir_token': {
                'etape_1': 'POST /api/token/ avec email et password',
                'etape_2': 'Récupérer le access_token de la réponse',
                'etape_3': 'Utiliser ce token dans vos requêtes suivantes'
            }
        },
        
        'status_codes': {
            '200': 'Succès (GET, PUT, PATCH)',
            '201': 'Créé avec succès (POST)',
            '204': 'Supprimé avec succès (DELETE)',
            '400': 'Erreur de validation',
            '401': 'Non authentifié',
            '403': 'Accès refusé (permissions insuffisantes)',
            '404': 'Ressource non trouvée',
            '500': 'Erreur serveur'
        },
        
        'contact_support': {
            'email': 'support@digiscia.com',
            'documentation': 'https://docs.digiscia.com',
            'github': 'https://github.com/digiscia/api'
        }
    })


# ============================================
# HEALTH CHECK ENDPOINT
# ============================================
@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """Vérifier que l'API fonctionne"""
    return Response({
        'status': 'healthy',
        'message': 'L\'API DigiScia fonctionne correctement',
        'timestamp': request.META.get('HTTP_DATE', 'N/A')
    })


# ============================================
# CRUD UTILISATEURS
# ============================================
class UserListCreateAPIView(generics.ListCreateAPIView):
    """
    Liste et création d'utilisateurs
    GET: Liste (Admin uniquement)
    POST: Inscription publique
    """
    queryset = UserPerso.objects.all()
    
    def get_permissions(self):
        """GET nécessite authentification admin, POST est public"""
        if self.request.method == 'POST':
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def get_serializer_class(self):
        """Serializer différent pour inscription (POST) vs liste (GET)"""
        if self.request.method == 'POST':
            return UserRegistrationSerializer
        return UserSerializer
    
    def get_queryset(self):
        """Filtrer les utilisateurs selon les permissions"""
        user = self.request.user
        if user.is_staff or user.is_superuser:
            return UserPerso.objects.all()
        # Utilisateur normal ne voit que son propre profil
        return UserPerso.objects.filter(id=user.id)


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Détail, modification et suppression d'un utilisateur
    Un utilisateur ne peut modifier que son propre profil
    """
    queryset = UserPerso.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Un utilisateur ne peut voir/modifier que son propre profil"""
        if self.request.user.is_staff or self.request.user.is_superuser:
            return UserPerso.objects.all()
        return UserPerso.objects.filter(id=self.request.user.id)
    
    def perform_destroy(self, instance):
        """Empêcher la suppression de son propre compte si admin"""
        if instance.is_superuser and not self.request.user.is_superuser:
            raise ValidationError("Impossible de supprimer un compte superadmin")
        instance.delete()


# ============================================
# CRUD SERVICES
# ============================================
class ServiceListCreateAPIView(generics.ListCreateAPIView):
    """
    Liste publique et création de services
    GET: Public
    POST: Content Manager uniquement
    """
    queryset = Services.objects.all().order_by('-created_at')
    serializer_class = ServiceSerializer
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsContentManager()]


class ServiceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Détail, modification et suppression de service
    GET: Public
    PUT/PATCH/DELETE: Content Manager uniquement
    """
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsContentManager()]


# ============================================
# CRUD NEWS
# ============================================
class NewsListAPIView(generics.ListAPIView):
    """Liste publique des news (ordonnée par date décroissante)"""
    queryset = News.objects.all().order_by('-created_at')
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]


class NewsCreateAPIView(generics.CreateAPIView):
    """
    Création de news (Community Manager uniquement)
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrCommunityManager]
    
    def perform_create(self, serializer):
        """Validation supplémentaire lors de la création"""
        serializer.save()


class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Détail, modification et suppression de news
    GET: Public
    PUT/PATCH/DELETE: Community Manager uniquement
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminOrCommunityManager()]


# ============================================
# CRUD NEWSLETTER SUBSCRIBERS
# ============================================
class NewsLetterSuscribersListAPIView(generics.ListAPIView):
    """Liste des abonnés (Community Manager uniquement)"""
    queryset = NewsLetterSuscribers.objects.all().order_by('-subscribed_at')
    serializer_class = NewsLetterSuscriberSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrCommunityManager]


class NewsletterSignupAPIView(APIView):
    """
    Inscription publique à la newsletter
    Gestion robuste des doublons et validation email
    """
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email', '').strip().lower()
        
        if not email:
            return Response(
                {"error": "L'email est requis."}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        # Vérifier doublon
        if NewsLetterSuscribers.objects.filter(email__iexact=email).exists():
            return Response(
                {"message": "Cet email est déjà inscrit à la newsletter."}, 
                status=status.HTTP_200_OK  # 200 au lieu de 400 pour UX
            )

        # Validation avec serializer
        serializer = NewsLetterSuscriberSerializer(data={'email': email})
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "message": "Inscription réussie à la newsletter !",
                    "email": email
                }, 
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NewsLetterSuscribersDetailAPIView(generics.RetrieveDestroyAPIView):
    """
    Détail et suppression d'un abonné
    Community Manager uniquement
    """
    queryset = NewsLetterSuscribers.objects.all()
    serializer_class = NewsLetterSuscriberSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrCommunityManager]


# ============================================
# CONTACT FORM
# ============================================
class ContactAPIView(APIView):
    """
    Endpoint pour recevoir le formulaire de contact
    Envoie un email via SMTP
    """
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email', '')
        telephone = request.data.get('telephone', '')
        subject = request.data.get('subject', 'Nouveau message de contact')
        message = request.data.get('message', '')

        if not email or not message or not telephone:
            return Response(
                {"error": "L'email, le téléphone et le message sont requis."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Construction du mail pour l'administrateur
        full_message = f"""
        Nouveau message de contact reçu de DigiScia Plateforme:
        
        Sujet: {subject}
        Email: {email}
        Téléphone: {telephone}
        
        Message:
        {message}
        """

        try:
            send_mail(
                subject=f"Contact Web: {subject}",
                message=full_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL_RECIPIENT],
                fail_silently=False,
            )
            return Response(
                {"message": "Votre message a été envoyé avec succès !"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": f"Erreur lors de l'envoi : {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# ============================================
# CRUD CARRIERES (JOB OFFERS & APPLICATIONS)
# ============================================

class JobOfferListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: Liste publique des offres d'emploi actives
    POST: Création par un admin
    """
    serializer_class = JobOfferSerializer

    def get_queryset(self):
        if self.request.user.is_staff or self.request.user.is_superuser:
            return JobOffer.objects.all().order_by('-created_at')
        return JobOffer.objects.filter(is_active=True).order_by('-created_at')

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminOrCommunityManager()]


class JobOfferDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Détail, modification et suppression d'une offre
    GET: Public
    PUT/PATCH/DELETE: Admin
    """
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated(), IsAdminOrCommunityManager()]


class JobApplicationCreateAPIView(generics.CreateAPIView):
    """
    POST: Création d'une candidature (Public)
    """
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    permission_classes = [AllowAny]


class JobApplicationListAPIView(generics.ListAPIView):
    """
    GET: Liste des candidatures (Admin)
    """
    queryset = JobApplication.objects.all().order_by('-applied_at')
    serializer_class = JobApplicationSerializer
    permission_classes = [IsAuthenticated, IsAdminOrCommunityManager]


class JobApplicationDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Détail, modification (statut) et suppression d'une candidature
    GET/PUT/PATCH/DELETE: Admin
    """
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    permission_classes = [IsAuthenticated, IsAdminOrCommunityManager]