const createInstructions = data => {
    const instructions = $(`<div class="title-container"></div>`);
    const instructionsTitle = $('<h2 class="info-title">Instructions</h2>');
    const instructionsText = $(`<h2 class="info-title instructions-text">${data.strInstructions}</h2>`);

    instructions.append(instructionsTitle);
    instructions.append(instructionsText);

    return instructions;
};
