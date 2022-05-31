import {Tween} from './animate.js'

// 函数封装
/**
 * 获取元素样式
 * @param {Element} el 元素
 * @param {Style} style 样式
 * @returns 成功返回元素字符串
 */
 function getStyle(el, style){
    return window.getComputedStyle ? window.getComputedStyle(el)[style] : el.currenStyle(style);
}

/**
 * 绑定事件兼容函数
 * @param {Element} el 
 * @param {String} event 
 * @param {Function} callBack 
 */
function addEvent(el, event, callBack){
    el.addEventListener ? el.addEventListener(event, callBack) : el.attachEvent('on'+event, callBack);
}

/**
 * 取消事件绑定
 * @param {*} el 
 * @param {*} event 
 * @param {*} callBack 
 */
function removeEvent(el, event, callBack){
    el.addEventListener ? el.addEventListener(event, callBack) : el.detachEvent('on'+event, callBack);
}

/**
 * 给元素添加类名
 * @param {Element} el 
 * @param {String} className 
 * @returns 
 */
function addClass(el, className){
    let reg = new RegExp('\\b'+className+'\\b');
    if(reg.test(el.className)){
        return;
    }else{
        el.className += ' ' + className;
    }
}

/**
 * 判断元素时候有该类名
 * @param {Element} el 
 * @param {String} className 
 * @returns 
 */
function hasClass(el, className){
    let reg = new RegExp('\\b'+className+'\\b');
    return reg.test(el.className);
}

/**
 * 删除元素类名
 * @param {Element} el 
 * @param {String} className 
 */
function removeClass(el, className){
    let reg = new RegExp('(\\s*)\\s'+className+'\\b');
    if(reg.test(el.className)){
        el.className = el.className.replace(reg, '');
    }
}

/**
 * 切换元素类名
 * @param {Element} el 
 * @param {String} className 
 */
function toggleClass(el, className){
    let reg = new RegExp('(\\s*)\\b'+className+'\\b');    
    if(reg.test(el.className)){
        el.className = el.className.replace(reg, '');
    }else{
        el.className += ' ' + className
    }
}

/*
    运动函数
    el: 元素
    className: 要添加的类名string类型
 */
    function motion(el, styleJson, callBack, time = 1000, timeout = 5, tween = 'Linear'){
        // 清除Interval,防止重复执行
        clearInterval(el.timer);
        
        var startJ = {},    //元素样式开始值
            endJ = {},      //元素样式结束值
            changeJ = {},   //元素样式变化值
            count = time / timeout,     //变化次数
            index = 0;      //当前次数
            
        // 获取元素开始，结束，变化值
        for (const key in styleJson) {
            startJ[key] = parseFloat(getStyle(el, key));
            endJ[key] = parseFloat(styleJson[key]);
            changeJ[key] = endJ[key] - startJ[key];
        }
    
        // 定时器开始元素变化
        el.timer = setInterval(function(){
            index++;
            // 拉终停表
            if(index >= count){
                // 将样式值设置为最终值，避免因步长原因导致最后值差一点
                for (const key in endJ) {
                    // 判断是否是opacity
                    if(key == 'opacity'){
                        el.style[key] = endJ[key];
                        e.style.filter = 'Alpha(opacity=' + endJ[key] * 100 + ')';
                    }
                    el.style[key] = endJ[key] + 'px';
                }
    
                // 运动结束执行回调
                callBack && callBack.call(el);
    
                clearInterval(el.timer);
                return;
            }
    
            // 开始运动
            for (const key in endJ) {
                // 运动函数计算每步移动距离
                var step = Tween[tween](index, startJ[key], changeJ[key], count);
                // 判断是否是opacity
                if(key == 'opacity'){
                    el.style[key] = step;
                    e.style.filter = 'Alpha(opacity=' + step * 100 + ')';
                }
                el.style[key] = step + 'px';
            }
        },timeout)
    }

export{getStyle, addEvent, addClass, removeClass, hasClass, toggleClass, motion}