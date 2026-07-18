import os
import django

# 1. Initialize the Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cookbook_project.settings')
django.setup()

from recipes.models import Recipe

def clean_line_breaks():
    # Grab all the recipes in the database
    all_recipes = Recipe.objects.all()
    fixed_count = 0

    for recipe in all_recipes:
        needs_saving = False
        
        # Check and replace literal '\n' in ingredients
        if r'\n' in recipe.ingredients:
            recipe.ingredients = recipe.ingredients.replace(r'\n', '\n')
            needs_saving = True
            
        # Check and replace literal '\n' in instructions
        if r'\n' in recipe.instructions:
            recipe.instructions = recipe.instructions.replace(r'\n', '\n')
            needs_saving = True
            
        # Only save to the database if we actually made a change
        if needs_saving:
            recipe.save()
            fixed_count += 1

    print(f"Success! Cleaned up line breaks for {fixed_count} recipes.")

if __name__ == '__main__':
    clean_line_breaks()