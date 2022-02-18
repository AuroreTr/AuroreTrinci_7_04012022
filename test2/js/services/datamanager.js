import recipes from "../../../recipes.js";
import Machin from "./machin.js";

const ingredients = new Machin(recipes, "ingredients");
const titles = new Machin(recipes, "name");
const appliance = new Machin(recipes, "appliance");
const ustensils = new Machin(recipes, "ustensils");

console.log(getRecipes("blen"));

/**
 * get the final recipes according to the data entries of the search bar and the selected tags
 *
 * @param   {String}  input  the data entries of the search bar
 *
 * @return  {Array}         the array of the index of final recipes
 */
function getRecipes(input) {
  const validRecipesIdByIngrendients = ingredients.hashTable[input];
  const validRecipesIdByTitles = titles.hashTable[input];
  const validRecipesIdByAppliance = appliance.hashTable[input];
  const validRecipesIdByUstensils = ustensils.hashTable[input];
  console.log(validRecipesIdByAppliance);
  // TODO : gérer les cas où l'un des tableau serait undefined car vide


  let validRecipesId = commonEntries(validRecipesIdByIngrendients, validRecipesIdByTitles);
  validRecipesId = commonEntries(validRecipesId, validRecipesIdByAppliance);
  validRecipesId = commonEntries(validRecipesId, validRecipesIdByUstensils);

  const finalRecipes = [];
  validRecipesId.forEach((recipeId) => {
    finalRecipes.push(recipes[recipeId]);
  });
  return finalRecipes;
}

/**
 * compare the values of two arrays to get the common value(s)
 *
 * @param   {Array}  arrayA  the first array to compare
 * @param   {Array}  arrayB  the second array to compare
 *
 * @return  {Array}          the array of the common values
 */
function commonEntries(arrayA, arrayB) {
  let commonRecipesId = [];
  for (let i = 0; i < arrayA.length; i++) {
    arrayB.forEach(element => {
      arrayA[i] === element ? commonRecipesId.push(element) : false;
    });
  }
  return commonRecipesId;
}
  

export { getRecipes };
