//运动公式
/*
 *  t:当前次数
 *  b:起始位置
 *  c:变化量
 *  d:总次数
 *
 */
var Tween = {
    Linear: function(t, b, c, d) {
        return c * t / d + b;
    },
    //二次的
    QuadEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    QuadEaseOut: function(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    QuadEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    //三次的
    CubicEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    CubicEaseOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    CubicEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    //四次的
    QuartEaseIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    QuartEaseOut: function(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    QuartEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    //正弦的
    SineEaseIn: function(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    SineEaseOut: function(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    SineEaseInOut: function(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    ExpoEaseIn: function(t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    ExpoEaseOut: function(t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    ExpoEaseInOut: function(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    CircEaseIn: function(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    CircEaseOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    CircEaseInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    ElasticEaseIn: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    ElasticEaseOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    },
    ElasticEaseInOut: function(t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    //冲过头系列
    BackEaseIn: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    BackEaseOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    BackEaseInOut: function(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    //弹跳系列
    BounceEaseIn: function(t, b, c, d) {
        return c - Tween.BounceEaseOut(d - t, 0, c, d) + b;
    },
    BounceEaseOut: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    BounceEaseInOut: function(t, b, c, d) {
        if (t < d / 2) return Tween.BounceEaseIn(t * 2, 0, c, d) * .5 + b;
        else return Tween.BounceEaseOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}


/**
 * 获取样式
 * @param {Element} el  要获取样式的元素
 * @param {String} style  要获取的样式
 * @returns String 成功返回获取到的样式，失败返回undefined
 */
function getStyle(el, style){
    return window.getComputedStyle ? window.getComputedStyle(el)[style] : el.cureentStyle(style);
}


/**
 * 判断元素是否包含指定类名
 * @param {Element} el 要查找的元素
 * @param {String} className  要查找的类名
 * @returns 找到类名返回true,没找到返回false
 */
function hasClass(el, className){
    var reg = new RegExp('\\b' + className + '\\b');
    return reg.test(el.className);
}


/**
 * 元素添加类名，如果已包含该类名则不添加
 * @param {Element} el 要操作的元素
 * @param {String} className  添加的类名
 */
function addClass(el, className){
    if(hasClass(el, className)){
        return false;
    }
    el.className += ' ' + className;
    return true;
}


/**
 * 替换类名，参数3不填则在el类名中删除参数2
 * @param {Element} el  要操作的元素
 * @param {String} searchValue  被替换的类名
 * @param {String} replaceValue  替换的类名
 * @returns 成功返回true,失败返回false
 */
function replaceClassName(el, searchValue, replaceValue = ''){
    var reg = new RegExp('\\b' + searchValue + '\\b');
    if(reg.test(el.className)){
        el.className = el.className.replace(reg, replaceValue);
        el.className = el.className.replace(/\\s{2,}/g, ' ');
        return true;
    }
    return false;
}


/**
 * 切换类名，如果有就删除，没有就添加
 * @param {Element} el 要操作的元素
 * @param {String} className 被切换的类名
 */
function toggleClass(el, className){
    var reg = new RegExp('\\b' + className + '\\b');
    if(reg.test(el.className)){
        el.className = el.className.replace(reg, '');
        el.className = el.className.replace(/\s{2,}/g, ' ');
    }else{
        el.className += ' ' + className;
    }
}


function motion(el, styleJSON, callBack, time = 200, timeOut = 2, tween = 'Linear'){
    // 清除前面的定时器，防止重复创建定时器
    clearInterval(el.timer);
    
    var startJ = {},    //记录元素样式当前值
        endJ = {},      //记录元素样式结束值
        changeJ = {},   //记录元素样式需改变的值，运动函数计算需要
        count = time / timeOut,     //计算定时器执行次数，用于清除定时器
        index = 0,      //记录定时器当前次数
        stepValue = 0;       //运动函数计算每一步的样式值
    
    // 获取元素样式当前，结束，改变值
    for (const key in styleJSON) {
        startJ[key] = parseFloat(getStyle(el, key));
        endJ[key] = parseFloat(styleJSON[key]);
        changeJ[key] = endJ[key] - startJ[key];
    }

    // 定时器开始
    el.timer = setInterval(function(){
        // 拉终停表
        if(index == count){
            for (const key in endJ) {
                // 判断样式是否是opacity
                if(key == 'opacity'){
                    el.style[key] = endJ[key];
                }else{
                    el.style[key] = endJ[key] + 'px';
                }
            }
            clearInterval(el.timer);
            callBack && callBack.call(el);
            return;
        }

        for (const key in endJ) {
            // 计算当前步的样式值
            stepValue = Tween[tween](index++, startJ[key], changeJ[key], count);
            // 判断样式是否是opacity
            if(key == 'opacity'){
                el.style[key] = endJ[key];
            }else{
                el.style[key] = stepValue + 'px';
            }
        }
    },timeOut)
}

