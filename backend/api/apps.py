from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        import api.signals
        
        # Lancer le scheduler uniquement si ce n'est pas une commande de management (ex: runserver, shell)
        import sys
        import os
        # Éviter de lancer le scheduler pendant makemigrations ou migrate
        if 'runserver' in sys.argv or 'gunicorn' in sys.argv[0]:
            # Démarrer le planificateur de tâches
            from apscheduler.schedulers.background import BackgroundScheduler
            from django_apscheduler.jobstores import DjangoJobStore, register_events
            from django.conf import settings
            from api.jobs import send_interview_reminders

            scheduler = BackgroundScheduler(timezone=settings.TIME_ZONE)
            
            # Utilise la base de données Django pour stocker les tâches
            # try/except au cas où la table django_apscheduler n'est pas encore créée
            try:
                scheduler.add_jobstore(DjangoJobStore(), "default")
                
                # Exécuter la vérification toutes les 5 minutes
                scheduler.add_job(
                    send_interview_reminders,
                    'interval',
                    minutes=5,
                    id='send_interview_reminders_job',
                    max_instances=1,
                    replace_existing=True,
                )
                
                register_events(scheduler)
                scheduler.start()
                print("APScheduler démarré avec succès !")
            except Exception as e:
                print(f"Erreur lors du démarrage d'APScheduler: {e}")