const API_KEY = 'YOUR_API_KEY'; // Get this free at spoonacular.com/food-api

async function getRecipes() {
    const ingredients = document.getElementById('ingredientInput').value;
    const resultArea = document.getElementById('recipeResults');
    
    // 1. Fetch data from API
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=3&apiKey=${API_KEY}`);
    const data = await response.json();

    // 2. Clear previous results
    resultArea.innerHTML = '';

    // 3. Loop through results and create HTML cards
    data.forEach(recipe => {
        const card = `
            <div class="card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
            </div>`;
        resultArea.innerHTML += card;
    });
}