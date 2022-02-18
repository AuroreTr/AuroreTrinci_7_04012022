export default class Machin {
  /**
   * la table de hash 
   * @type {Object}
   */
  hashTable = {};


  /**
   * liste des id des recttes valides
   * @type {Array}
   */
  validRecipesId = [];

  selectedTags = [];

  /**
   * [constructor description]
   *
   * @param   {Object}  recipes  toutes les recettes
   * @param   {("ingredients" | "name" | "appliance" | "ustensils")}  type le type d'élement a extraire
   *
   * @constructor
   */
  constructor(recipes, type) {
    let words;
    for (let i = 0, size = recipes.length; i < size; i++) {
      
      words = typeof recipes[i][type]=== "object" 
        ? this.extractFromArray(recipes[i][type], type)
        : this.stringToArray(recipes[i][type]);
      words.forEach((word) => {
        this.hashText(word, i);
      });

    }
  }

  /**
   * [stringToArray description]
   *
   * @param   {String}  text  [text description]
   *
   * @return  {Array}        [return description]
   */
  stringToArray(text) {
    text = text.toLowerCase();
    text = text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    return [...new Set(text.split(" "))];
  }

  /**
   * [extractFromArray description]
   *
   * @param   {Array}  array  [array description]
   * @param   {("ingredients" | "name" | "appliance" | "ustensils")}  type le type d'élement a extraire
   *
   * @return  {Array}         [return description]
   */
  extractFromArray(array, type){
    // console.log(array, type);
    let newType;
    switch (type) {
      case "ingredients"  : newType = "ingredient"; break;
      default : newType = type; break;
    }
    let words = "";
      array.forEach((element) => {
        // console.log("element",element)
        words += " " + element[newType];
      });
      return this.stringToArray(words);
  }

  /**
   * [hashText description]
   *
   * @param   {String}  text  le texte à hacher
   * @param   {Number}  id    le numéro de la recette dans le tableau
   *
   * @return  {void}          complete la table de hash
   */
  hashText(text, id) {
    if (text.length < 3) return;
    const index = text.indexOf("'");
    if (index > -1) text = text.slice(index + 1);
    let truncatedText;
    for (let i = 3, size = text.length; i <= size; i++) {
      truncatedText = text.slice(0, i);
      if (!this.hashTable[truncatedText]) this.hashTable[truncatedText] = [];
      this.hashTable[truncatedText].push(id);
    }
  }
}
