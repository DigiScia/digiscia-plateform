from rest_framework import serializers
from .models import UserPerso, Admin, Contacts, Services, Projects, News, NewsLetterSuscribers
import re
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPerso
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def validate_username(self, value):
        if not re.match(r'^[\w\s]+$', value):
            raise serializers.ValidationError(
                "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores."
            )
        return value

    def validate_email(self, value):
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', value):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide."
            )
        return value

    def validate_password(self, value):
        return make_password(value)


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'

    def validate_email(self, value):
        if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', value):
            raise serializers.ValidationError(
                "Veuillez entrer une adresse email valide."
            )
        return value


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        
class NewsLetterSuscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsLetterSuscribers
        fields = ['email']
