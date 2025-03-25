# forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import UserPerso, Admin, Services, Projects, News

class AdminLoginForm(forms.Form):
    email = forms.EmailField(label="Adresse e-mail")
    password = forms.CharField(label="Mot de passe", widget=forms.PasswordInput)

class AdminCreationForm(UserCreationForm):
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
    
    role = forms.ChoiceField(choices=ROLE_CHOICES, label="Rôle")
    permission = forms.ChoiceField(choices=PERMISSION_CHOICES, label="Permission")
    
    class Meta:
        model = UserPerso
        fields = ('username', 'email', 'password1', 'password2')

class NewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title', 'content', 'image']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 5}),
        }

class ServiceForm(forms.ModelForm):
    class Meta:
        model = Services
        fields = ['name', 'description', 'image']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 5}),
        }

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Projects
        fields = ['title', 'description', 'status', 'image']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 5}),
        }