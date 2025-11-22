# api/urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    # ============================================
    # 🏠 ACCUEIL (http://127.0.0.1:8000/)
    # ============================================
    # Utilise ta vue api_root définie dans views.py
    path('', views.api_root, name='root'),

    # ============================================
    # 🔐 AUTHENTIFICATION (JWT)
    # ============================================
    # Indispensable car api_root fait référence à 'token_obtain_pair'
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # ============================================
    # 👥 UTILISATEURS
    # ============================================
    path("api/v1/users/", views.UserListCreateAPIView.as_view(), name="users"),
    path("api/v1/user/<uuid:pk>/", views.UserDetailAPIView.as_view(), name="user"),

    # ============================================
    # 🛠️ SERVICES
    # ============================================
    path("api/v1/services/", views.ServiceListCreateAPIView.as_view(), name="services"),
    path("api/v1/service/<int:pk>/", views.ServiceDetailAPIView.as_view(), name="service"),

    # ============================================
    # 📰 NEWS
    # ============================================
    path("api/v1/news/", views.NewsListAPIView.as_view(), name="news"),
    path("api/v1/news/create/", views.NewsCreateAPIView.as_view(), name="news-create"), # Ajout du / final standard
    path("api/v1/news/<uuid:pk>/", views.NewsDetailAPIView.as_view(), name="news-detail"),

    # ============================================
    # 📬 NEWSLETTER
    # ============================================
    path("api/v1/suscribers/", views.NewsLetterSuscribersListAPIView.as_view(), name="subscribers"),
    path("api/v1/suscribers/create/", views.NewsletterSignupAPIView.as_view(), name="subscribers-create"), # Ajout du / final
    path("api/v1/suscribers/<uuid:pk>/", views.NewsLetterSuscribersDetailAPIView.as_view(), name="subscriber-detail"),
    
    # ============================================
    # 🏥 HEALTH CHECK
    # ============================================
    path("health/", views.health_check, name="health_check"),
]