import { motion, toggleClass } from "./tools.js";

// banner按钮切换
function toggleBtn(){
    toggleClass(oldBtn,'sel')
    toggleClass(elBannerTitles[index % (elBannerTitles.length)],'sel')
    oldBtn = elBannerTitles[index % (elBannerTitles.length )]
}

// banner
let elBannerTitles = document.querySelectorAll('.banner-title li');
let elBanner= document.querySelector('.banner');


// banner复制第一个元素插入尾部
let bannerW = elBanner.parentElement.clientWidth;
elBanner.appendChild(elBanner.firstElementChild.cloneNode(true));
elBanner.style.width = bannerW * elBanner.children.length + 'px';

// 定时器,自动播放banner
let index = 0;
let oldBtn = elBannerTitles[index];
setInterval(()=>{
    index++;
    toggleBtn()
    motion(elBanner,{'margin-left': parseInt(bannerW) * -index + 'px'},()=>{
        if(index >= elBanner.children.length - 1){
            elBanner.style.marginLeft = 0;
            index=0;
        }
    },100,1)
},2000)