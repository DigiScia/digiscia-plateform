from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Endpoints pour les utilisateurs
    path("", views.api_root, name="root"),
    path("api/v1/users/", views.UserListCreateAPIView.as_view(), name="users"),
    path("api/v1/user/<uuid:pk>/", views.UserDetailAPIView.as_view(), name="user"),
    
    # Endpoints pour les projets
    # path("api/v1/projects/", views.ProjectListCreateAPIView.as_view(), name="projects"),
    # path("api/v1/project/<uuid:pk>/", views.ProjectDetailAPIView.as_view(), name="project"),
    
    # Endpoints pour les services
    path("api/v1/services/", views.ServiceListCreateAPIView.as_view(), name="services"),
    path("api/v1/service/<int:pk>/", views.ServiceDetailAPIView.as_view(), name="service"),
    
    # Endpoints pour les contacts
    # path("api/v1/contacts/", views.ContactListCreateAPIView.as_view(), name="contacts"),
    # path("api/v1/contact/<uuid:pk>/", views.ContactDetailAPIView.as_view(), name="contact"),
    
    # Endpoints pour les news
    path("api/v1/news/", views.NewsListAPIView.as_view(), name="news"),
    path("api/v1/news/create", views.NewsCreateAPIView.as_view(), name="news-create"),
    
    path("api/v1/news/<uuid:pk>/", views.NewsDetailAPIView.as_view(), name="news-detail"),
    
    # Endpoints pour les newslettersuscribers
    path("api/v1/suscribers/", views.NewsLetterSuscribersListAPIView.as_view(), name="subscribers"),
    path("api/v1/suscribers/create", views.NewsletterSignupAPIView.as_view(), name="subscribers-create"),
    path("api/v1/suscribers/<uuid:pk>/", views.NewsLetterSuscribersDetailAPIView.as_view(), name="subscriber-detail"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)