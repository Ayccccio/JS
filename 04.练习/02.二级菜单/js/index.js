function toggleMenu(el){
    // 获取元素当前高度
     var startH = el.offsetHeight;

    //  切换伸缩
    toggleClass(el, 'collapsed');

    // 获取元素伸缩后的高度
    var endH = el.offsetHeight;

    // 元素重置为切换前的高度
    el.style.height = startH + 'px';
    
    // 执行动画
    motion(el, {height:endH },function(){
        // 最后清除style,防止动画执行完行内样式覆盖内联样式，导致class切换无效
        this.style = '';
    },50);

}


var elMenuSpan = document.querySelectorAll('.menuSpan');
var elOpenDiv = elMenuSpan[0].parentElement;    //记录初始展开div


for(var i = 0; i < elMenuSpan.length; i++){
    elMenuSpan[i].onclick = function(){
        toggleMenu(this.parentElement);
        console.log(this.parentElement !== elOpenDiv && hasClass(this.parentElement,'collapsed'));
        if(this.parentElement !== elOpenDiv && hasClass(this.parentElement,'collapsed')){
            toggleMenu(elOpenDiv);
        }
        elOpenDiv = this.parentElement;
    }
}