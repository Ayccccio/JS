import {
    motion,
    toggleClass
} from "./tools.js";

// banner按钮切换
function toggleBtn() {
    toggleClass(oldBtn, 'sel')
    toggleClass(elBannerTitles[index % (elBannerTitles.length)], 'sel')
    oldBtn = elBannerTitles[index % (elBannerTitles.length)]
}

// banner移动
function bannerMove(){
    motion(elBanner, {
        'margin-left': parseInt(bannerW) * -index + 'px'
    }, () => {
        if (index >= elBanner.children.length - 1) {
            elBanner.style.marginLeft = 0;
            index = 0;
        }
    }, 100, 1)
}

// banner
let elBannerTitles = document.querySelectorAll('.banner-title li');
let elBanner = document.querySelector('.banner');


// banner复制第一个元素插入尾部
let bannerW = elBanner.parentElement.clientWidth;
elBanner.appendChild(elBanner.firstElementChild.cloneNode(true));
elBanner.style.width = bannerW * elBanner.children.length + 'px';

let index = 0;
let oldBtn = elBannerTitles[index];
// 定时器,自动播放banner
function autoBanner() {
    return setInterval(() => {
        index++;
        toggleBtn()
        bannerMove();
    }, 2000)
}
let timer = autoBanner()

// 鼠标移入bannerTitle
for(let i = 0; i < elBannerTitles.length; i++){
    elBannerTitles[i].onmouseenter = function(){
        clearInterval(timer);
        index = i;
        toggleBtn();
        bannerMove();
    }
    // 鼠标移出bannerTitle
    elBannerTitles[i].onmouseleave = function(){
        timer = autoBanner()
    }
}

// 鼠标移入banner窗口，停止自动轮播
elBanner.parentElement.onmouseenter = function(){
    clearInterval(timer);
}

// 鼠标移出banner窗口，自动轮播
elBanner.parentElement.onmouseleave = function(){
    timer = autoBanner()
}