from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import UserPerso, News, Contact, Services, Projects
from . serializers import userSterializer, NewsSerializer, contactSerializer, serviceSerializer, projectSerializer
import logging
from rest_framework import status
from django.conf import settings
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


# Configure logging
logger = logging.getLogger(__name__)
# Create your views here.

# CRUD methods for User


class UserListAPIView(generics.ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = UserPerso.objects.all()
    serializer_class = userSterializer


class UserDetailAPIView(generics.RetrieveAPIView):
    queryset = UserPerso.objects.all()
    serializer_class = userSterializer


class UserCreateAPIView(generics.CreateAPIView):
    model = UserPerso
    serializer_class = userSterializer

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method == 'POST':
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

# update user


class UserUpdateAPIView(generics.UpdateAPIView):
    queryset = UserPerso.objects.all()
    serializer_class = userSterializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class UserDeleteAPIView(generics.DestroyAPIView):
    queryset = UserPerso.objects.all()
    serializer_class = userSterializer

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


# CRUD for Pojects
# Fetch all projects from db

class ProjectListAPIView(generics.ListAPIView):
    queryset = Projects.objects.all()
    serializer_class = projectSerializer

# get on project


class ProjectDetailAPIView(generics.RetrieveAPIView):
    queryset = Projects.objects.all()
    serializer_class = projectSerializer


class ProjectCreateAPIView(generics.CreateAPIView):
    model = Projects
    serializer_class = projectSerializer

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method == 'POST':
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProjectUpdateAPIView(generics.UpdateAPIView):
    queryset = Projects.objects.all()
    serializer_class = projectSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ProjectDeleteAPIView(generics.DestroyAPIView):
    queryset = Projects.objects.all()
    serializer_class = projectSerializer

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


# CRUD for Services
# Fetch all services from db


class ServiceListAPIView(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = serviceSerializer


class ServiceDetailAPIView(generics.RetrieveAPIView):
    queryset = Services.objects.all()
    serializer_class = serviceSerializer


class ServiceCreateAPIView(generics.CreateAPIView):
    model = Services
    serializer_class = serviceSerializer

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method == 'POST':
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ServiceUpdateAPIView(generics.UpdateAPIView):
    queryset = Services.objects.all()
    serializer_class = serviceSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ServiceDeleteAPIView(generics.DestroyAPIView):
    queryset = Services.objects.all()
    serializer_class = serviceSerializer

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

# CRUD pour Contact


class ContactListAPIView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = contactSerializer


class ContactDetailAPIView(generics.RetrieveAPIView):
    queryset = Contact.objects.all()
    serializer_class = contactSerializer


class ContactCreateAPIView(generics.CreateAPIView):
    model = Contact
    serializer_class = contactSerializer
    # Pas besoin de se connecter avant de pouvoir nous contacter


class ContactUpdateAPIView(generics.UpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = contactSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class ContactDeleteAPIView(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = contactSerializer

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


# CRUD for News

class NewsListAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsDetailAPIView(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsCreateAPIView(generics.CreateAPIView):
    model = News
    serializer_class = NewsSerializer
    # Pas besoin de se connecter avant de pouvoir nous contacter


class NewsUpdateAPIView(generics.UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()


class NewsDeleteAPIView(generics.DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def get_permissions(self):
        if self.request.method == "DELETE":
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()
