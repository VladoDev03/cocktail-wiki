const createCocktail = data => {
    const mainInfo = $('<div class="title-container"></div>');
    const fields = $('<p class="fields"></p>');
    const infoTitle = $(`<h2 class="info-title"><span class="subtitle">Name:</span> ${data.strDrink}</h2>`);
    const category = $(`<h2 class="info-title"><span class="subtitle">Category:</span> ${data.strCategory}</h2>`);
    const glass = $(`<h2 class="info-title"><span class="subtitle">Glass:</span> ${data.strGlass}</h2>`);

    fields.append(infoTitle);
    fields.append(category);
    fields.append(glass);
    mainInfo.append(fields);

    return mainInfo;
};
