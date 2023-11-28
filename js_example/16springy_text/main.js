let allText=document.querySelectorAll('.text');
let delay = 0;

//allText.forEach((item,item의 index)=>{})
allText.forEach((el,idx)=>{
    el.style.animationDelay=`${delay}`;
    el.style.zIndex=allText.length - idx;
    el.classList.add('base-ani');
    delay +=0.15

})

document.getElementById('spring').addEventListener('mousemove',(e)=>{
    let innerWidth=window.innerWidth;//viewport의 넓이값
    let innetHeight=window.innerHeight; //viewport의 높이값

    let clientX=e.clientX;//기준이 viewport
    let clientY=e.clientY;
    //console.log(clientX + "," + clientY)

    let percetX = clientX/innerWidth
    let maxRangeX = innerWidth * 0.15;
    let minX= innerWidth/2  - maxRangeX;
    let maxX= innerWidth/2  + maxRangeX;
    let difX = maxX - minX;
    let pxOffset= difX * percetX
    let left = minX + pxOffset
    console.log(left);

    

})