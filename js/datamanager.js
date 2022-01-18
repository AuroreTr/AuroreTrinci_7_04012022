/**
 * les données brutes récupérées
 * @type {Array}
 */
 let data;

 /**
  * la source des données
  * @type {String}
  */
 let src;
 
 /**
  * @param {String} source
  */
 function initDataManagerSource(source) {
   src = source;
 }
 
 /**
  * permet de récupérer toutes les donées du projet
  *
  * @return  {Promise.<Object>}  [return description]
  */
 async function getAllData() {
   try {
     const dataTmp = await fetch("./js/" + src);
     data = await dataTmp.json();
     // console.log(data);
     return data;
   } catch (err) {
     alert("echec");
     console.error(err);
   }
 }
 