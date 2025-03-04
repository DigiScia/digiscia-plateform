from django.urls import path
from . import views

urlpatterns = [
    # endpoints for user
    path("", views.user_list, name="users"),
    path("user/<str:pk>", views.get_user, name="user"),
    path("create_user", views.create_user, name="create_user"),
    path("update_user/<str:pk>", views.update_user, name="update_user"),
    path("delete_user/<str:pk>", views.delete_user, name="delete_user"),

    # endpoints for projects
    path("projects/", views.project_list, name="projects"),
    path("project/<str:pk>", views.get_project, name="project"),
    path("create_project", views.create_project, name="create_project"),
    path("delete_project/<str:pk>", views.delete_project, name="delete_project"),
    path("update_project/<str:pk>", views.update_project, name="update_project"),

    # endpoints for services
    path("services/", views.service_list, name="services"),
    path("service/<str:pk>", views.get_service, name="service"),
    path("create_service", views.create_service, name="create_service"),
    path("delete_service/<str:pk>", views.delete_service, name="delete_service"),
    path("update_service/<str:pk>", views.update_service, name="update_service"),
]
