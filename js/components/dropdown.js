import { exposeMethod } from "../tools.js";

export default class DropDown {
  constructor(type) {
    this.DOM = document.createElement("dropdown");
    this.DOM.className = type;
    document.body.appendChild(this.DOM);
    this.updateDropDown();
  }
  initDropDown(type) {
    //   exposeMethod("removeTag", removeTag.bind(this));
  }
  updateDropDown() {
    //interroger le data manager pour avoir la liste à) jour
    let html = "";
    //   for (const key of Object.keys(list)) {
    //     list[key].forEach((elm) => {
    //       html += tagHtml(elm, key);
    //     });
    //   }
    this.DOM.innerHTML = html;
  }
}
