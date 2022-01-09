const DOM = document.createElement("main");

function initMain() {
  document.body.appendChild(DOM);
  updateMain();
}

function updateMain() {
  //interroger le data manager pour avoir la liste à) jour
  let html = "";
//   for (const key of Object.keys(list)) {
//     list[key].forEach((elm) => {
//       html += tagHtml(elm, key);
//     });
//   }
  DOM.innerHTML = html;
}

function cardHtml(name, type) {
  return `<button class="${type}" onclick="removeTag('${name}', '${type}')"><i class="fas fa-heart"></i>${name}</button>`;
}

function removeTag(name, type) {
  //informer le datamanager
  updateMain();
}

export { initMain, updateMain };
