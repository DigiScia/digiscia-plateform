from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import UserPerso, Admin, Contact, Services, Device, Projects
from . serializers import userSterializer, adminSterializer, contactSterializer, serviceSerializer, deviceSerializer, projectSerializer
import logging
from rest_framework import status
from django.conf import settings


# Configure logging
logger = logging.getLogger(__name__)
# Create your views here.

# CRUD methods for User


@api_view(['GET'])
def user_list(request):
    try:
        # En Production, prend en comptes les vérifications d'authentification et de permissions
        if not settings.DEBUG:
            # Vérifie si l'utilisateur est authentifié
            if not request.user.is_authenticated:
                return Response({"Message": "Accès refusé. Vous devez être connecté."}, status=status.HTTP_403_FORBIDDEN)

            # Vérifie si l'utilisateur est un administrateur
            try:
                admin = Admin.objects.get(user=request.user)
            except Admin.DoesNotExist:
                return Response({"Message": "Accès refusé. Vous n'êtes pas administrateur."}, status=status.HTTP_403_FORBIDDEN)

            # Vérifie si l'administrateur a la permission de lire les utilisateurs
            if not admin.can_read():
                return Response({"Message": "Vous n'avez pas la permission de lire les utilisateurs."}, status=status.HTTP_403_FORBIDDEN)

        # Si on est en développement ou si l'utilisateur est un administrateur avec la permission 'read', affiche la liste des utilisateurs
        users = UserPerso.objects.all()
        serializer = userSterializer(users, many=True)
        return Response(serializer.data)

    except Exception as e:
        logger.error(f"Error fetching user list: {e}")
        return Response({"message": "Une erreur est survenue lors de la requête"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# get one user


@api_view(['GET'])
def get_user(request, pk):
    try:
        if not settings.DEBUG:
            try:
                admin = Admin.objects.get(user=request.user)
            except Admin.DoesNotExist:
                return Response("Accès refuseé!Vous n'etes pas un admins", status=403)

            # Si l'utilisateur a la perimission de lire
            if not admin.can_read():
                return Response({"message": "Access refusé! Vous n'etes pas un admins"}, status=403)

        # Affiche l'utilisateur recherché maintenant car le current user est un admin qui peut lire
        user = UserPerso.objects.get(id=pk)
        serializer = userSterializer(user, many=False)
        return Response(serializer.data)

    except Exception as e:
        logger.error(f"Error fetching user: {e}")
        return Response({"Message": "Une erreur est survenue lors de la requete"}, status=500)


@api_view(['POST'])
def create_user(request):
    try:
        if not settings.DEBUG:
            try:
                admin = Admin.objects.get(user=request.user)

            except Admin.DoesNotExist:
                return Response({"Message": "Accès refusé"}, status=403)

            if not admin.can_create():
                return Response({"Message": "Vous n'avez pas la permission de creer un utilisateur"}, status=403)

        # Il peut creer un utilisateur maintenant
        serializer = userSterializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    except Exception as e:
        logger.error(f"Error creating user: {e}")
        return Response({"message": "Une erreur est survenue lors de la requete"}, status=500)


# update user
@api_view(['PUT'])
def update_user(request, pk):
    try:
        if not settings.DEBUG:
            try:
                admin = Admin.objects.get(user=request.user)
            except Admin.DoesNotExist:
                return Response({"Message": "Acces refusé"}, status=403)

            if not admin.can_update():
                return Response({"Message": "Vous n'avez pas cette permission. Merci"}, status=403)

        # On peut faire la mise a jour mainntenant
        user = UserPerso.objects.get(id=pk)
        serializer = userSterializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Erreur de le mise a jour: {e}")
        return Response({"message": "Une erreur est servenu lors de votre requête"}, status=500)

# delete user


@api_view(["DELETE"])
def delete_user(request, pk):
    try:
        if not settings.DEBUG:
            try:
                admin = Admin.objects.get(user=request.user)
            except Admin.DoesNotExist:
                return Response({"Message": "Accès refusé"}, status=403)
            if not admin.can_delete():
                return Response({"Message": "Vous n'avez pas cette permission"}, status=403)

        # On peut faire la mise a jour maintenant
        user = UserPerso.objects.get(id=pk)
        user.delete()
        return Response({"message": "User deleted successfully"}, status=200)
    except Exception as e:
        logger.error(f"Error deleting user: {e}")
        return Response({"message": "An error occurred"}, status=500)


# CRUD for Pojects
# Fetch all projects from db
@api_view(["GET"])
def project_list(request):
    try:
        projects = Projects.objects.all()
        serializer = projectSerializer(projects, many=True)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error fetching projects list: {e}")
        return Response({"message": "Une erreur est survenue lors de la requête"}, status=500)

# get on project


@api_view(['GET'])
def get_project(request, pk):
    try:
        project = Projects.objects.get(id=pk)
        serializer = projectSerializer(project, many=False)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error getting project: {e}")
        return Response({"Message": "Une erreur est survenue lors de votre requete"}, status=500)

# create a new project


@api_view(['POST'])
def create_project(request):
    try:
        serializer = projectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error creating project : {e}")
        return Response({"Message": "Une erreur est survenue lors de la creatin du project"}, status=500)


# update a project


@api_view(['PUT'])
def update_project(request, pk):
    try:
        project = Projects.objects.get(id=pk)
        serializer = projectSerializer(instance=project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error updating project : {e}")
        return Response({"Message": "Une erreur est survenue lors de la MAJ du project"}, status=500)


@api_view(['DELETE'])
def delete_project(request, pk):
    try:
        project = Projects.objects.get(id=pk)
        project.delete()
        return Response({"Message": "Project deleted successfully"}, status=200)
    except Exception as e:
        logger.error(f"Error deleting Project: {e}")
        return Response({"Message": "Une erreur est survenu lors de la requete"}, status=500)

# CRUD for Services
# Fetch all services from db


@api_view(["GET"])
def service_list(request):
    try:
        services = Services.objects.all()
        serializer = serviceSerializer(services, many=True)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error fetching services list: {e}")
        return Response({"message": "Une erreur est survenue lors de la requête"}, status=500)


@api_view(['GET'])
def get_service(request, pk):
    try:
        service = Services.objects.get(id=pk)
        serializer = serviceSerializer(service, many=False)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error getting service: {e}")
        return Response({"Message": "Une erreur est survenue lors de votre requete"}, status=500)


@api_view(['POST'])
def create_service(request):
    try:
        serializer = serviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error creating service : {e}")
        return Response({"Message": "Une erreur est survenue lors de la creatin du service"}, status=500)


@api_view(['PUT'])
def update_service(request, pk):
    try:
        service = Services.objects.get(id=pk)
        serializer = serviceSerializer(instance=service, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error updating service : {e}")
        return Response({"Message": "Une erreur est survenue lors de la MAJ du service"}, status=500)


@api_view(['DELETE'])
def delete_service(request, pk):
    try:
        service = Services.objects.get(id=pk)
        service.delete()
        return Response({"Message": "Service deleted successfully"}, status=200)
    except Exception as e:
        logger.error(f"Error deleting service: {e}")
        return Response({"Message": "Une erreur est survenu lors de la requete"}, status=500)
