import pandas as pd
import json

def update_website_data():
    try:
        df = pd.read_excel("Receipe_Data.xlsx")
    except FileNotFoundError:
        print("Error: Could not find 'Receipe_Data.xlsx'.")
        return

    # Clean up column names by removing colons and extra spaces
    df.columns = df.columns.str.replace(':', '', regex=False).str.strip()

    df = df.fillna("")
    recipes = df.to_dict(orient="records")

    with open("recipes.js", "w", encoding="utf-8") as f:
        f.write("const recipeData = " + json.dumps(recipes, indent=4) + ";")
        
    print("Success! recipes.js has been updated.")

if __name__ == "__main__":
    update_website_data()