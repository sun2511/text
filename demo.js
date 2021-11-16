window.onload=function(){
var btn=document.getElementsByTagName("button")[0];
var text=document.getElementsByTagName("h1")[0];
btn.onclick=function(){
      text.innerHTML="text-demo 测试成功！";
      text.style.color="blue";
}
}