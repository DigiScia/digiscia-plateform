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
