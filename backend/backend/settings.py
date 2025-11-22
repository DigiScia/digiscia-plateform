"""
Django settings for backend project — Version optimisée Fly.io + Dev Local
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

# En production, DEBUG doit être False.
DEBUG = os.getenv("DEBUG", "False").lower() == "true"
# DEBUG = True

if not DEBUG and not SECRET_KEY:
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
    'corsheaders.middleware.CorsMiddleware', # Doit être le plus haut possible

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
# 🌍 Hosts & CORS & CSRF (Config Unifiée)
# ─────────────────────────────────────────────────────────────

# 1. ALLOWED HOSTS (Qui a le droit d'accéder au serveur ?)
ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "digiscia-backend.fly.dev",
    "api.digiscia.com",
    # Ajoute le nom de l'app Fly dynamiquement si présent
    os.getenv("FLY_APP_NAME", "") + ".fly.dev" if os.getenv("FLY_APP_NAME") else "",
]
# Nettoyage
ALLOWED_HOSTS = [host for host in ALLOWED_HOSTS if host]


# 2. CORS (Qui a le droit d'appeler l'API ?)
# On définit une liste explicite qui mélange PROD et LOCAL
CORS_ALLOWED_ORIGINS = [
    # --- PRODUCTION ---
    "https://digiscia.com",
    "https://www.digiscia.com",
    "https://digiscia-backend.fly.dev",
    "https://api.digiscia.com",
    
    # --- LOCAL DEV (Vite utilise souvent 5173 ou 5174) ---
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
]

# Ajout dynamique depuis le .env si besoin
env_cors = os.getenv("CORS_ALLOWED_ORIGINS", "")
if env_cors:
    CORS_ALLOWED_ORIGINS += env_cors.split(",")

CORS_ALLOW_CREDENTIALS = True


# 3. CSRF (Sécurité des formulaires et sessions)
# On fait confiance aux mêmes origines que le CORS + le backend lui-même
CSRF_TRUSTED_ORIGINS = [
    "https://digiscia-backend.fly.dev", 
    "https://api.digiscia.com",
] + CORS_ALLOWED_ORIGINS


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
# 🗄️ DATABASE
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
# 📁 STATIC & MEDIA
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
# 🔒 Sécurité HTTPS
# ─────────────────────────────────────────────────────────────
SECURE_SSL_REDIRECT = False # Géré par le proxy Fly.io
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'


USE_X_FORWARDED_HOST = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')


# ─────────────────────────────────────────────────────────────
# ID auto
# ─────────────────────────────────────────────────────────────
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'