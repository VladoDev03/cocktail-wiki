const drinks = $('#drinks');
const info = $('#info');

const hash = window.location.hash.substring(1);

const loadContent = (id) => {
    getInfo(id)
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
};

if (hash) {
    loadContent(hash);
} else {
    const noInfo = $('<h1 class="no-info">Pick a Cocktail to Drink</h1>');
    info.append(noInfo);
}

getList()
    .then(res => {
        res.drinks.forEach(drink => {
            const card = createCard(drink);

            card.click(function () {
                window.location.hash = drink.idDrink;
                loadContent(drink.idDrink);
            })

            drinks.append(card);
        });
    });
