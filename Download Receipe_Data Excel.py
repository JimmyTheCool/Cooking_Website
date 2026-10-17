import urllib.request

def download_latest_recipe_data():
    # Raw file URL for Receipe_Data.xlsx on GitHub main branch
    url = "https://raw.githubusercontent.com/JimmyTheCool/Cooking_Website/main/Receipe_Data.xlsx"
    output_filename = "Receipe_Data.xlsx"
    
    print(f"Downloading latest {output_filename} from GitHub...")
    
    try:
        # Download the file and save it locally, replacing the old one
        urllib.request.urlretrieve(url, output_filename)
        print(f"Successfully downloaded and updated '{output_filename}'!")
    except Exception as e:
        print(f"Error downloading the file: {e}")

if __name__ == "__main__":
    download_latest_recipe_data()