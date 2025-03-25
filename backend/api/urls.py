from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Endpoints pour les utilisateurs
    path("api/users/", views.UserListCreateAPIView.as_view(), name="users"),
    path("api/user/<uuid:pk>/", views.UserDetailAPIView.as_view(), name="user"),
    
    # Endpoints pour les projets
    path("api/projects/", views.ProjectListCreateAPIView.as_view(), name="projects"),
    path("api/project/<uuid:pk>/", views.ProjectDetailAPIView.as_view(), name="project"),
    
    # Endpoints pour les services
    path("api/services/", views.ServiceListCreateAPIView.as_view(), name="services"),
    path("api/service/<int:pk>/", views.ServiceDetailAPIView.as_view(), name="service"),
    
    # Endpoints pour les contacts
    path("api/contacts/", views.ContactListCreateAPIView.as_view(), name="contacts"),
    path("api/contact/<uuid:pk>/", views.ContactDetailAPIView.as_view(), name="contact"),
    
    # Endpoints pour les news
    path("api/news/", views.NewsListAPIView.as_view(), name="news"),
    path("api/news/", views.NewsListCreateAPIView.as_view(), name="news-create"),
    
    path("api/news/<uuid:pk>/", views.NewsDetailAPIView.as_view(), name="news-detail"),
    
    # Endpoints pour les newslettersuscribers
    path("api/suscribers/", views.NewsLetterSuscribersListAPIView.as_view(), name="suscribers"),
    path("api/suscribers/", views.NewsLetterSuscribersListCreateAPIView.as_view(), name="suscribers-create"),
    path("api/suscribers/<uuid:pk>/", views.NewsLetterSuscribersDetailAPIView.as_view(), name="suscriber-detail"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)