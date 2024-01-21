const createRecipe = data => {
    const recipe = $('<div class="title-container"></div>');
    const ingredientsText = $('<h2 class="info-title">Ingredients</h2>');
    const ingredientsList = $('<ul class="info-ingredients"></ul>');

    for (let i = 0; i <= 14; i++) {
        const ingredient = data[`strIngredient${i + 1}`];
        const measure = data[`strMeasure${i + 1}`];

        if (ingredient && measure) {
            const recipeItem = $(`<li><h2 class="recipe-item">${ingredient}: ${measure}</h2></li>`);
            ingredientsList.append(recipeItem);
        }
    }

    recipe.append(ingredientsText);
    recipe.append(ingredientsList);

    return recipe;
};
