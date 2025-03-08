# Create your tests here.
from django.test import TestCase
from .models import UserPerso
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
