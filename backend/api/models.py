from django.utils.translation import gettext_lazy as _
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone
import datetime

# ✅ Modèle UserPerso (Utilisateur)
class UserPerso(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=50, unique=True)  # Email unique
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Ajouter des related_name personnalisés pour éviter les conflits
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name='userperso_set',  # Nom personnalisé ici
        related_query_name='userperso',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='userperso_set',  # Nom personnalisé ici
        related_query_name='userperso',
    )
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email  # ✅ Utilisation de l'email pour l'affichage


# ✅ Modèle Admin (Gestion des permissions)
class Admin(models.Model):
    ROLE_CHOICES = [
        ('superadmin', 'Super Admin'),
        ('community', 'Community Manager'),
        ('content', 'Content Manager'),
    ]
    
    PERMISSION_CHOICES = [
        ('read', 'Read'),
        ('create', 'Create'),
        ('delete', 'Delete'),
        ('manage', 'Manage'),
    ]

    user = models.OneToOneField(UserPerso, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='content')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    permission = models.CharField(
        max_length=10, choices=PERMISSION_CHOICES, default='read')

    def can_create(self):
        return self.permission in ['manage', 'create'] or self.role == 'superadmin'

    def can_delete(self):
        return self.permission in ['manage', 'delete', 'create'] or self.role == 'superadmin'

    def can_update(self):
        return self.permission in ['manage', 'create', 'delete'] or self.role == 'superadmin'

    def can_read(self):
        return True  # Tous les admins peuvent lire
        
    def is_community_manager(self):
        return self.role == 'community'
        
    def is_superadmin(self):
        return self.role == 'superadmin'

    def __str__(self):
        return f"{self.user.email} ({self.get_role_display()})"

# ✅ Modèle Contact
class Contacts(models.Model):
    SEXE_CHOICES = [
        ("H", "Homme"),
        ("F", "Femme"),
        ("A", "Autre"),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fullname = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    sexe = models.CharField(max_length=1, choices=SEXE_CHOICES)
    objet = models.CharField(max_length=50)
    birthday = models.DateField(null=False, blank=False)  # Champ obligatoire
    message = models.TextField()
    phone = PhoneNumberField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname


# ✅ Modèle Services
class Services(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)  # ✅ Image facultative
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# ✅ Modèle Projects
class Projects(models.Model):
    STATUS_CHOICES = [
        ('programmé', 'Programmé'),
        ('en cours', 'En cours'),
        ('terminé', 'Terminé'),
        ('annulé', 'Annulé'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    description = models.TextField()
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='programmé'  # Valeur par défaut cohérente
    )
    start_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
  
  
    
# ✅ Modèle News
class News(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)  # ✅ Image facultative
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    
# ✅ Modèle NewsLetterSubscribers
class NewsLetterSuscribers(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)  # Adresse e-mail unique pour éviter les doublons
    subscribed_at = models.DateTimeField(auto_now_add=True)  # Date d'inscription automatique

    def __str__(self):
        return self.email

