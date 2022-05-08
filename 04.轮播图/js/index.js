// 获取样式
function getStyle(el, style) {
    return window.getComputedStyle ? window.getComputedStyle(el)[style] : el.currentStyle(style);
}

// 根据banner数量添加dot
function addDot(banner, dot) {
    var dotText = '';
    for (var i = 0; i < banner.children.length; i++) {
        dotText += '<li><a href="javascript:;"></a></li>';
    }
    dot.innerHTML = dotText;
}

// 小圆点添加选中状态
function dotSel(elDot, index) {
    var dots = elDot.children;
    // 小圆点兄弟取消选中状态
    for (const iterator of dots) {
        iterator.className = iterator.className.replace('sel', '');
    }

    // 判断索引是否超出边界
    if (index < 0) {
        window.index = dots.length - 1;
    } else if (index >= dots.length) {
        window.index = 0;
    }
    // 点击圆点选中状态
    dots[window.index].className += 'sel';
}

// banner移动
function bannerMove(elBanner, index, step = 1, t = 0) {
    // 判断是否超出边界
    if(index > elBanner.children.length - 2 || index < 0){
        return;
    }

    // 取当前margin-left和将要设置的margin-left
    var currentMargin = parseInt(getStyle(elBanner, 'marginLeft'));
    var setMargin = -parseInt(getStyle(elBanner.parentElement, 'width')) * (index - 2);
    // 判断往左移还是往右移
    var time;
    if(currentMargin > setMargin){
        time = setInterval(function(){
            currentMargin -= step;  //每步大小，决定速度
            elBanner.style.marginLeft = currentMargin + 'px';
            if(currentMargin <= setMargin){  //判断是否结束
                elBanner.style.marginLeft = setMargin + 'px';
                clearInterval(time);
            }
        },t)
    }else if(currentMargin < setMargin){
        time = setInterval(function(){
            currentMargin += step;
            elBanner.style.marginLeft = currentMargin + 'px';
            if(currentMargin >= setMargin){
                elBanner.style.marginLeft = setMargin + 'px';
                clearInterval(time);
            }
        },t)
    }
}


var elBanner = document.getElementsByClassName('banner')[0];
var elDot = document.getElementsByClassName('dot')[0];
var elBtnL = document.getElementsByClassName('btn-l')[0];
var elBtnR = document.getElementsByClassName('btn-r')[0];
var index = 2; //当前banner页索引

// 计算banner数量添加小圆点
addDot(elBanner, elDot);

// banner前后复制一个，实现无缝轮播
console.log(elBanner.children.length);
elBanner.appendChild(elBanner.firstElementChild.cloneNode(true));
elBanner.insertBefore(elBanner.children[elBanner.children.length - 2].cloneNode(true), elBanner.children[0]);
// banner添加，容器宽度相应增加
elBanner.style.width = parseInt(getStyle(elBanner.parentElement, 'width')) * elBanner.children.length + 'px';
bannerMove(elBanner, 2, 800);

// 第一个小圆点选中
elDot.children[0].className += 'sel';

// 小圆点添加点击事件
elDot.onclick = function (e) {
    if (e.target.tagName == 'A') {
        // 查找当前点击圆点是第几个
        index = [...elDot.children].indexOf(e.target.parentElement);
        // banner移动
        bannerMove(elBanner, index);
        //小圆点选中
        dotSel(elDot, index);
    }
}

// 左按钮点击
elBtnL.onclick = function () {
    index--;
    bannerMove(elBanner, index + 1, 10);
    dotSel(elDot, index);
}

elBtnR.onclick = function () {
    index++;
    bannerMove(elBanner, index + 1, 10);
    dotSel(elDot, index);
}