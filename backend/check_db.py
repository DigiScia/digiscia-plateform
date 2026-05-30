import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import JobOffer
for j in JobOffer.objects.all():
    print("Title:", j.title)
    print("  Image Name (in DB):", j.image.name if j.image else None)
    print("  Image URL (Generated):", j.image.url if j.image else None)
