import { toggleClass } from "./tools.js";


let elNewsTitles = document.querySelectorAll('.news-title li');
let old = elNewsTitles[0];

for(let i = 0; i < elNewsTitles.length; i++){
    elNewsTitles[i].onmouseenter = function(){
        toggleClass(old, 'sel');
        toggleClass(this, 'sel');
        old = this;
    }
}