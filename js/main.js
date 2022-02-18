import { initTags } from "./components/tags.js";
import {initMain} from "./components/recipesCard.js";
import DropDown from "./components/dropdown.js";
window.onload = ()=>{
    initTags();
   const test =  new DropDown("ingredients");
    new DropDown("appliance");
    new DropDown("ustensils");
    initMain();
}