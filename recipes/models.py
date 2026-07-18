from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    author = models.CharField(max_length=100, blank=True, null=True)
    ingredients = models.TextField(help_text="Put each ingredient on a new line")
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class RecipePhoto(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='photos', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='recipe_photos/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Photo for {self.recipe.title}"