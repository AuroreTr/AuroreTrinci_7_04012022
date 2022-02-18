import recipes from "../../../recipes.js";
import Machin from "./machin.js";

const ingredients  = new Machin(recipes, "ingredients");
const titles  = new Machin(recipes, "name");
const appliance  = new Machin(recipes, "appliance");
const ustensils  = new Machin(recipes, "ustensils");

console.log(ingredients)
console.log(titles);

/**
 * [getRecipes description]
 *
 * @return  {Array}  [return the array of the recipes par rapport aux entrée de la barre de recherche]
 */
function getRecipes(){
    let validRecipesId = commonEntries( ingredients.validRecipesId, titles.validRecipesId);
    validRecipesId = commonEntries (validRecipesId, appliance.validRecipesId);
    //TODO compléter
    const finalRecipes = [];
    validRecipesId.forEach(recipeId => {
        finalRecipes.push(recipes[recipeId])
    });
    return finalRecipes;
}

function commonEntries(arrayA, arrayB){
    return []; //TODO finir la fonction
}


export {
    getRecipes
}