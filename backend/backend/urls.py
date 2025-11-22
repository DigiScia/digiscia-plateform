# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # 1. Admin Django
    path('administration.digiscia/', admin.site.urls),

    # 2. Browser Reload (si installé)
    path("__reload__/", include("django_browser_reload.urls")),

    # 3. TOUT le reste va vers api/urls.py
    # La chaîne vide '' capture la racine et tout ce qui suit
    path('', include('api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)