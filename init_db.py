import sqlite3

# Connect to the database (it will create the file if it doesn't exist)
conn = sqlite3.connect('recipes.db')
cursor = conn.cursor()

# Create the recipes table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL
    )
''')

# Example: How to add a recipe programmatically
def add_recipe(title, category, ingredients, instructions):
    cursor.execute('''
        INSERT INTO recipes (title, category, ingredients, instructions)
        VALUES (?, ?, ?, ?)
    ''', (title, category, ingredients, instructions))
    conn.commit()

# Let's add one test breakfast recipe
# Note how we use '\n' (newlines) to separate items for the website later
sample_ingredients = "2 eggs\n1 cup flour\n1/2 cup milk"
sample_instructions = "1. Mix ingredients.\n2. Pour onto hot griddle.\n3. Flip when bubbly."

add_recipe("Simple Pancakes", "Breakfast", sample_ingredients, sample_instructions)

print("Database created and sample recipe added successfully!")
conn.close()