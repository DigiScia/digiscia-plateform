import random
from decimal import Decimal
import os

from django.core.files import File
from django.core.management.base import BaseCommand
# Utiliser le modèle User par défaut de Django
from django.contrib.auth.models import User
from api.models import UserPerso, Projects, Services


# class Command(BaseCommand):
#     help = 'Creates application data'

#     def handle(self, *args, **kwargs):
#         # get or create superuser
#         user = User.objects.filter(username='souley').first()
#         if not user:
#             user = User.objects.create_superuser(
#                 username='souley', password='souley')

#         # create users - username, email, pwd
#         # users = [
#         #     UserPerso(username="Souley TRAORE",
#         #               email="souley@gmail.com", password="souley"),
#         #     UserPerso(username="Souley BAMBA",
#         #               email="souley@gmail.com", password="bamba"),
#         #     UserPerso(username="Souley DIARRA",
#         #               email="souley@gmail.com", password="diarra"),
#         #     UserPerso(username="Souley SIRA",
#         #               email="souley@gmail.com", password="sira"),
#         #     UserPerso(username="Souley DAO",
#         #               email="souley@gmail.com", password="dao"),
#         # ]

#         # # create user & re-fetch from DB
#         # UserPerso.objects.bulk_create(users)
#         # users = UserPerso.objects.all()


# class Command(BaseCommand):
#     help = 'Creates application data'

#     def handle(self, *args, **kwargs):

#         image_dir = "media/projects/"  # Chemin relatif vers le dossier des images

#         # Générer des données aléatoires pour les projets
#         projects_data = [
#             {
#                 "title": "Project1",
#                 "description": "Description du project1",
#                 "status": "En cours",
#                 "image": "project1.jpg",  # Nom du fichier image
#             },
#             {
#                 "title": "Project2",
#                 "description": "Description du project2",
#                 "status": "En cours",
#                 "image": "project2.jpg",  # Nom du fichier image
#             },
#             {
#                 "title": "Project3",
#                 "description": "Description du project3",
#                 "status": "En cours",
#                 "image": "project3.jpg",  # Nom du fichier image
#             }, {
#                 "title": "Project2",
#                 "description": "Description du project2",
#                 "status": "Terminé",
#                 "image": "project2.jpg",  # Nom du fichier image
#             }

#         ]

#         # Insérer les projets dans la base de données
#         for data in projects_data:
#             image_path = os.path.join(image_dir, data["image"])

#             # Vérifie si le fichier existe
#             if not os.path.exists(image_path):
#                 self.stdout.write(self.style.ERROR(
#                     f"Le fichier {image_path} n'existe pas. Vérifie le chemin."))
#                 continue  # Passe au projet suivant

#             with open(image_path, "rb") as f:
#                 django_file = File(f)

#                 project = Projects(
#                     title=data["title"],
#                     description=data["description"],
#                     status=data["status"],
#                 )
#                 project.image.save(data["image"], django_file, save=True)
#                 project.save()

#             self.stdout.write(self.style.SUCCESS(
#                 'Projets insérés avec succès !'))


class Command(BaseCommand):
    help = 'Creates application data'

    def handle(self, *args, **kwargs):

        image_dir = "media/services/"  # Chemin relatif vers le dossier des images

        # Générer des données aléatoires pour les projets
        services_data = [
            {
                "name": "service1",
                "description": "Description du service1",
                "image": "serv1.jpg",  # Nom du fichier image
            },
            {
                "name": "service2",
                "description": "Description du service2",
                "image": "serv2.jpg",  # Nom du fichier image
            },
            {
                "name": "service3",
                "description": "Description du service3",
                "image": "serv2.jpg",  # Nom du fichier image
            },
            {
                "name": "service4",
                "description": "Description du service4",
                "image": "serv1.jpg",  # Nom du fichier image
            },

        ]

        # Insérer les projets dans la base de données
        for data in services_data:
            image_path = os.path.join(image_dir, data["image"])

            # Vérifie si le fichier existe
            if not os.path.exists(image_path):
                self.stdout.write(self.style.ERROR(
                    f"Le fichier {image_path} n'existe pas. Vérifie le chemin."))
                continue  # Passe au projet suivant

            with open(image_path, "rb") as f:
                django_file = File(f)

                project = Services(
                    name=data["name"],
                    description=data["description"],
                )
                project.image.save(data["image"], django_file, save=True)
                project.save()

            self.stdout.write(self.style.SUCCESS(
                'Projets insérés avec succès !'))


# Pour execution python manage.py populate_db
