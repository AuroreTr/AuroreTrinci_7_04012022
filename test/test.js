import recipes from "../recipesData.js";

const hashsName = {};
const hashsIngredient = {};

// window["hash"] = hashsName;

let words;
for (let i=0, size=recipes.length; i<size; i++){
    //le nom de la recette
    words = stringToArray(recipes[i].name);
    words.forEach(word => {
        hashText( word , i, hashsName);
    });

    //ingredients
    words = "";
    recipes[i].ingredients.forEach(ingredient=>{
        words += " "+ingredient.ingredient;
    })
    words = stringToArray(words);
    words.forEach(word => {
        hashText( word , i, hashsIngredient);
    });
}
console.log("ingredients",hashsIngredient)

/**
 * [hashText description]
 *
 * @param   {String}  text  le texte à hacher
 * @param   {Number}  id    le numéro de la recette dans le tableau
 * @param   {Object}  table la table de hash à compléter
 *
 * @return  {void}          complete la table de hash
 */
function hashText(text, id, table){
    if (text.length < 3) return;
    const index = text.indexOf("'");
    if ( index >-1) text = text.slice(index+1);
    let truncatedText;
    for(let i=3, size=text.length; i<=size; i++){
        truncatedText=text.slice(0,i);
        if (!table[truncatedText]) table[truncatedText]=[];
        table[truncatedText].push(id);
    }
}

function stringToArray(text){
    text = text.toLowerCase();
    text = text.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    return [...new Set(text.split(" "))];
}


// console.log(hashsName)