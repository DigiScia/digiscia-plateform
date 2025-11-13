from django.urls import  reverse
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .models import UserPerso, News, Admin
from rest_framework.test import APITestCase

#MES TESTS

from rest_framework.test import APITestCase, APIClient
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.urls import reverse
from .models import UserPerso, Admin, News

from .models import UserPerso, Admin, Projects, Services, Contacts, News, NewsLetterSuscribers

class APITestCases(APITestCase):
    def setUp(self):
        # --- Users ---
        self.admin_user = UserPerso.objects.create_user(username='admin', email='admin@mail.com', password='admin123', is_staff=True)
        self.cm_user = UserPerso.objects.create_user(username='cm', email='cm@mail.com', password='cm123')
        Admin.objects.create(user=self.cm_user, role='community', permission='manage')
        self.normal_user = UserPerso.objects.create_user(username='user', email='user@mail.com', password='user123')

        # --- Projects ---
        self.project = Projects.objects.create(title='Projet Test', description='Desc')
        self.project_url = reverse('project', args=[self.project.id])
        self.project_list_url = reverse('projects')

        # --- Services ---
        self.service = Services.objects.create(name='Service Test', description='Desc')
        self.service_url = reverse('service', args=[self.service.id])
        self.service_list_url = reverse('services')

        # --- News ---
        self.news = News.objects.create(title='Titre', content='Contenu')
        self.news_detail_url = reverse('news-detail', args=[self.news.id])
        self.news_list_url = reverse('news')

        # --- Newsletter Subscribers ---
        self.subscriber = NewsLetterSuscribers.objects.create(email='sub@test.com')
        self.subscriber_detail_url = reverse('subscriber-detail', args=[self.subscriber.id])
        self.subscriber_list_url = reverse('subscribers')

        self.client = APIClient()

    def get_jwt_token(self, user):
        refresh = RefreshToken.for_user(user)
        return str(refresh.access_token)

    # -----------------------------
    # EXEMPLE : ProjectDetailAPIView
    # -----------------------------
    def test_project_detail_unauthenticated(self):
        response = self.client.get(self.project_url)
        # ListCreateAPIView est avec IsAdminUser → GET interdit
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_project_detail_normal_user(self):
        token = self.get_jwt_token(self.normal_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.project_url)
        # RetrieveUpdateDestroyAPIView avec IsAdminUser → GET interdit
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_project_detail_admin_user(self):
        token = self.get_jwt_token(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.project_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # -----------------------------
    # Exemple NewsLetter POST
    # -----------------------------
    def test_newsletter_signup_already_exists(self):
        data = {'email': 'sub@test.com'}
        response = self.client.post(self.subscriber_list_url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_newsletter_signup_new_email(self):
        data = {'email': 'new@test.com'}
        response = self.client.post(self.subscriber_list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # --------------------------------------------------------------------------------------------
    #Differents TEST pour les Vues des News
    #----------------------------------------------------------------------------------------------
    # TESTS GET
    # -----------------------

    def test_get_unauthenticated(self):
        """Non authentifié → 401 Unauthorized"""
        response = self.client.get(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_authenticated_no_permission(self):
        """Utilisateur normal (sans permission) → 403 Forbidden"""
        token = self.get_jwt_token(self.normal_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_get_as_admin(self):
        """Admin Django → 200 OK"""
        token = self.get_jwt_token(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_as_cm(self):
        """Community Manager → 200 OK"""
        token = self.get_jwt_token(self.cm_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # -----------------------
    # TESTS PUT (UPDATE)
    # -----------------------

    def test_put_authenticated_no_permission(self):
        """Utilisateur normal → 403 Forbidden"""
        token = self.get_jwt_token(self.normal_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        data = {'title': 'Nouveau titre', 'content': 'Contenu modifié'}
        response = self.client.put(self.news_detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_put_as_admin(self):
        """Admin Django → 200 OK"""
        token = self.get_jwt_token(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        data = {'title': 'Titre modifié', 'content': 'Contenu modifié'}
        response = self.client.put(self.news_detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_put_as_cm(self):
        """Community Manager → 200 OK"""
        token = self.get_jwt_token(self.cm_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        data = {'title': 'Titre CM', 'content': 'Contenu CM'}
        response = self.client.put(self.news_detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # -----------------------
    # TESTS DELETE
    # -----------------------

    def test_delete_authenticated_no_permission(self):
        """Utilisateur normal → 403 Forbidden"""
        token = self.get_jwt_token(self.normal_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.delete(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_delete_as_admin(self):
        """Admin Django → 204 No Content"""
        token = self.get_jwt_token(self.admin_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.delete(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_delete_as_cm(self):
        """Community Manager → 204 No Content"""
        token = self.get_jwt_token(self.cm_user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.delete(self.news_detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)