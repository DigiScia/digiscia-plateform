from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html
from .models import UserPerso, Admin, Contacts, Services, Projects, News, NewsLetterSuscribers

class AdminInline(admin.StackedInline):
    model = Admin
    extra = 0
    fk_name = 'user'

# Admin pour Admin
class AdminAdmin(admin.ModelAdmin):
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
    model = UserPerso
    list_display = ('email', 'username', 'date_joined', 'last_login', 'is_staff', 'is_active')
    list_filter = ['is_staff', 'is_active', 'date_joined']
    search_fields = ['email', 'username']
    ordering = ['-date_joined']
    fieldsets = (
        ('Informations personnelles', {'fields': ('username', 'email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Dates importantes', {'fields': ('last_login', 'date_joined')}),
    )

# Admin pour Contact
class ContactAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'email', 'phone', 'objet', 'sexe', 'created_at')
    list_filter = ['sexe', 'created_at']
    search_fields = ['fullname', 'email', 'message']
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    fieldsets = (
        ('Informations personnelles', {'fields': ('fullname', 'email', 'phone', 'sexe', 'birthday')}),
        ('Message', {'fields': ('objet', 'message')}),
        ('Métadonnées', {'fields': ('created_at',)}),
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

# Admin pour Projects
class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'short_description', 'start_date', 'created_at', 'display_image')
    list_filter = ['status', 'created_at']
    search_fields = ['title', 'description']
    readonly_fields = ('created_at', 'display_image')
    date_hierarchy = 'created_at'
    
    def short_description(self, obj):
        if obj.description:
            return obj.description[:100] + '...' if len(obj.description) > 100 else obj.description
        return "Pas de description"
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


class CustomAdminSite(admin.AdminSite):
    site_header = " Administration Digiscia"
    site_title = "Admin Digiscia"
    index_title = "Bienvenue sur le panneau d'administration"

custom_admin_site = CustomAdminSite(name="custom_admin")

# Enregistrer tous les modèles
custom_admin_site.register(UserPerso, UserPersoAdmin)
custom_admin_site.register(Admin, AdminAdmin)
custom_admin_site.register(Contacts, ContactAdmin)
custom_admin_site.register(Services, ServicesAdmin)
custom_admin_site.register(Projects, ProjectsAdmin)
custom_admin_site.register(News, NewsAdmin)
custom_admin_site.register(NewsLetterSuscribers, NewsLetterSuscribersAdmin)
