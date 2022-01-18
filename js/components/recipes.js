const DOM = document.createElement("main");

function initMain() {
  document.body.appendChild(DOM);
  updateTags();
}

function updateTags() {
  //interroger le data manager pour avoir la liste à) jour
  let html = "";
//   for (const key of Object.keys(list)) {
//     list[key].forEach((elm) => {
//       html += tagHtml(elm, key);
//     });
//   }
  DOM.innerHTML = html;
}

function addTag(name, type) {
  return `<button class="${type}" onclick="removeTag('${name}', '${type}')"><i class="fas fa-heart"></i>${name}</button>`;
}

function removeTag(name, type) {
  //informer le datamanager
  updateTags(); //mettre à jour l'affichage des tags
  //mettre à jour l'affichage de la liste des recettes
}

export { initMain, updateTags };
