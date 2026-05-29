from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from django.utils.text import slugify
from .models import News, NewsLetterSuscribers

@receiver(post_save, sender=News)
def notify_subscribers_on_new_news(sender, instance, created, **kwargs):
    """
    Envoie un mail automatique à tous les abonnés lors de la création d'une news.
    """
    if created:
        subscribers = NewsLetterSuscribers.objects.all()
        if not subscribers.exists():
            return

        recipient_list = [s.email for s in subscribers]
        
        # Génération du slug pour l'URL (conforme à la route React)
        slug = slugify(instance.title)
        # On utilise le domaine de production par défaut ou localhost en debug
        domain = "https://digiscia.com" if not settings.DEBUG else "http://localhost:5173"
        article_url = f"{domain}/article/{instance.id}/{slug}"
        
        subject = f"📰 Nouvelle Actualité DigiScia : {instance.title}"
        message = f"""Bonjour,

Du nouveau sur DigiScia !

🔹 Titre : {instance.title}

📝 Aperçu :
{instance.content[:300]}...

🔗 Découvrez l'article complet ici :
{article_url}

Merci de votre fidélité,
L'équipe DigiScia.
"""
        
        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=recipient_list,
                fail_silently=True,
            )
        except Exception:
            # Sécurité pour ne pas bloquer le serveur si SMTP crash
            pass

from django.db.models.signals import pre_save
from .models import JobApplication

@receiver(pre_save, sender=JobApplication)
def track_job_application_status(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_instance = JobApplication.objects.get(pk=instance.pk)
            instance._old_status = old_instance.status
        except JobApplication.DoesNotExist:
            instance._old_status = None
    else:
        instance._old_status = None

@receiver(post_save, sender=JobApplication)
def notify_job_application_status_change(sender, instance, created, **kwargs):
    applicant_full_name = f"{instance.first_name} {instance.last_name}"
    
    # Envoi de confirmation à la création
    if created:
        subject_candidat = f"Confirmation de candidature : {instance.job_offer.title}"
        message_candidat = f"Bonjour {applicant_full_name},\n\nNous avons bien reçu votre candidature pour le poste de {instance.job_offer.title}. Nous vous contacterons prochainement.\n\nCordialement,\nL'équipe DigiScia."
        try:
            send_mail(subject_candidat, message_candidat, settings.DEFAULT_FROM_EMAIL, [instance.applicant_email], fail_silently=True)
        except Exception:
            pass
            
        # Alerter les RH
        hr_managers = instance.job_offer.hr_managers.all()
        hr_emails = [hr.email for hr in hr_managers] if hr_managers.exists() else [settings.CONTACT_EMAIL_RECIPIENT]
        
        subject_rh = f"Nouvelle candidature : {instance.job_offer.title}"
        message_rh = f"Une nouvelle candidature a été reçue.\n\nCandidat : {applicant_full_name}\nOffre : {instance.job_offer.title}\nContact : {instance.applicant_email} / {instance.phone}\n\nConnectez-vous à l'espace administration pour voir le CV."
        try:
            send_mail(subject_rh, message_rh, settings.DEFAULT_FROM_EMAIL, hr_emails, fail_silently=True)
        except Exception:
            pass
            
        return

    # Si le statut a changé
    old_status = getattr(instance, '_old_status', None)
    if old_status and old_status != instance.status:
        subject = ""
        message = ""
        
        if instance.status == 'interview':
            date_str = instance.interview_date.strftime("%d/%m/%Y à %H:%M") if instance.interview_date else "à définir"
            link_str = f"\nLien de l'entretien : {instance.interview_link}" if instance.interview_link else ""
            subject = f"Entretien planifié : {instance.job_offer.title}"
            message = f"Bonjour {applicant_full_name},\n\nNous avons le plaisir de vous informer que votre candidature pour le poste de {instance.job_offer.title} a été retenue pour un entretien.\nDate de l'entretien : {date_str}.{link_str}\n\nCordialement,\nL'équipe DigiScia."
        elif instance.status == 'accepted':
            subject = f"Candidature acceptée : {instance.job_offer.title}"
            message = f"Bonjour {applicant_full_name},\n\nFélicitations ! Nous avons le plaisir de vous annoncer que vous êtes retenu(e) pour le poste de {instance.job_offer.title}.\nNous vous contacterons très vite avec plus de détails.\n\nCordialement,\nL'équipe DigiScia."
        elif instance.status == 'rejected':
            subject = f"Suite à votre candidature : {instance.job_offer.title}"
            message = f"Bonjour {applicant_full_name},\n\nSuite à l'étude de votre profil pour le poste de {instance.job_offer.title}, nous avons le regret de vous informer que votre candidature n'a pas été retenue.\nNous vous souhaitons une excellente continuation.\n\nCordialement,\nL'équipe DigiScia."
        
        if subject:
            try:
                send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [instance.applicant_email], fail_silently=True)
            except Exception:
                pass
