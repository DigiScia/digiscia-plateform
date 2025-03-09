from django.urls import path
from . import views

urlpatterns = [
    # endpoints for user
    path("", views.UserListAPIView.as_view(), name="users"),
    path("user/<str:pk>", views.UserDetailAPIView.as_view(), name="user"),
    path("create_user", views.UserCreateAPIView.as_view(), name="create_user"),
    path("update_user/<str:pk>",
         views.UserUpdateAPIView.as_view(), name="update_user"),
    path("delete_user/<str:pk>",
         views.UserDeleteAPIView.as_view(), name="delete_user"),

    # endpoints for projects
    path("projects/", views.ProjectListAPIView.as_view(), name="projects"),
    path("project/<str:pk>", views.ProjectDetailAPIView.as_view(), name="project"),
    path("create_project", views.ProjectCreateAPIView.as_view(),
         name="create_project"),
    path("delete_project/<str:pk>",
         views.ProjectDeleteAPIView.as_view(), name="delete_project"),
    path("update_project/<str:pk>",
         views.ProjectUpdateAPIView.as_view(), name="update_project"),

    # endpoints for services
    path("services/", views.ServiceListAPIView.as_view(), name="services"),
    path("service/<str:pk>/", views.ServiceDetailAPIView.as_view(), name="service"),
    path("create_service", views.ServiceCreateAPIView.as_view(),
         name="create_service"),
    path("delete_service/<str:pk>/",
         views.ServiceDeleteAPIView.as_view(), name="delete_service"),
    path("update_service/<str:pk>/",
         views.ServiceUpdateAPIView.as_view(), name="update_service"),

    # endpoints for contact
    path("contacts/", views.ContactListAPIView.as_view(), name="contacts"),
    path("contact/<str:pk>/", views.ContactDetailAPIView.as_view(), name='contact'),
    path("create_contact/", views.ContactCreateAPIView.as_view(),
         name="create_contact"),
    path("update_contact/<str:pk>/",
         views.ContactUpdateAPIView.as_view(), name="update_contact"),
    path("delete_contact/<str:pk>/",
         views.ContactDeleteAPIView.as_view(), name="delete_contact"),

    # endpoints for News
    path("news/", views.NewsListAPIView.as_view(), name="news"),
    path("new/<str:pk>/", views.NewsDetailAPIView.as_view(), name='new'),
    path("create_new/", views.NewsCreateAPIView.as_view(),
         name="create_new"),
    path("update_new/<str:pk>/",
         views.NewsUpdateAPIView.as_view(), name="update_new"),
    path("delete_new/<str:pk>/",
         views.NewsDeleteAPIView.as_view(), name="delete_new")
]
