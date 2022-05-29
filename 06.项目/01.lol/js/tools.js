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
    let reg = new RegExp('\\s'+className+'\\b');
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
    let reg = new RegExp('\\s'+className+'\\b');
    if(reg.test(el.className)){
        el.className = el.className.replace(reg, '');
    }else{
        el.className += ' ' + className;
    }
}

export{getStyle, addEvent, addClass, removeClass, hasClass, toggleClass}