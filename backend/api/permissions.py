# Dans permissions.py
from rest_framework import permissions
from .models import Admin


from rest_framework.permissions import BasePermission
from .models import Admin

class IsAdminOrCommunityManager(BasePermission):
    """
    Autorise uniquement les Admins Django (is_staff=True) ou les Community Managers
    définis via le modèle Admin.
    """

    def has_permission(self, request, view):
        user = request.user

        # 1️⃣ Vérifie qu'il est connecté
        if not user or not user.is_authenticated:
            return False

        # 2️⃣ Admin Django (is_staff=True) ou superuser
        if user.is_staff or user.is_superuser:
            return True

        # 3️⃣ Community Manager via Admin lié
        try:
            admin_obj = Admin.objects.get(user=user)
        except Admin.DoesNotExist:
            return False

        return admin_obj.is_community_manager() or admin_obj.is_superadmin()



class IsContentManager(permissions.BasePermission):
    """
    Permission pour les gestionnaires de contenu
    """
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
            
        try:
            admin = Admin.objects.get(user=request.user)
            # Content managers peuvent gérer services et projects
            if view.basename in ['services', 'projects'] and admin.role == 'content':
                if request.method in permissions.SAFE_METHODS:
                    return True
                return admin.can_create() if request.method == 'POST' else admin.can_update()
            return False
        except Admin.DoesNotExist:
            return False