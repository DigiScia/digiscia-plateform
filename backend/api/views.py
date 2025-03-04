from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import UserPerso, Admin, Contact, Services, Device
from . serializers import userSterializer, adminSterializer, contactSterializer, serviceSerializer, deviceSerializer
import logging

# Configure logging
logger = logging.getLogger(__name__)
# Create your views here.

# CRUD methods for User


@api_view(['GET'])
def user_list(request):
    try:
        users = UserPerso.objects.all()
        serializer = userSterializer(users, many=True)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error fetching user list: {e}")
        return Response({"message": "An error occurred"}, status=500)

# get one user


@api_view(['GET'])
def get_user(request, pk):
    try:
        user = UserPerso.objects.get(id=pk)
        serializer = userSterializer(user, many=False)
        return Response(serializer.data)
    except Exception as e:
        logger.error(f"Error fetching user deatils: {e}")
        return Response({"message": "An error occurred"}, status=500)
# create user


@api_view(['POST'])
def create_user(request):
    try:
        serializer = userSterializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error creating user: {e}")
        return Response({"message": "An error occurred"}, status=500)

# update user


@api_view(['PUT'])
def update_user(request, pk):
    try:
        user = UserPerso.objects.get(id=pk)
        serializer = userSterializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    except Exception as e:
        logger.error(f"Error updating user: {e}")
        return Response({"message": "An error occurred"}, status=500)

# delete user


@api_view(["DELETE"])
def delete_user(request, pk):
    try:
        user = UserPerso.objects.get(id=pk)
        user.delete()
        return Response({"message": "User deleted successfully"}, status=200)
    except Exception as e:
        logger.error(f"Error deleting user: {e}")
        return Response({"message": "An error occurred"}, status=500)

# CRUD for Admin
