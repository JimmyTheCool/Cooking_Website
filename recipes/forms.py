from django import forms
from .models import Recipe, RecipePhoto

class RecipeForm(forms.ModelForm):
    class Meta:
        model = Recipe
        fields = ['title', 'category', 'author', 'ingredients', 'instructions']
        # Adding a bit of styling to the text areas
        widgets = {
            'ingredients': forms.Textarea(attrs={'rows': 6, 'style': 'width: 100%;'}),
            'instructions': forms.Textarea(attrs={'rows': 10, 'style': 'width: 100%;'}),
        }

class RecipePhotoForm(forms.ModelForm):
    class Meta:
        model = RecipePhoto
        fields = ['image']