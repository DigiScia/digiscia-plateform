from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .models import UserPerso, Admin, Contacts, Services, Projects, News, NewsLetterSuscribers
from .serializers import UserSerializer, AdminSerializer, ContactSerializer, ServiceSerializer, ProjectSerializer, NewsSerializer, NewsLetterSuscriberSerializer
from django.shortcuts import render, redirect
from django.views import View
from .forms import AdminLoginForm, AdminCreationForm, NewsForm, ServiceForm, ProjectForm
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse, reverse_lazy
from django.contrib import messages
from .permissions import IsCommunityManager, IsContentManager

from django.contrib.auth.mixins import UserPassesTestMixin
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from rest_framework import generics, permissions
from .permissions import IsCommunityManager, IsContentManager
from django.contrib.auth.mixins import UserPassesTestMixin
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



# CRUD pour les utilisateurs
class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = UserPerso.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserPerso.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

# CRUD pour les projets
class ProjectListCreateAPIView(generics.ListCreateAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

class ProjectDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]

# CRUD pour les services
class ServiceListCreateAPIView(generics.ListCreateAPIView):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

class ServiceDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsAdminUser]

# CRUD pour les contacts
class ContactListCreateAPIView(generics.ListCreateAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]

class ContactDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]


# CRUD pour les news
class NewsListCreateAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    
    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser() or IsCommunityManager()]
    
class NewsListAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]    
    
# Pour NewsDetailAPIView
class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [permissions.IsAdminUser or IsCommunityManager]

# CRUD pour les inscrits à la newsletter
class NewsLetterSuscribersListCreateAPIView(generics.ListCreateAPIView):
    queryset = NewsLetterSuscribers.objects.all()
    serializer_class = NewsLetterSuscriberSerializer
    
    def get_permissions(self):
        if self.request.method == "POST":  # Tout le monde peut s'inscrire
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser() or IsCommunityManager()]

class NewsletterSignup(APIView):
    def post(self, request):
        email = request.data.get('email')

        if NewsLetterSuscribers.objects.filter(email=email).exists():
            return Response({"message": "Cet email est déjà inscrit à la newsletter."}, status=status.HTTP_400_BAD_REQUEST)

        serializer = NewsLetterSuscriberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Inscription réussie !"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  
    
class NewsLetterSuscribersListAPIView(generics.ListCreateAPIView):
    queryset = NewsLetterSuscribers.objects.all()
    serializer_class = NewsLetterSuscriberSerializer
    permission_classes = [AllowAny]
    
# Pour NewsLetterSuscribersDetailAPIView
class NewsLetterSuscribersDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NewsLetterSuscribers.objects.all()
    serializer_class = NewsLetterSuscriberSerializer
    permission_classes = [permissions.IsAdminUser or IsCommunityManager]

# Vue de base pour le tableau de bord
class AdminDashboardView(UserPassesTestMixin, View):
    template_name = 'admin/dashboard.html'
    
    def test_func(self):
        # Vérifie si l'utilisateur est un administrateur
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return True
        except Admin.DoesNotExist:
            return False
    
    def get(self, request):
        try:
            admin = Admin.objects.get(user=request.user)
            context = {
                'admin': admin,
                'is_community': admin.is_community_manager(),
                'is_superadmin': admin.is_superadmin(),
            }
            
            # Statistiques de base
            context['news_count'] = News.objects.count()
            context['subscribers_count'] = NewsLetterSuscribers.objects.count()
            context['services_count'] = Services.objects.count()
            context['projects_count'] = Projects.objects.count()
            context['contacts_count'] = Contacts.objects.count()
            
            return render(request, self.template_name, context)
        except Admin.DoesNotExist:
            messages.error(request, "Vous n'avez pas les droits administrateur.")
            return redirect('admin-login')

# Vue de connexion
class AdminLoginView(View):
    template_name = 'admin/login.html'
    form_class = AdminLoginForm
    
    def get(self, request):
        if request.user.is_authenticated:
            return redirect('admin-dashboard')
        return render(request, self.template_name, {'form': self.form_class()})
    
    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            user = authenticate(request, email=email, password=password)
            
            if user is not None:
                try:
                    admin = Admin.objects.get(user=user)
                    login(request, user)
                    return redirect('admin-dashboard')
                except Admin.DoesNotExist:
                    messages.error(request, "Vous n'avez pas les droits administrateur.")
            else:
                messages.error(request, "Email ou mot de passe incorrect.")
        
        return render(request, self.template_name, {'form': form})

# Vue de déconnexion
@login_required
def admin_logout(request):
    logout(request)
    return redirect('admin-login')

# Vue de création d'administrateur (réservée aux superadmins)
class AdminCreateView(UserPassesTestMixin, View):
    template_name = 'admin/create_admin.html'
    form_class = AdminCreationForm
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def get(self, request):
        return render(request, self.template_name, {'form': self.form_class()})
    
    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.save()
            role = form.cleaned_data['role']
            permission = form.cleaned_data['permission']
            
            # Créer l'objet Admin associé
            Admin.objects.create(
                user=user,
                role=role,
                permission=permission
            )
            
            messages.success(request, f"Administrateur {user.email} créé avec succès.")
            return redirect('admin-list')
        
        return render(request, self.template_name, {'form': form})

