import random
from decimal import Decimal

from django.core.management.base import BaseCommand
# Utiliser le modèle User par défaut de Django
from django.contrib.auth.models import User
from api.models import UserPerso


class Command(BaseCommand):
    help = 'Creates application data'

    def handle(self, *args, **kwargs):
        # get or create superuser
        user = User.objects.filter(username='souley').first()
        if not user:
            user = User.objects.create_superuser(
                username='souley', password='souley')

        # create products - name, desc, price, stock, image
        products = [
            UserPerso(username="Souley TRAORE",
                      email="souley@gmail.com", password="souley"),
            UserPerso(username="Souley BAMBA",
                      email="souley@gmail.com", password="bamba"),
            UserPerso(username="Souley DIARRA",
                      email="souley@gmail.com", password="diarra"),
            UserPerso(username="Souley SIRA",
                      email="souley@gmail.com", password="sira"),
            UserPerso(username="Souley DAO",
                      email="souley@gmail.com", password="dao"),
        ]

        # create products & re-fetch from DB
        UserPerso.objects.bulk_create(products)
        users = UserPerso.objects.all()


# Pour execution python manage.py populate_db
