from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html
from .models import UserPerso, AdminProfile, Services, News, NewsLetterSuscribers, JobOffer, JobApplication

# ==========================================================
# CONFIGURATION GLOBALE
# ==========================================================
admin.site.site_header = "Administration Digiscia"
admin.site.site_title = "Admin Digiscia"
admin.site.index_title = "Bienvenue sur le panneau d'administration"

# ==========================================================
# ADMIN CLASSES
# ==========================================================

# Admin pour AdminProfile
class AdminProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'permission', 'created_at', 'updated_at')
    list_filter = ['role', 'permission']
    search_fields = ['user__email']
    ordering = ['-created_at']
    fieldsets = (
        ('Utilisateur', {'fields': ('user',)}),
        ('Permissions', {'fields': ('role', 'permission')}),
    )

# Admin pour UserPerso
class UserPersoAdmin(UserAdmin):
    list_display = ('email', 'username', 'date_joined', 'last_login', 'is_staff', 'is_active')
    list_filter = ['is_staff', 'is_active', 'date_joined']
    search_fields = ['email', 'username']
    ordering = ['-date_joined']
    
    # Configuration des fieldsets pour supporter le modèle User personnalisé
    fieldsets = (
        ('Informations personnelles', {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Dates importantes', {'fields': ('last_login', 'date_joined')}),
    )

# Admin pour Services
class ServicesAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_description', 'created_at', 'display_image')
    search_fields = ['name', 'description']
    readonly_fields = ('created_at', 'display_image')
    
    def short_description(self, obj):
        return obj.description[:100] + '...' if len(obj.description) > 100 else obj.description
    short_description.short_description = 'Description'
    
    def display_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" />', obj.image.url)
        return "Pas d'image"
    display_image.short_description = 'Image'

# Admin pour News
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_content', 'created_at', 'display_image')
    search_fields = ['title', 'content']
    readonly_fields = ('created_at', 'display_image')
    date_hierarchy = 'created_at'
    
    def short_content(self, obj):
        return obj.content[:100] + '...' if len(obj.content) > 100 else obj.content
    short_content.short_description = 'Contenu'
    
    def display_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" />', obj.image.url)
        return "Pas d'image"
    display_image.short_description = 'Image'

# Admin pour NewsLetterSuscribers
class NewsLetterSuscribersAdmin(admin.ModelAdmin):
    list_display = ('email', 'subscribed_at')
    search_fields = ['email']
    readonly_fields = ('subscribed_at',)
    date_hierarchy = 'subscribed_at'

# ==========================================================
# ENREGISTREMENT (Sur le site par défaut)
# ==========================================================
admin.site.register(UserPerso, UserPersoAdmin)
admin.site.register(AdminProfile, AdminProfileAdmin)
admin.site.register(Services, ServicesAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(NewsLetterSuscribers, NewsLetterSuscribersAdmin)

class JobOfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'deadline', 'is_active', 'created_at')
    list_filter = ['is_active', 'location']
    search_fields = ['title', 'description']

class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'applicant_email', 'job_offer', 'status', 'interview_date', 'applied_at')
    list_filter = ['status', 'job_offer']
    search_fields = ['first_name', 'last_name', 'applicant_email']
    readonly_fields = ('applied_at',)
    fieldsets = (
        ('Informations Candidat', {'fields': ('job_offer', 'first_name', 'last_name', 'gender', 'applicant_email', 'phone', 'status', 'interview_date', 'applied_at')}),
        ('Dossier de Candidature', {'fields': ('resume', 'projects')}),
    )

admin.site.register(JobOffer, JobOfferAdmin)
admin.site.register(JobApplication, JobApplicationAdmin)