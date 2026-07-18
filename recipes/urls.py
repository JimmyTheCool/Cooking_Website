from django.urls import path
from . import views
from django.contrib.auth import views as auth_views # Add this

urlpatterns = [
    path('recipe/new/', views.recipe_create, name='recipe_create'),
    path('', views.recipe_list, name='recipe_list'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('', views.recipe_list, name='recipe_list'),
    path('recipe/<int:pk>/', views.recipe_detail, name='recipe_detail'),
    path('recipe/<int:pk>/edit/', views.recipe_edit, name='recipe_edit'),         # New
    path('recipe/<int:pk>/upload-photo/', views.photo_upload, name='photo_upload'), # New
]