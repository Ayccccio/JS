import { toggleClass } from "./tools.js";


let elActiveTitles = document.querySelectorAll('.active-title-items li');
let old = elActiveTitles[0];

for(let i = 0; i < elActiveTitles.length; i++){
    elActiveTitles[i].onmouseenter = function(){
        toggleClass(old, 'sel');
        toggleClass(this, 'sel');
        old = this;
    }
}