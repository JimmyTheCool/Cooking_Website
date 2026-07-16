import os
import sqlite3
import re
from docx import Document

DB_NAME = 'recipes.db'
RAW_DATA_DIR = './Raw_Recipes'  # Put your folders and files here

def clean_text(text):
    """Cleans up stray white spaces and normalizes line breaks."""
    text = re.sub(r'\n\s*\n', '\n', text) # Remove empty lines
    return text.strip()

def determine_category(title, content):
    """Guesses the category based on keywords, defaulting to Dinner."""
    content_lower = content.lower() + " " + title.lower()
    
    if any(k in content_lower for k in ['breakfast', 'toast', 'pancake', 'egg']):
        return 'Breakfast'
    if any(k in content_lower for k in ['soup', 'broth', 'ramen']):
        return 'Soup'
    if any(k in content_lower for k in ['dessert', 'cake', 'sweet', 'baking']):
        return 'Dessert'
    if any(k in content_lower for k in ['lunch', 'sandwich', 'salad']):
        return 'Lunch'
    
    return 'Dinner' # Default fallback

def parse_txt_file(file_path):
    """Extracts ingredients and steps from a standard text file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple extraction strategy: Split by common headers
    # If headers aren't found, it saves the whole block cleanly
    ingredients = "See file text"
    instructions = content
    
    parts = re.split(r'(?i)(ingredients:|steps:|instructions:|method:)', content)
    
    if len(parts) > 1:
        # Basic heuristic parsing if headers exist
        for i, part in enumerate(parts):
            if 'ingredients' in part.lower():
                ingredients = parts[i+1].split('Method:')[0].split('Steps:')[0]
            if 'steps' in part.lower() or 'instructions' in part.lower() or 'method' in part.lower():
                instructions = parts[i+1]

    return clean_text(ingredients), clean_text(instructions), content

def parse_docx_file(file_path):
    """Extracts text from a Word document."""
    doc = Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    
    content = '\n'.join(full_text)
    # Return crude splits; can be customized based on how your docx looks
    return "Extracted from Docx (Check file)", clean_text(content), content

def insert_to_db(title, category, ingredients, instructions):
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO recipes (title, category, ingredients, instructions)
        VALUES (?, ?, ?, ?)
    ''', (title, category, ingredients, instructions))
    conn.commit()
    conn.close()

def process_migration():
    if not os.path.exists(RAW_DATA_DIR):
        print(f"[!] Please create a folder named '{RAW_DATA_DIR}' and drop your recipe files inside.")
        return

    print("Starting recipe data migration...")
    
    # Walk through all folders and subfolders
    for root, dirs, files in os.walk(RAW_DATA_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            title = os.path.splitext(file)[0] # e.g., "Kaya Toast"
            
            # Skip hidden files
            if file.startswith('.'):
                continue
                
            print(f"-> Processing: {file}")
            
            try:
                if file.endswith('.txt'):
                    ingredients, instructions, raw = parse_txt_file(file_path)
                    category = determine_category(title, raw)
                    insert_to_db(title, category, ingredients, instructions)
                elif file.endswith('.docx'):
                    ingredients, instructions, raw = parse_docx_file(file_path)
                    category = determine_category(title, raw)
                    insert_to_db(title, category, ingredients, instructions)
            except Exception as e:
                print(f"   [X] Error parsing {file}: {e}")

    print("\n[✓] Migration complete! Check your database using manage_recipes.py or DB Browser.")

if __name__ == '__main__':
    process_migration()