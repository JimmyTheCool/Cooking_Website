import os
import sqlite3
import django

# 1. Initialize the Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cookbook_project.settings')
django.setup()

# Import the model AFTER setting up Django
from recipes.models import Recipe

def import_recipes(old_db_path):
    # 2. Connect to your original database
    try:
        conn = sqlite3.connect(old_db_path)
        cursor = conn.cursor()

        # Extract the data. (Adjust 'recipes' if your original table had a different name)
        cursor.execute("SELECT title, category, author, ingredients, instructions FROM recipes")
        all_recipes = cursor.fetchall()

        # 3. Loop through and create a Django model instance for each row
        count = 0
        for recipe in all_recipes:
            title, category, author, ingredients, instructions = recipe
            
            # This handles the INSERT operation into the new Django db.sqlite3
            Recipe.objects.create(
                title=title,
                category=category,
                author=author,
                ingredients=ingredients,
                instructions=instructions
            )
            count += 1
            
        print(f"Success! Imported {count} recipes into the new Django database.")

    except sqlite3.OperationalError as e:
        print(f"An error occurred: {e}. Please double-check your old table schema.")
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == '__main__':
    # Ensure this matches the exact name of your original SQLite file
    import_recipes('recipes.db')