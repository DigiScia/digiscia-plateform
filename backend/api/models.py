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


# ✅ Modèle JobOffer (Offres d'emploi)
class JobOffer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    LOCATION_CHOICES = [
        ('remote', 'En ligne'),
        ('hybrid', 'Hybride'),
        ('onsite', 'En présentiel')
    ]
    location = models.CharField(max_length=20, choices=LOCATION_CHOICES, default='onsite')
    image = models.ImageField(upload_to='jobs/', blank=True, null=True)
    deadline = models.DateField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Offre d'emploi"
        verbose_name_plural = "Offres d'emploi"
        ordering = ['-created_at']


# ✅ Modèle JobApplication (Candidatures)
class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('pending', 'En attente'),
        ('interview', 'Entretien planifié'),
        ('accepted', 'Accepté'),
        ('rejected', 'Rejeté'),
    ]

    GENDER_CHOICES = [
        ('M', 'Homme'),
        ('F', 'Femme'),
        ('O', 'Autre'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    job_offer = models.ForeignKey(JobOffer, on_delete=models.CASCADE, related_name='applications')
    first_name = models.CharField(max_length=100, default='')
    last_name = models.CharField(max_length=100, default='')
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default='O')
    applicant_email = models.EmailField()
    phone = models.CharField(max_length=20, default='')
    resume = models.FileField(upload_to='resumes/')
    projects = models.TextField(blank=True, null=True, help_text="Décrivez le projet dont vous êtes le plus fier")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    interview_date = models.DateTimeField(blank=True, null=True)
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.job_offer.title}"

    class Meta:
        verbose_name = "Candidature"
        verbose_name_plural = "Candidatures"
        ordering = ['-applied_at']