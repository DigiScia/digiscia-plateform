import logging
from datetime import timedelta
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings
from .models import JobApplication

logger = logging.getLogger(__name__)

def send_interview_reminders():
    """
    Tâche périodique pour vérifier et envoyer les rappels d'entretien.
    """
    now = timezone.now()
    
    # 1. Rappel : 1 jour avant
    # On cherche les entretiens qui ont lieu dans moins de 24 heures et plus de 23h50 (pour éviter d'envoyer trop tôt ou trop tard)
    # Plus simple: interview_date - now <= 24 hours AND interview_date > now AND reminder_1_day_sent = False
    time_threshold_1_day = now + timedelta(hours=24)
    applications_1_day = JobApplication.objects.filter(
        status='interview',
        interview_date__isnull=False,
        interview_date__lte=time_threshold_1_day,
        interview_date__gt=now,
        reminder_1_day_sent=False
    )
    
    for app in applications_1_day:
        try:
            applicant_full_name = f"{app.first_name} {app.last_name}"
            date_str = app.interview_date.strftime("%d/%m/%Y à %H:%M")
            link_str = f"\nLien de l'entretien : {app.interview_link}" if app.interview_link else ""
            
            subject = f"Rappel J-1 : Entretien pour le poste de {app.job_offer.title}"
            message_candidat = f"Bonjour {applicant_full_name},\n\nCeci est un rappel pour votre entretien demain.\nDate et heure : {date_str}.{link_str}\n\nCordialement,\nL'équipe DigiScia."
            message_rh = f"Rappel RH : Entretien prévu demain avec {applicant_full_name} pour le poste {app.job_offer.title}.\nDate et heure : {date_str}.{link_str}"
            
            # Récupérer les emails des RH assignés
            hr_managers = app.job_offer.hr_managers.all()
            hr_emails = [hr.email for hr in hr_managers] if hr_managers.exists() else [settings.CONTACT_EMAIL_RECIPIENT]
            
            # Email au candidat
            send_mail(subject, message_candidat, settings.DEFAULT_FROM_EMAIL, [app.applicant_email], fail_silently=True)
            # Email aux RH
            send_mail(f"Copie RH - {subject}", message_rh, settings.DEFAULT_FROM_EMAIL, hr_emails, fail_silently=True)
            
            # Marquer comme envoyé
            app.reminder_1_day_sent = True
            app.save(update_fields=['reminder_1_day_sent'])
            logger.info(f"Rappel J-1 envoyé pour {applicant_full_name}")
        except Exception as e:
            logger.error(f"Erreur lors de l'envoi du rappel J-1 pour {app.id}: {e}")

    # 2. Rappel : 20 minutes avant
    time_threshold_20_min = now + timedelta(minutes=20)
    applications_20_min = JobApplication.objects.filter(
        status='interview',
        interview_date__isnull=False,
        interview_date__lte=time_threshold_20_min,
        interview_date__gt=now,
        reminder_20_min_sent=False
    )
    
    for app in applications_20_min:
        try:
            applicant_full_name = f"{app.first_name} {app.last_name}"
            date_str = app.interview_date.strftime("%d/%m/%Y à %H:%M")
            link_str = f"\nLien de l'entretien : {app.interview_link}" if app.interview_link else ""
            
            subject = f"Rappel : Entretien dans 20 minutes - {app.job_offer.title}"
            message_candidat = f"Bonjour {applicant_full_name},\n\nVotre entretien commence dans 20 minutes.\nHeure : {date_str}.{link_str}\n\nÀ tout de suite !"
            message_rh = f"Rappel RH : Entretien imminent avec {applicant_full_name} ({app.job_offer.title}).\nHeure : {date_str}.{link_str}"
            
            # Récupérer les emails des RH assignés
            hr_managers = app.job_offer.hr_managers.all()
            hr_emails = [hr.email for hr in hr_managers] if hr_managers.exists() else [settings.CONTACT_EMAIL_RECIPIENT]
            
            # Email au candidat
            send_mail(subject, message_candidat, settings.DEFAULT_FROM_EMAIL, [app.applicant_email], fail_silently=True)
            # Email aux RH
            send_mail(f"Copie RH - {subject}", message_rh, settings.DEFAULT_FROM_EMAIL, hr_emails, fail_silently=True)
            
            # Marquer comme envoyé
            app.reminder_20_min_sent = True
            app.save(update_fields=['reminder_20_min_sent'])
            logger.info(f"Rappel 20min envoyé pour {applicant_full_name}")
        except Exception as e:
            logger.error(f"Erreur lors de l'envoi du rappel 20min pour {app.id}: {e}")
