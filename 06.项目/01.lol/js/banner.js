import { getStyle } from "./tools";

// banner
let elBannerTitles = document.querySelectorAll('.banner-thile li');
let elBanner= document.querySelector('.banner');


// banner复制第一个元素插入尾部
elBanner.appendChild(elBanner.firstElementChild.cloneNode(true));
elBanner.style.width = elBanner.clientWidth * 