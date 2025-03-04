from django.urls import path
from . import views

urlpatterns = [
    path("", views.user_list, name="users"),
    path("user/<str:pk>", views.get_user, name="user"),
    path("create_user", views.create_user, name="create_user"),
    path("update_user/<str:pk>", views.update_user, name="update_user"),
    path("delete_user/<str:pk>", views.delete_user, name="delete_user"),
]
