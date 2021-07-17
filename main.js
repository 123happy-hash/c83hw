var lpx, lpy;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red"
width=200;

width1=screen.width;
var new_width=width1-70;
var new_height=screen.height-400;

if (width1<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("my_color").value;
    width=document.getElementById("my_width").value;
    lpx=e.touches[0].clientX-canvas.offsetLeft;
    lpy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    cpx=e.touches[0].clientX-canvas.offsetLeft;
    cpy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lpx,lpy);
    ctx.lineTo(cpx,cpy);
    ctx.stroke();
    lpx=cpx;
    lpy=cpy;
}
function Clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}