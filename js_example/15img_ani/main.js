
window.addEventListener("mousemove",function(e){
    document.querySelector('#slidePhoto').style.top=`${e.clientY}px`;
    document.querySelector('#slidePhoto').style.left=`${e.clientX}px`;
    document.querySelector('#slidePhoto').style.transform=`translate(${-e.clientX * 0.2}px,${-e.clientY * 0.3}px)`;
})
/////////////////////
document.querySelector('#chainn').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="0%";
})

document.querySelector('#chainn').addEventListener("mouseleave",function(){
    this.style.color="initial"; //initial --> 초기값으로 돌아감
})
////////////////////

document.querySelector('#aty').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-120%";
})

document.querySelector('#aty').addEventListener("mouseleave",function(){
    this.style.color="initial";
})
//////////////
document.querySelector('#mic').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-240%";
})

document.querySelector('#mic').addEventListener("mouseleave",function(){
    this.style.color="initial";
})
////////////////////////
document.querySelector('#tapso').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-360%";
})

document.querySelector('#tapso').addEventListener("mouseleave",function(){
    this.style.color="initial";
})