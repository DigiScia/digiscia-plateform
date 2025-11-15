from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsAdminOrCommunityManager(BasePermission):
    """
    Autorise uniquement les Admins Django (is_staff=True) ou les Community Managers
    définis via le modèle AdminProfile.
    """

    def has_permission(self, request, view):
        user = request.user

        # 1️⃣ Vérifie qu'il est connecté
        if not user or not user.is_authenticated:
            return False

        # 2️⃣ Admin Django (is_staff=True) ou superuser
        if user.is_staff or user.is_superuser:
            return True

        # 3️⃣ Community Manager via AdminProfile
        # Import local pour éviter l'import circulaire
        from .models import AdminProfile
        
        try:
            admin_obj = AdminProfile.objects.get(user=user)
            return admin_obj.is_community_manager() or admin_obj.is_superadmin()
        except AdminProfile.DoesNotExist:
            return False


class IsContentManager(BasePermission):
    """
    Permission pour les gestionnaires de contenu
    """
    def has_permission(self, request, view):
        user = request.user
        
        if not user or not user.is_authenticated:
            return False
        
        # Admin Django peut tout faire
        if user.is_staff or user.is_superuser:
            return True
        
        # Import local pour éviter l'import circulaire
        from .models import AdminProfile
        
        try:
            admin = AdminProfile.objects.get(user=user)
            
            # SuperAdmins peuvent tout faire
            if admin.is_superadmin():
                return True
            
            # Content Manager uniquement pour les services
            if admin.role == 'content':
                # Vérifier si la vue concerne les services
                # Utiliser hasattr pour éviter les erreurs
                if hasattr(view, 'basename') and view.basename in ['services', 'service']:
                    if request.method in permissions.SAFE_METHODS:
                        return True
                    # Vérification des permissions granulaires
                    if request.method == 'POST':
                        return admin.can_create()
                    if request.method in ['PUT', 'PATCH']:
                        return admin.can_update()
                    if request.method == 'DELETE':
                        return admin.can_delete()
                
                # Pour les vues sans basename, vérifier le nom de la classe
                view_name = view.__class__.__name__.lower()
                if 'service' in view_name:
                    if request.method in permissions.SAFE_METHODS:
                        return True
                    if request.method == 'POST':
                        return admin.can_create()
                    if request.method in ['PUT', 'PATCH']:
                        return admin.can_update()
                    if request.method == 'DELETE':
                        return admin.can_delete()
                
                # Content manager ne peut pas gérer les news/subscribers
                return False
            
            return False
            
        except AdminProfile.DoesNotExist:
            return False