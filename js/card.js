const createCard = data => {
    const card = $(`<div class="card" id="card-${data.idDrink}"></div>`);
    const img = $(`<img class="card-image" src="${data.strDrinkThumb}" alt="${data.strDrink}" width="200" height="240">`);
    const title = $(`<h1 class="card-title">${data.strDrink}</h1>`);

    card.append(img);
    card.append(title);

    return card;
};
