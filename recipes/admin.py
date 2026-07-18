from django.contrib import admin
from .models import Recipe, RecipePhoto

admin.site.register(Recipe)
admin.site.register(RecipePhoto)