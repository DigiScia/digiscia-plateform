from rest_framework import serializers
from .models import UserPerso, Admin, Contact, Services, Projects
import re
from django.contrib.auth.hashers import make_password

# make_password : Cette fonction hash le mot de passe en utilisant l'algorithme par défaut de Django (PBKDF2 avec SHA256).


class userSterializer(serializers.ModelSerializer):
    class Meta:
        model = UserPerso
        fields = '__all__'

    def validate_username(self, value):
        # Exemple : Le nom d'utilisateur ne doit contenir que des lettres, des chiffres et des underscores
        if not re.match(r'^[\w\s]+$', value):
            raise serializers.ValidationError(
                "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores.")
        return value

    def validate_email(self, value):
        # Validation de l'email
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', value):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide.")
        return value

    def hashpassword(self, value):
        # Hasher le mot de passe
        return make_password(value)


class adminSterializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'


class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = (
            'fullname',
            'email',
            'sexe',
            'message',
            'created_at'
        )

    def validate_email(self, value):
        # Validation de l'email
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', value):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide.")
        return value

    def validate_username(self, value):
        # Exemple : Le nom d'utilisateur ne doit contenir que des lettres, des chiffres et des underscores
        if not re.match(r'^[\w\s]+$', value):
            raise serializers.ValidationError(
                "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores.")
        return value


class serviceSerializer(serializers.ModelSerializer):
    image = serializers.CharField(required=False)

    class Meta:
        model = Services
        fields = (
            'name',
            'description',
            'image',
            'created_at'
        )

    def valide_price(self, value):
        if value < 0:
            raise ValueError("Le Prix des services doit etre positis")
        return value


class projectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
