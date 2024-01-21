const drinks = $('#drinks');
const info = $('#info');

const noInfo = $('<h1 class="no-info">Pick a Cocktail to Drink</h1>');
info.append(noInfo);

getList()
    .then(res => {
        res.drinks.forEach(drink => {
            const card = createCard(drink);

            card.click(function () {
                getInfo(drink.idDrink)
                    .then(res => {
                        const data = res.drinks[0];

                        const image = createImage(data);
                        const mainInfo = createCocktail(data);
                        const recipe = createRecipe(data);
                        const instructions = createInstructions(data);
                        const video = createVideo(data);

                        info.empty();

                        info.append(image);
                        info.append(mainInfo);
                        info.append(recipe);
                        info.append(instructions);
                        info.append(video);
                    });
            })

            drinks.append(card);
        });
    });
