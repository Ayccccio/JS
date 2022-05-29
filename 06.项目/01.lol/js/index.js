import * as tools from './tools.js'

// 头部
let elHeadSearchBtn = document.getElementsByClassName('head-search')[0];
let elHeadSearchFrame = document.getElementsByClassName('head-search-frame')[0];
let elSearchFrameCloseBtn = document.getElementsByClassName('close')[0];

// 搜索按钮点击
tools.addEvent(elHeadSearchBtn,'click',function(){
    tools.toggleClass(elHeadSearchFrame, 'show')
    console.log(this)
})

//关闭按钮点击
tools.addEvent(elSearchFrameCloseBtn, 'click', function(){
    tools.toggleClass(elHeadSearchFrame, 'show')
})