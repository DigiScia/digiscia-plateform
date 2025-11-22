"""
Django settings for backend project — version optimisée pour Fly.io
"""

import os
from pathlib import Path
import dj_database_url
from dotenv import load_dotenv

# Charge .env (utile en local)
load_dotenv()

# ─────────────────────────────────────────────────────────────
# 📁 Chemins
# ─────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent


# ─────────────────────────────────────────────────────────────
# 🔒 SECRET KEY & DEBUG
# ─────────────────────────────────────────────────────────────
SECRET_KEY = os.getenv("SECRET_KEY")
# En production, DEBUG doit être False. On s'assure que la string "False" est bien interprétée.
DEBUG = os.getenv("DEBUG", "False").lower() == "true"

if not DEBUG and not SECRET_KEY:
    # On peut définir une clé par défaut pour le build Docker si nécessaire, 
    # mais en prod elle doit être présente.
    pass 


# ─────────────────────────────────────────────────────────────
# 🔐 Utilisateur personnalisé
# ─────────────────────────────────────────────────────────────
AUTH_USER_MODEL = 'api.UserPerso'


# ─────────────────────────────────────────────────────────────
# 📦 APPS
# ─────────────────────────────────────────────────────────────
INSTALLED_APPS = [
    # Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Libraries
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    "phonenumber_field",

    # App
    'api',
]


# ─────────────────────────────────────────────────────────────
# 🌐 MIDDLEWARE
# ─────────────────────────────────────────────────────────────
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Static files

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# ─────────────────────────────────────────────────────────────
# 🌍 Hosts & CORS & CSRF (Fly.io + Cloudflare)
# ─────────────────────────────────────────────────────────────

# Configuration explicite des hôtes autorisés
ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "digiscia-backend.fly.dev",  # 👈 CRUCIAL : Ton domaine Fly explicite
    "api.digiscia.com",
    os.getenv("FLY_APP_NAME", "") + ".fly.dev" if os.getenv("FLY_APP_NAME") else "", # Dynamique
]
# Nettoyage des chaînes vides éventuelles
ALLOWED_HOSTS = [host for host in ALLOWED_HOSTS if host]


# React frontend sur Cloudflare + Ton backend lui-même
CORS_ALLOWED_ORIGINS = os.getenv(
    "CORS_ALLOWED_ORIGINS",
    "https://digiscia.com,https://www.digiscia.com,https://digiscia-backend.fly.dev"
).split(",")

CORS_ALLOW_CREDENTIALS = True

# CSRF : Il faut faire confiance à ton backend ET ton frontend
CSRF_TRUSTED_ORIGINS = [
    "https://digiscia-backend.fly.dev", # 👈 CRUCIAL pour l'admin Django
    "https://api.digiscia.com",
    "https://www.digiscia.com",
    "https://digiscia.com",
] + [origin for origin in CORS_ALLOWED_ORIGINS if origin.startswith("http")]


# ─────────────────────────────────────────────────────────────
# URLS & Templates
# ─────────────────────────────────────────────────────────────
ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'api' / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# ─────────────────────────────────────────────────────────────
# 🗄️ DATABASE (Fly.io PostgreSQL → DATABASE_URL)
# ─────────────────────────────────────────────────────────────
DATABASE_URL = os.getenv("DATABASE_URL")

DATABASES = {
    "default": dj_database_url.parse(
        DATABASE_URL,
        conn_max_age=600,
        ssl_require=False
    )
    if DATABASE_URL else
    {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# ─────────────────────────────────────────────────────────────
# 🔐 Password validation
# ─────────────────────────────────────────────────────────────
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# ─────────────────────────────────────────────────────────────
# 🌍 Internationalisation
# ─────────────────────────────────────────────────────────────
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# ─────────────────────────────────────────────────────────────
# 📁 STATIC & MEDIA (Fly.io + Whitenoise)
# ─────────────────────────────────────────────────────────────
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / "mediafiles"


# ─────────────────────────────────────────────────────────────
# 🔀 REST + JWT
# ─────────────────────────────────────────────────────────────
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}


# ─────────────────────────────────────────────────────────────
# 🔒 Sécurité HTTPS (Fly.io gère automatiquement TLS)
# ─────────────────────────────────────────────────────────────
SECURE_SSL_REDIRECT = False # Fly gère ça
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'


# ─────────────────────────────────────────────────────────────
# ID auto
# ─────────────────────────────────────────────────────────────
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'