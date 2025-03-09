from django.utils.text import slugify
from django.core.validators import MinLengthValidator, RegexValidator
from django.db import models
import uuid

# Create your models here.


class UserPerso(models.Model):
    id = models.UUIDField(primary_key=True,
                          default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Admin(models.Model):
    # Définir les choix pour le champ permission
    PERMISSION_CHOICES = [
        ('read', 'Read'),
        ('write', 'Write'),
        ('delete', 'Delete'),
        ('manage', 'Manage'),
    ]

    user = models.OneToOneField(UserPerso, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    permission = models.CharField(
        max_length=10, choices=PERMISSION_CHOICES, default='read')

    def __str__(self):
        return self.user.username


class Contact(models.Model):
    # Choix pour le champ "sexe"
    SEXE_CHOICES = [
        ('M', 'Masculin'),
        ('F', 'Féminin'),
        ('O', 'Autre'),
    ]

    fullname = models.CharField(max_length=50, verbose_name="Nom complet")
    email = models.EmailField(max_length=50, verbose_name="Adresse email")
    date_naissance = models.DateField(
        verbose_name="Date de naissance", null=True, blank=True)
    telephone = models.CharField(
        max_length=15,
        verbose_name="Téléphone",
        validators=[
            MinLengthValidator(10),  # Au moins 10 caractères
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',  # Format international
                message="Le numéro de téléphone doit être au format valide."
            )
        ],
        null=True,
        blank=True
    )
    sexe = models.CharField(
        max_length=1,
        choices=SEXE_CHOICES,
        verbose_name="Sexe",
        null=True,
        blank=True
    )
    message = models.TextField(verbose_name="Message")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Date de création")

    def __str__(self):
        return self.fullname  # Utilisation de `fullname` au lieu de `name`

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['-created_at']  # Tri par date de création décroissante


class Services(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class News(models.Model):
    title = models.CharField(max_length=255, unique=True, verbose_name='Titre')
    description = models.TextField(blank=True, verbose_name='Description')
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    last_updated = models.DateTimeField(
        auto_now=True, verbose_name='Dernière mise à jour')
    created_on = models.DateTimeField(
        auto_now_add=True, verbose_name='Date de création')
    published = models.BooleanField(default=False, verbose_name='Publié')
    thumbnail = models.ImageField(
        blank=True, upload_to='news/', verbose_name='Miniature')
    content = models.TextField(blank=False, verbose_name='Contenu')

    class Meta:
        ordering = ['-created_on']
        verbose_name = "Article"
        verbose_name_plural = "Articles"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Projects(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    status = models.CharField(max_length=5)
    start_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='projects/')

    def __str__(self):
        return self.title
