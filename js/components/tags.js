import { exposeMethod } from "../tools.js";
const DOM = document.createElement("aside");
const list = {
  ingredients: ["coco"],
  appliance: [],
  ustensils: [],
};

function initTags() {
  exposeMethod("removeTag", removeTag.bind(this));
  document.body.appendChild(DOM);
  updateTags();
}

function updateTags() {
  //interroger le data manager pour avoir la liste à) jour
  let html = "";
  for (const key of Object.keys(list)) {
    list[key].forEach((elm) => {
      html += tagHtml(elm, key);
    });
  }
  DOM.innerHTML = html;
}

function tagHtml(name, type) {
  return `<button class="${type}" onclick="removeTag('${name}', '${type}')"><i class="fas fa-heart"></i>${name}</button>`;
}

function removeTag(name, type) {
  //informer le datamanager
  updateTags();
}

export { initTags, updateTags };
