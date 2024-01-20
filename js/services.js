const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const alcoholic = `${baseUrl}filter.php?c=Cocktail`;
const recipe = `${baseUrl}lookup.php?i=`;

const getList = async () => {
    const response = await fetch(alcoholic);
    const data = await response.json();

    return data;
};

const getInfo = async id => {
    const response = await fetch(`${recipe}${id}`);
    const data = await response.json();

    return data;
};
