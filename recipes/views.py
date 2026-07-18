from django.shortcuts import render, get_object_or_404, redirect
from .models import Recipe, RecipePhoto
from .forms import RecipeForm, RecipePhotoForm

def recipe_list(request):
    # Capture the search term and selected category from the URL
    search_query = request.GET.get('search', '')
    category_filter = request.GET.get('category', '')

    # Start with all recipes
    recipes = Recipe.objects.all()

    # Apply filters if the user searched for something
    if search_query:
        recipes = recipes.filter(title__icontains=search_query)
        
    if category_filter:
        recipes = recipes.filter(category=category_filter)

    # Get a list of unique categories for our dropdown box
    categories = Recipe.objects.values_list('category', flat=True).distinct()

    # Bundle everything up to send to the HTML template
    context = {
        'recipes': recipes,
        'categories': categories,
        'search_query': search_query,
        'selected_category': category_filter,
    }
    
    return render(request, 'recipes/recipe_list.html', context)

def recipe_detail(request, pk):
    # Grab the specific recipe, or return a 404 error if it doesn't exist
    recipe = get_object_or_404(Recipe, pk=pk)
    
    # Split the ingredients block into individual lines, removing empty ones
    ingredients_list = [line.strip() for line in recipe.ingredients.split('\n') if line.strip()]
    
    context = {
        'recipe': recipe,
        'ingredients_list': ingredients_list,
    }
    return render(request, 'recipes/recipe_detail.html', context)


def recipe_edit(request, pk):
    recipe = get_object_or_404(Recipe, pk=pk)
    
    if request.method == 'POST':
        # Bind the form to the POST data and the existing recipe instance
        form = RecipeForm(request.POST, instance=recipe)
        if form.is_valid():
            form.save()
            return redirect('recipe_detail', pk=recipe.pk)
    else:
        # If it's a GET request, pre-populate the form with the recipe's current data
        form = RecipeForm(instance=recipe)
        
    return render(request, 'recipes/recipe_form.html', {'form': form, 'recipe': recipe})

def photo_upload(request, pk):
    recipe = get_object_or_404(Recipe, pk=pk)
    
    if request.method == 'POST':
        # IMPORTANT: request.FILES is required for handling image uploads
        form = RecipePhotoForm(request.POST, request.FILES)
        if form.is_valid():
            photo = form.save(commit=False) # Pause saving so we can attach the recipe
            photo.recipe = recipe
            photo.save()
            return redirect('recipe_detail', pk=recipe.pk)
    else:
        form = RecipePhotoForm()
        
    return render(request, 'recipes/photo_upload_form.html', {'form': form, 'recipe': recipe})