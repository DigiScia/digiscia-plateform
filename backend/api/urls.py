from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Endpoints pour les utilisateurs
    path("api/ds/users/", views.UserListCreateAPIView.as_view(), name="users"),
    path("api/ds/user/<uuid:pk>/", views.UserDetailAPIView.as_view(), name="user"),
    
    # Endpoints pour les projets
    path("api/ds/projects/", views.ProjectListCreateAPIView.as_view(), name="projects"),
    path("api/ds/project/<uuid:pk>/", views.ProjectDetailAPIView.as_view(), name="project"),
    
    # Endpoints pour les services
    path("api/ds/services/", views.ServiceListCreateAPIView.as_view(), name="services"),
    path("api/ds/service/<int:pk>/", views.ServiceDetailAPIView.as_view(), name="service"),
    
    # Endpoints pour les contacts
    path("api/ds/contacts/", views.ContactListCreateAPIView.as_view(), name="contacts"),
    path("api/ds/contact/<uuid:pk>/", views.ContactDetailAPIView.as_view(), name="contact"),
    
    # Endpoints pour les news
    path("api/ds/news/", views.NewsListAPIView.as_view(), name="news"),
    path("api/ds/news/create", views.NewsListCreateAPIView.as_view(), name="news-create"),
    
    path("api/ds/news/<uuid:pk>/", views.NewsDetailAPIView.as_view(), name="news-detail"),
    
    # Endpoints pour les newslettersuscribers
    path("api/ds/suscribers/", views.NewsLetterSuscribersListAPIView.as_view(), name="subscribers"),
    path("api/ds/suscribers/", views.NewsLetterSuscribersListCreateAPIView.as_view(), name="subscribers-create"),
    path("api/ds/suscribers/<uuid:pk>/", views.NewsLetterSuscribersDetailAPIView.as_view(), name="subscriber-detail"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)