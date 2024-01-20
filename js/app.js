const drinks = $('#drinks');
const info = $('#info');

const noInfo = $('<h1 class="no-info">Pick a Cocktail to Drink</h1>');
info.append(noInfo);

getList()
    .then(res => {
        res.drinks.forEach(drink => {
            const card = $(`<div class="card" id="card-${drink.idDrink}"></div>`);
            const img = $(`<div><img class="card-image" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="200" height="240"></div>`);
            const title = $(`<h1 class="card-title">${drink.strDrink}</h1>`);

            card.click(function () {
                getInfo(drink.idDrink)
                    .then(res => {
                        const data = res.drinks[0];

                        const infoImage = $(`<div><img class="info-image" src="${data.strDrinkThumb}" alt="${drink.strDrink}"></div>`);
                        const infoMainData = $('<div class="info-data"></div>');

                        const fieldsContainer = $('<div class="title-container"></div>');
                        const fields = $('<p class="fields"></p>');
                        const infoTitle = $(`<h2 class="info-title"><span class="subtitle">Name:</span> ${data.strDrink}</h2>`);
                        const category = $(`<h2 class="info-title"><span class="subtitle">Category:</span> ${data.strCategory}</h2>`);
                        const glass = $(`<h2 class="info-title"><span class="subtitle">Glass:</span> ${data.strGlass}</h2>`);
                        
                        const instructions = $(`<div class="title-container"></div>`);
                        const instructionsTitle = $('<h2 class="info-title">Instructions</h2>');
                        const instructionsText = $(`<h2 class="info-title instructions-text">${data.strInstructions}</h2>`);

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

                        fields.append(infoTitle);
                        fields.append(category);
                        fields.append(glass);
                        fieldsContainer.append(fields);

                        infoMainData.append(fieldsContainer);
                        infoMainData.append(instructions);
                        infoMainData.append(recipe);

                        instructions.append(instructionsTitle);
                        instructions.append(instructionsText);

                        info.empty();
                        info.append(infoImage);
                        info.append(infoMainData);
                        
                        if (data.strVideo) {
                            const videoId = data.strVideo.split('=')[1];
                            const infoVideo = $(`<div><iframe class="info-video" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`);
                            info.append(infoVideo);
                        }
                    });
            })

            card.append(img);
            card.append(title);

            drinks.append(card);
        });
    });