from django.utils.translation import gettext_lazy as _
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone
import datetime

# ✅ SUPPRESSION DE L'IMPORT CIRCULAIRE
# Ne PAS importer permissions.py dans models.py


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
        related_name='userperso_groups',
        related_query_name='userperso',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='userperso_permissions',
        related_query_name='userperso',
    )
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Utilisateur"
        verbose_name_plural = "Utilisateurs"


# ✅ Modèle Admin (Gestion des permissions)
class AdminProfile(models.Model):
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

    class Meta:
        verbose_name = "Profil Admin"
        verbose_name_plural = "Profils Admin"


# ✅ Modèle Services
class Services(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"
        ordering = ['-created_at']


# ✅ Modèle News
class News(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Actualité"
        verbose_name_plural = "Actualités"
        ordering = ['-created_at']


# ✅ Modèle NewsLetterSubscribers
class NewsLetterSuscribers(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Abonné Newsletter"
        verbose_name_plural = "Abonnés Newsletter"
        ordering = ['-subscribed_at']