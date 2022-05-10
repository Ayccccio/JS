/*
    获取样式
    el: 元素
    style: 元素css属性string类型
    返回值： 成功返回css样式值,失败返回undefined
 */
function getStyle(el, style) {
    return window.getComputedStyle ? window.getComputedStyle(el)[style] : el.currentStyle(style);
}

/*
    判断是否包含类名
    el: 元素
    className: 要添加的类名string类型
    返回值： 成功返回true,失败返回false
 */
function hasClass(el, className){
    var reg = new RegExp('\\b' + className + '\\b');
    return reg.test(el.className);
}

/*
    添加类名
    el: 元素
    className: 要添加的类名string类型
    返回值： 成功返回true,失败返回false
 */
function addClass(el, className){
    if(hasClass(el,className)){
        return false;
    }else{
        el.className += ' ' + className;
        return true;
    }
}

/*
    移除类名
    el: 元素
    className: 要添加的类名string类型
    返回值： 成功返回true,失败返回false
 */
function removeClass(el, className){
    var reg = new RegExp('\\b' + className + '\\b');
    if(reg.test(className)){
        el.className = el.className.replace(reg,'');
        el.className = el.className.replace('/\s+/',' ');
        return true;
    }
    return false;
}

/*
    切换类名
    el: 元素
    className: 要添加的类名string类型
 */
function toggleClass(el, className){
    var reg = new RegExp('\\b' + className + '\\b');
    if(reg.test(className)){
        el.className = el.className.replace(reg,'');
        el.className = el.className.replace('/\s+/',' ');
    }else{
        el.className += ' ' + className;
    }
}

/*
    运动函数
    el: 元素
    className: 要添加的类名string类型
 */
function motion(el, styleJson, callBack, time = 1000, timeout = 10, tween = 'Linear'){
    // 清除Interval,防止重复执行
    clearInterval(el.timer);
    console.log(el.timer);
    
    var startJ = {},    //元素样式开始值
        endJ = {},      //元素样式结束值
        changeJ = {},   //元素样式变化值
        count = time / timeout,     //变化次数
        index = 0;      //当前次数
        
    // 获取元素开始，结束，变化值
    for (const key in styleJson) {
        startJ[key] = parseFloat(getStyle(el, key));
        endJ[key] = styleJson[key];
        changeJ[key] = startJ[key] - endJ[key];
    }
    // 定时器开始元素变化
    el.timer = setInterval(function(){
        index++;
        // 拉终停表
        if(index >= count){
            console.log(startJ,endJ,changeJ);
            // 将样式值设置为最终值，避免因步长原因导致最后值差一点
            for (const key in endJ) {
                // 判断是否是opacity
                if(key == 'opacity'){
                    el.style[key] = endJ[key];
                    e.style.filter = 'Alpha(opacity=' + endJ[key] * 100 + ')';
                }
                el.style[key] = endJ[key] + 'px';
            }
            callBack && callBack.call(el);
            clearInterval(el.timer);
            return;
        }

        // 开始运动
        for (const key in endJ) {
            var step = Tween[tween](index, startJ[key], changeJ[key], count);
            console.log(index, startJ[key], changeJ[key], count);
            console.log(step);
            // 判断是否是opacity
            if(key == 'opacity'){
                el.style[key] = step;
                e.style.filter = 'Alpha(opacity=' + step * 100 + ')';
            }
            el.style[key] = step + 'px';
        }
    },timeout)
}

// 选中dot
function selDot(elDot, index){
    var elDots = elDot.children;
    for (const iterator of elDots) {
        removeClass(iterator, 'sel');
    }
    addClass(elDots[index], 'sel');
}

function toRight(elBanner, index){
    motion(elBanner,{marginLeft: index * bannerWidth}, function(){
        if(index == bannerNum){
            index = 0;
            elBanner.style.width = 0;
        }else if(index == 0){
            index = bannerNum -1;
            elBanner.style.width = bannerWidth * index;
        }
    })
}

var elBanner = document.getElementsByClassName('banner')[0];
var elDot = document.getElementsByClassName('dot')[0];
var elBtns = document.getElementsByClassName('btn');
var elDots = elDot.children;

var bannerNum = elBanner.children.length;   //banner初始个数
var index = 0;      //当前banner索引
var bannerWidth = elBanner.parentElement.clientWidth;

// 根据banner数量创建小圆点
for(var i = 0; i < bannerNum; i++){
    elDot.innerHTML += ' <li><a href="javascript:;"></a></li>';
}
// 默认选中第一个dot
selDot(elDot,0);

// 追加第一个banner，实现无缝轮播
elBanner.appendChild(elBanner.firstElementChild.cloneNode(true));
elBanner.style.width = (bannerNum + 1) * bannerWidth + 'px';

// dot点击事件
for(var i = 0; i < bannerNum; i++){
    (function(i){
        elDots[i].onclick = function(){
            index = i;
            selDot(elDot, index);
            toRight(elBanner, index);
        }
    })(i);
}

