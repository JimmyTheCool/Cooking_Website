import sqlite3

def extract_recipes_to_file(db_path, output_file):
    # Connect to the SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # Execute a query to pull the core recipe data
        cursor.execute("""
            SELECT title, category, author, ingredients, instructions 
            FROM recipes
        """)
        
        all_recipes = cursor.fetchall()
        
        # Open a new file in write mode with UTF-8 encoding
        with open(output_file, 'w', encoding='utf-8') as f:
            for recipe in all_recipes:
                title, category, author, ingredients, instructions = recipe
                
                # Write the formatted output directly to the file
                f.write(f"Recipe: {title} (by {author})\n")
                f.write(f"Category: {category}\n")
                f.write(f"--- Ingredients ---\n{ingredients}\n")
                f.write(f"--- Instructions ---\n{instructions}\n")
                f.write("=" * 40 + "\n\n")
                
        print(f"Success! Extracted {len(all_recipes)} recipes to '{output_file}'.")
            
    except sqlite3.OperationalError as e:
        print(f"An error occurred: {e}. Please check your table schema.")
    finally:
        conn.close()

# Executing with the verified database file and setting the output file name
extract_recipes_to_file('recipes.db', 'family_recipes.md')