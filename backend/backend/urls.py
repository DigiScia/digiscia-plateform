# backend/urls.py
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.http import HttpResponse
from django.views.static import serve

urlpatterns = [
    path('robots.txt', lambda x: HttpResponse("User-agent: *\nDisallow: /", content_type="text/plain")),
    # 1. Admin Django
    path('gestion-interne-secure/digiscia/admin/', admin.site.urls),
    # Alias d'administration
    path('administration.digiscia/', admin.site.urls),

    # 2. Browser Reload (si installé)
    path("__reload__/", include("django_browser_reload.urls")),

    # 3. TOUT le reste va vers api/urls.py
    # La chaîne vide '' capture la racine et tout ce qui suit
    path('', include('api.urls')),
]

# Servir les fichiers médias en mode DEBUG et en PROD (si pas de S3/Nginx configuré)
urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT,
    }),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)