# Dans permissions.py
from rest_framework import permissions
from .models import Admin

class IsCommunityManager(permissions.BasePermission):
    """
    Permission pour les community managers
    """
    def has_permission(self, request, view):
        # Permission accordée si l'utilisateur est authentifié et est un community manager
        if not request.user.is_authenticated:
            return False
            
        try:
            admin = Admin.objects.get(user=request.user)
            # Community managers peuvent gérer news et newsletter
            if view.basename in ['news', 'suscribers'] and admin.is_community_manager():
                # Lecture pour tout le monde, mais POST/PUT/DELETE seulement avec bonnes permissions
                if request.method in permissions.SAFE_METHODS:  # GET, HEAD, OPTIONS
                    return True
                return admin.can_create() if request.method == 'POST' else admin.can_update()
            return False
        except Admin.DoesNotExist:
            return False

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