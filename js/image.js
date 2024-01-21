const createImage = data => {
    const image = $(`<div><img class="info-image" src="${data.strDrinkThumb}" alt="${data.strDrink}"></div>`);
    return image;
};
