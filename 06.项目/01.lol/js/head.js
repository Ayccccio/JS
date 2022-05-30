import * as tools from './tools.js'

/*=========== 头部start ===========*/
let elHeadSearchBtn = document.getElementsByClassName('head-search')[0];
let elHeadSearchFrame = document.getElementsByClassName('head-search-frame')[0];
let elSearchFrameCloseBtn = document.getElementsByClassName('close')[0];

// 搜索按钮点击
tools.addEvent(elHeadSearchBtn,'click',function(){
    tools.toggleClass(elHeadSearchFrame, 'show')
    console.log(this)
})

//搜索关闭按钮点击
tools.addEvent(elSearchFrameCloseBtn, 'click', function(){
    tools.toggleClass(elHeadSearchFrame, 'show')
})
/*=========== 头部end ===========*/