# Vue de liste des administrateurs
class AdminListView(UserPassesTestMixin, ListView):
    model = Admin
    template_name = 'admin/admin_list.html'
    context_object_name = 'admins'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

# Vues CRUD pour les News (community managers et superadmins)
class NewsListView(UserPassesTestMixin, ListView):
    model = News
    template_name = 'admin/news_list.html'
    context_object_name = 'news'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_community_manager() or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

class NewsCreateView(UserPassesTestMixin, CreateView):
    model = News
    form_class = NewsForm
    template_name = 'admin/news_form.html'
    success_url = reverse_lazy('admin-news-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.is_community_manager() and admin.can_create()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Article créé avec succès.")
        return super().form_valid(form)

class NewsUpdateView(UserPassesTestMixin, UpdateView):
    model = News
    form_class = NewsForm
    template_name = 'admin/news_form.html'
    success_url = reverse_lazy('admin-news-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.is_community_manager() and admin.can_update()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Article mis à jour avec succès.")
        return super().form_valid(form)

class NewsDeleteView(UserPassesTestMixin, DeleteView):
    model = News
    template_name = 'admin/news_confirm_delete.html'
    success_url = reverse_lazy('admin-news-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.is_community_manager() and admin.can_delete()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def delete(self, request, *args, **kwargs):
        messages.success(self.request, "Article supprimé avec succès.")
        return super().delete(request, *args, **kwargs)

# Vues CRUD pour les abonnés à la newsletter 
class NewsletterListView(UserPassesTestMixin, ListView):
    model = NewsLetterSuscribers
    template_name = 'admin/newsletter_list.html'
    context_object_name = 'subscribers'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_community_manager() or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

class NewsletterDeleteView(UserPassesTestMixin, DeleteView):
    model = NewsLetterSuscribers
    template_name = 'admin/newsletter_confirm_delete.html'
    success_url = reverse_lazy('admin-newsletter-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.is_community_manager() and admin.can_delete()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def delete(self, request, *args, **kwargs):
        messages.success(self.request, "Abonné supprimé avec succès.")
        return super().delete(request, *args, **kwargs)

# Vues pour les services (Content managers et superadmins)
class ServiceListView(UserPassesTestMixin, ListView):
    model = Services
    template_name = 'admin/service_list.html'
    context_object_name = 'services'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.role == 'content' or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

class ServiceCreateView(UserPassesTestMixin, CreateView):
    model = Services
    form_class = ServiceForm
    template_name = 'admin/service_form.html'
    success_url = reverse_lazy('admin-service-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_create()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Service créé avec succès.")
        return super().form_valid(form)

class ServiceUpdateView(UserPassesTestMixin, UpdateView):
    model = Services
    form_class = ServiceForm
    template_name = 'admin/service_form.html'
    success_url = reverse_lazy('admin-service-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_update()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Service mis à jour avec succès.")
        return super().form_valid(form)

class ServiceDeleteView(UserPassesTestMixin, DeleteView):
    model = Services
    template_name = 'admin/service_confirm_delete.html'
    success_url = reverse_lazy('admin-service-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_delete()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def delete(self, request, *args, **kwargs):
        messages.success(self.request, "Service supprimé avec succès.")
        return super().delete(request, *args, **kwargs)

# Vues pour les projets (Content managers et superadmins)
class ProjectListView(UserPassesTestMixin, ListView):
    model = Projects
    template_name = 'admin/project_list.html'
    context_object_name = 'projects'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.role == 'content' or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

class ProjectCreateView(UserPassesTestMixin, CreateView):
    model = Projects
    form_class = ProjectForm
    template_name = 'admin/project_form.html'
    success_url = reverse_lazy('admin-project-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_create()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Projet créé avec succès.")
        return super().form_valid(form)

class ProjectUpdateView(UserPassesTestMixin, UpdateView):
    model = Projects
    form_class = ProjectForm
    template_name = 'admin/project_form.html'
    success_url = reverse_lazy('admin-project-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_update()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def form_valid(self, form):
        messages.success(self.request, "Projet mis à jour avec succès.")
        return super().form_valid(form)

class ProjectDeleteView(UserPassesTestMixin, DeleteView):
    model = Projects
    template_name = 'admin/project_confirm_delete.html'
    success_url = reverse_lazy('admin-project-list')
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return (admin.role == 'content' and admin.can_delete()) or admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
    
    def delete(self, request, *args, **kwargs):
        messages.success(self.request, "Projet supprimé avec succès.")
        return super().delete(request, *args, **kwargs)

# Vue pour voir les contacts (superadmin uniquement)
class ContactListView(UserPassesTestMixin, ListView):
    model = Contacts
    template_name = 'admin/contact_list.html'
    context_object_name = 'contacts'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_superadmin()
        except Admin.DoesNotExist:
            return False

class ContactDetailView(UserPassesTestMixin, DetailView):
    model = Contacts
    template_name = 'admin/contact_detail.html'
    context_object_name = 'contact'
    
    def test_func(self):
        if not self.request.user.is_authenticated:
            return False
        try:
            admin = Admin.objects.get(user=self.request.user)
            return admin.is_superadmin()
        except Admin.DoesNotExist:
            return False
