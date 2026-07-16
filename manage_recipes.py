import sqlite3

DB_NAME = 'recipes.db'

def view_all_recipes():
    """Fetches and displays all recipes in the database."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    
    # Check if table exists first
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='recipes';")
    if not cursor.fetchone():
        print("\n[!] Database table 'recipes' does not exist yet. Run your initialization script first.")
        conn.close()
        return

    cursor.execute("SELECT id, title, category FROM recipes")
    recipes = cursor.fetchall()
    conn.close()
    
    if not recipes:
        print("\n[i] The database is currently empty.")
        return
        
    print(f"\n{'ID':<5} | {'Recipe Title':<30} | {'Category':<15}")
    print("-" * 55)
    for r_id, title, cat in recipes:
        print(f"{r_id:<5} | {title:<30} | {cat:<15}")

def delete_recipe(recipe_id):
    """Removes a specific recipe by its unique ID number."""
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    
    # Verify it exists
    cursor.execute("SELECT title FROM recipes WHERE id = ?", (recipe_id,))
    row = cursor.fetchone()
    
    if row:
        cursor.execute("DELETE FROM recipes WHERE id = ?", (recipe_id,))
        conn.commit()
        print(f"\n[✓] Successfully deleted: '{row[0]}'")
    else:
        print(f"\n[!] No recipe found with ID: {recipe_id}")
        
    conn.close()

if __name__ == "__main__":
    while True:
        print("\n=== Recipe Database Management ===")
        print("1. View all recipes")
        print("2. Delete a recipe by ID")
        print("3. Exit")
        
        choice = input("\nChoose an option (1-3): ").strip()
        
        if choice == '1':
            view_all_recipes()
        elif choice == '2':
            view_all_recipes()
            try:
                target_id = int(input("\nEnter the ID of the recipe to delete: "))
                confirm = input(f"Are you sure you want to delete ID {target_id}? (y/n): ").lower()
                if confirm == 'y':
                    delete_recipe(target_id)
            except ValueError:
                print("[!] Invalid input. Please enter a numerical ID.")
        elif choice == '3':
            print("Goodbye!")
            break
        else:
            print("[!] Invalid choice. Please pick 1, 2, or 3.")