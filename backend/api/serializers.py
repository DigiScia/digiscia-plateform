from rest_framework import serializers
from .models import UserPerso, Services, News, NewsLetterSuscribers
import re
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError


# ==========================================================
# SERIALIZER POUR L'INSCRIPTION
# ==========================================================
class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer dédié à l'inscription (POST /api/v1/users/)
    Gère le hashage automatique et validation stricte
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'},
        min_length=8
    )
    password_confirm = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = UserPerso
        fields = ['id', 'username', 'email', 'password', 'password_confirm']
        extra_kwargs = {
            'id': {'read_only': True},
            'email': {'required': True},
            'username': {'required': True}
        }

    def validate_username(self, value):
        """Validation du nom d'utilisateur"""
        if not value or len(value.strip()) < 3:
            raise serializers.ValidationError(
                "Le nom d'utilisateur doit contenir au moins 3 caractères."
            )
        
        if not re.match(r'^[\w\s]+$', value):
            raise serializers.ValidationError(
                "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores."
            )
        
        return value.strip()

    def validate_email(self, value):
        """Validation stricte de l'email"""
        email = value.lower().strip()
        
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide."
            )
        
        # Vérifier unicité (case-insensitive)
        if UserPerso.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError(
                "Un compte avec cet email existe déjà."
            )
        
        return email

    def validate_password(self, value):
        """Validation robuste du mot de passe avec Django validators"""
        try:
            validate_password(value)
        except DjangoValidationError as e:
            raise serializers.ValidationError(list(e.messages))
        return value

    def validate(self, attrs):
        """Validation croisée des champs"""
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({
                'password_confirm': "Les mots de passe ne correspondent pas."
            })
        
        # Supprimer password_confirm avant création
        attrs.pop('password_confirm')
        return attrs

    def create(self, validated_data):
        """Création sécurisée avec hashage automatique"""
        user = UserPerso.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


# ==========================================================
# SERIALIZER UTILISATEUR (pour GET, PUT, PATCH)
# ==========================================================
class UserSerializer(serializers.ModelSerializer):
    """
    Serializer pour lister (GET) et mettre à jour (PUT/PATCH) les utilisateurs
    Sécurisé contre l'escalade de privilèges
    """
    class Meta:
        model = UserPerso
        fields = [
            'id', 'username', 'email', 'date_joined', 
            'last_login', 'is_active', 'is_staff', 'password'
        ]
        read_only_fields = [
            'id', 'date_joined', 'last_login', 
            'is_staff', 'is_active'  # Empêche auto-promotion
        ]
        extra_kwargs = {
            'password': {
                'write_only': True, 
                'required': False, 
                'allow_blank': True,
                'style': {'input_type': 'password'}
            }
        }

    def validate_username(self, value):
        """Validation du username lors des updates"""
        if not value or len(value.strip()) < 3:
            raise serializers.ValidationError(
                "Le nom d'utilisateur doit contenir au moins 3 caractères."
            )
        
        if not re.match(r'^[\w\s]+$', value):
            raise serializers.ValidationError(
                "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores."
            )
        
        return value.strip()

    def validate_email(self, value):
        """Validation email avec vérification d'unicité"""
        email = value.lower().strip()
        
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide."
            )
        
        # Vérifier unicité sauf pour l'utilisateur actuel
        instance = self.instance
        if instance and UserPerso.objects.filter(email__iexact=email).exclude(id=instance.id).exists():
            raise serializers.ValidationError(
                "Un autre utilisateur utilise déjà cet email."
            )
        
        return email

    def validate_password(self, value):
        """Validation du nouveau mot de passe"""
        if value and value.strip():
            try:
                validate_password(value)
            except DjangoValidationError as e:
                raise serializers.ValidationError(list(e.messages))
        return value

    def update(self, instance, validated_data):
        """Mise à jour sécurisée avec gestion du mot de passe"""
        password = validated_data.pop('password', None)
        
        # Mettre à jour les autres champs
        instance = super().update(instance, validated_data)

        # Gérer le changement de mot de passe
        if password and password.strip():
            instance.set_password(password)
            instance.save(update_fields=['password'])
        
        return instance


# ==========================================================
# SERIALIZER SERVICES
# ==========================================================
class ServiceSerializer(serializers.ModelSerializer):
    """Serializer pour les services"""
    
    class Meta:
        model = Services
        fields = ['id', 'name', 'description', 'image', 'created_at']
        read_only_fields = ['id', 'created_at']
    
    def validate_name(self, value):
        """Validation du nom de service"""
        if not value or len(value.strip()) < 3:
            raise serializers.ValidationError(
                "Le nom du service doit contenir au moins 3 caractères."
            )
        return value.strip()
    
    def validate_description(self, value):
        """Validation de la description"""
        if not value or len(value.strip()) < 10:
            raise serializers.ValidationError(
                "La description doit contenir au moins 10 caractères."
            )
        return value.strip()


# ==========================================================
# SERIALIZER NEWS
# ==========================================================
class NewsSerializer(serializers.ModelSerializer):
    """Serializer pour les actualités"""
    
    class Meta:
        model = News
        fields = ['id', 'title', 'content', 'image', 'created_at']
        read_only_fields = ['id', 'created_at']
    
    def validate_title(self, value):
        """Validation du titre"""
        if not value or len(value.strip()) < 5:
            raise serializers.ValidationError(
                "Le titre doit contenir au moins 5 caractères."
            )
        return value.strip()
    
    def validate_content(self, value):
        """Validation du contenu"""
        if not value or len(value.strip()) < 20:
            raise serializers.ValidationError(
                "Le contenu doit contenir au moins 20 caractères."
            )
        return value.strip()


# ==========================================================
# SERIALIZER NEWSLETTER SUBSCRIBERS
# ==========================================================
class NewsLetterSuscriberSerializer(serializers.ModelSerializer):
    """Serializer pour les abonnés newsletter"""
    
    class Meta:
        model = NewsLetterSuscribers
        fields = ['id', 'email', 'subscribed_at']
        read_only_fields = ['id', 'subscribed_at']

    def validate_email(self, value):
        """Validation stricte de l'email"""
        email = value.lower().strip()
        
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide."
            )
        
        # Vérifier unicité (case-insensitive)
        if NewsLetterSuscribers.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError(
                "Cet email est déjà inscrit à la newsletter."
            )
        
        return email
    
    def create(self, validated_data):
        """Création avec email en minuscules"""
        validated_data['email'] = validated_data['email'].lower()
        return super().create(validated_data)