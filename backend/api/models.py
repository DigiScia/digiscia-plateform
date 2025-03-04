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
        return self.name


class Admin(models.Model):
    # Définir les choix pour le champ permission
    PERMISSION_CHOICES = [
        ('read', 'Read'),
        ('create', 'Create'),
        ('delete', 'Delete'),
        ('manage', 'Manage'),
    ]

    user = models.OneToOneField(UserPerso, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    permission = models.CharField(
        max_length=10, choices=PERMISSION_CHOICES, default='read')

    def can_create(self):
        return self.permission in ['manage', 'create']

    def can_delete(self):
        return self.permission in ['manage', 'delete', 'create']

    def can_update(self):
        return self.permission in ['manage', 'create', 'delete']

    def can_read(self):
        return self.permission in ['manage', 'read', 'create', 'delete']

    def __str__(self):
        return self.user.username  # Utiliser username au lieu de name


class Contact(models.Model):
    fullname = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    sexe = models.CharField(max_length=1)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Services(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Device(models.Model):
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.service.name


class Projects(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    status = models.CharField(max_length=20)
    start_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='projects/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
