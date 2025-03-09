# Create your tests here.
# Remplace par le chemin correct vers ton modèle
from .models import UserPerso, Contact, Services, News
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.test import TestCase
import uuid
from datetime import datetime


class UserPersoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Crée un utilisateur de test pour tous les tests de la classe
        cls.user = UserPerso.objects.create(
            username="testuser",
            email="test@example.com",
            password="testpassword123"
        )

    def test_user_creation(self):
        """Teste que l'utilisateur est bien créé avec les bons attributs."""
        self.assertEqual(self.user.username, "testuser")
        self.assertEqual(self.user.email, "test@example.com")
        self.assertEqual(self.user.password, "testpassword123")
        # Vérifie que l'ID est un UUID
        self.assertTrue(isinstance(self.user.id, uuid.UUID))
        # Vérifie que created_at est un datetime
        self.assertTrue(isinstance(self.user.created_at, datetime))

    def test_username_max_length(self):
        """Teste que la longueur maximale du champ username est respectée."""
        max_length = self.user._meta.get_field('username').max_length
        self.assertEqual(max_length, 50)

    def test_email_max_length(self):
        """Teste que la longueur maximale du champ email est respectée."""
        max_length = self.user._meta.get_field('email').max_length
        self.assertEqual(max_length, 50)

    def test_password_max_length(self):
        """Teste que la longueur maximale du champ password est respectée."""
        max_length = self.user._meta.get_field('password').max_length
        self.assertEqual(max_length, 50)

    def test_str_method(self):
        """Teste que la méthode __str__ retourne le username."""
        self.assertEqual(str(self.user), "testuser")


class UserModelTests(TestCase):
    def setUp(self):
        """
        Cette méthode est exécutée avant chaque test.
        On y crée des utilisateurs et des objets pour les tests.
        """
        # Créer un utilisateur normal
        self.normal_user = User.objects.create_user(
            username='normal',
            password='1234',
            email='normal@example.com'
        )

        # Créer un superutilisateur (optionnel)
        self.admin_user = User.objects.create_superuser(
            username='admin',
            password='1234',
            email='superuser@example.com'
        )
        self.user = UserPerso.objects.create(
            username="TRAORE Souley",
            email="souley@gmail.com",
            password="solo226"
        )
        self.detail_url = reverse('user', kwargs={'pk': self.user.pk})
        self.delete_url = reverse('delete_user', kwargs={'pk': self.user.pk})
        self.update_url = reverse('update_user', kwargs={'pk': self.user.pk})

    def test_get_user(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], self.user.username)

    def test_unauthorized_update_user(self):
        data = {"username": "Updated user"}
        response = self.client.put(self.update_url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_unauthorized_delete_user(self):
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_only_admins_can_delete_user(self):
        # test normal user cannot delete - note that this could be its own method
        self.client.login(username='normal', password='1234')
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertTrue(UserPerso.objects.filter(pk=self.user.pk).exists())

        # test admin user can delete user
        self.client.login(username='admin', password='1234')
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(UserPerso.objects.filter(pk=self.user.pk).exists())


class ContactModelTests(TestCase):
    def setUp(self):
        """
        Cette méthode est exécutée avant chaque test.
        On y crée des utilisateurs et des objets pour les tests.
        """
        # Créer un utilisateur normal
        self.normal_user = User.objects.create_user(
            username='normal',
            password='1234',
            email='normal@example.com'
        )

        # Créer un superutilisateur (optionnel)
        self.admin_user = User.objects.create_superuser(
            username='admin',
            password='1234',
            email='superuser@example.com'
        )
        self.contact = Contact.objects.create(
            fullname="TRAORE Souley",
            email="souley@gmail.com",
            date_naissance="2002-05-25",
            telephone="+212061994895",
            sexe="M",
            message="Ce ci est mon message, bravo!"
        )
        self.detail_url = reverse('contact', kwargs={'pk': self.contact.pk})
        self.delete_url = reverse('delete_contact', kwargs={
                                  'pk': self.contact.pk})
        self.update_url = reverse('update_contact', kwargs={
                                  'pk': self.contact.pk})

    def test_get_contact(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['fullname'], self.contact.fullname)

    def test_unauthorized_update_contact(self):
        data = {"fullname": "Souleymane TRAORE Updated"}
        response = self.client.put(self.update_url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_unauthorized_delete_contact(self):
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_only_admins_can_delete_contact(self):
        # test normal user cannot delete - note that this could be its own method
        self.client.login(username='normal', password='1234')
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertTrue(Contact.objects.filter(pk=self.contact.pk).exists())

        # test admin user can delete user
        self.client.login(username='admin', password='1234')
        response = self.client.delete(self.delete_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Contact.objects.filter(pk=self.contact.pk).exists())
