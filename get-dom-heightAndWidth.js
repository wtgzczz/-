﻿/*获取元素宽高*/
var p =document.getElementById('parent');
console.log(p.offsetWidth);       
console.log(p.offsetHeight);
var c = document.getElementById('child');
console.log(c.offsetHeight);
console.log(c.offsetWidth);
/*元素相对于其父元素的左边距，右边距*/
console.log(c.offsetLeft);
console.log(c.offsetTop);
/*竖横向滚动条*/
window.onscroll=function(){
console.log(document.body.scrollTop);
console.log(document.body.scrollLeft);
console.log(w);
console.log(h);
}
/*获取浏览器适口宽高*/
var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h=window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;
