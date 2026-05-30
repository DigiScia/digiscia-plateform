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
SECRET_KEY = os.getenv("SECRET_KEY", "django-insecure-fallback-secret-key-for-building")

# En production, DEBUG doit être False.
# DEBUG = os.getenv("DEBUG", "False").lower() == "true"
DEBUG = True

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
    # Custom Admin (Jazzmin) - Must be before django.contrib.admin
    'jazzmin',
    
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
    
    # Scheduler
    'django_apscheduler',
]

# Config pour django_apscheduler
APSCHEDULER_DATETIME_FORMAT = "N j, Y, f:s a"
APSCHEDULER_RUN_NOW_TIMEOUT = 25  # Seconds


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
    "digiscia-corp-backend.fly.dev",
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


CSRF_TRUSTED_ORIGINS = [
    "https://digiscia-backend.fly.dev", 
    "https://api.digiscia.com",
    f"https://{os.getenv('FLY_APP_NAME')}.fly.dev" if os.getenv("FLY_APP_NAME") else "",
] + CORS_ALLOWED_ORIGINS

# Nettoyage pour enlever les chaînes vides
CSRF_TRUSTED_ORIGINS = [origin for origin in CSRF_TRUSTED_ORIGINS if origin]


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
LANGUAGE_CODE = 'fr-fr'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# ─────────────────────────────────────────────────────────────
# 📁 STATIC & MEDIA
# ─────────────────────────────────────────────────────────────
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

USE_R2 = os.getenv("USE_R2", "False").lower() in ("true", "1", "yes")

if USE_R2:
    STORAGES = {
        "default": {
            "BACKEND": "storages.backends.s3boto3.S3Boto3Storage",
        },
        "staticfiles": {
            "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
        },
    }
    AWS_ACCESS_KEY_ID = os.getenv("R2_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = os.getenv("R2_SECRET_ACCESS_KEY")
    AWS_STORAGE_BUCKET_NAME = os.getenv("R2_BUCKET_NAME")
    AWS_S3_ENDPOINT_URL = os.getenv("R2_ENDPOINT_URL")
    AWS_S3_CUSTOM_DOMAIN = os.getenv("R2_CUSTOM_DOMAIN")  # Ex: media.digiscia.com ou bucket-pub.r2.dev
    AWS_S3_REGION_NAME = "auto"
    AWS_QUERYSTRING_AUTH = False
    AWS_DEFAULT_ACL = None
    
    if AWS_S3_CUSTOM_DOMAIN:
        AWS_S3_URL_PROTOCOL = "https:"
        MEDIA_URL = f"https://{AWS_S3_CUSTOM_DOMAIN}/"
    else:
        MEDIA_URL = f"{AWS_S3_ENDPOINT_URL}/{AWS_STORAGE_BUCKET_NAME}/"
else:
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


# ─────────────────────────────────────────────────────────────
# 📧 CONFIGURATION EMAIL (SMTP GMAIL)
# ─────────────────────────────────────────────────────────────
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER  # Email utilisé pour l'envoi
CONTACT_EMAIL_RECIPIENT = EMAIL_HOST_USER  # Email qui recevra les formulaires

# ─────────────────────────────────────────────────────────────
# 🎨 JAZZMIN ADMIN SETTINGS
# ─────────────────────────────────────────────────────────────
JAZZMIN_SETTINGS = {
    "site_title": "Admin DigiScia",
    "site_header": "DigiScia",
    "site_brand": "DigiScia Admin",
    "welcome_sign": "Bienvenue sur l'administration DigiScia",
    "copyright": "DigiScia",
    "search_model": ["api.UserPerso", "api.JobApplication"],
    "user_avatar": None,
    "topmenu_links": [
        {"name": "Accueil",  "url": "admin:index", "permissions": ["auth.view_user"]},
        {"name": "Voir le site", "url": "https://digiscia.com", "new_window": True},
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": [],
    "icons": {
        "api.UserPerso": "fas fa-users",
        "api.AdminProfile": "fas fa-user-shield",
        "api.JobOffer": "fas fa-briefcase",
        "api.JobApplication": "fas fa-file-alt",
        "api.Services": "fas fa-cogs",
        "api.News": "fas fa-newspaper",
        "api.NewsLetterSuscribers": "fas fa-envelope",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": False,
    "custom_css": "api/css/admin_custom.css",
    "custom_js": None,
    "show_ui_builder": False,
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": False,
    "accent": "accent-primary",
    "navbar": "navbar-dark",
    "no_navbar_border": False,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "darkly",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success"
    }
}