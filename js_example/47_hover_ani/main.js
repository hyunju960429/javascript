const elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#image");
let img;

elems.forEach((elem)=>{
    elem.addEventListener('mouseenter',function(){
        img = elem.getAttribute('data-image');
        let w = elem.getAttribute('data-width');
        let h = elem.getAttribute('data-height');

        imageDiv.style.backgroundImage = `url(${img})`;
        imageDiv.style.width = w;
        imageDiv.style.height = h;


    });

    document.querySelector('#elem-div').addEventListener('mousemove',function(dets){
        imageDiv.style.left = `${dets.x - 150}px`;
        imageDiv.style.top = `${dets.y + 30}px`;
    })
})

//전체 좌우 이동
let docwidth = window.innerWidth; //화면의 넓이값
let wrap = document.querySelector("#elem-div");
let slideWidth = wrap.offsetWidth; //wrap의 넓이값
let imgs = document.querySelectorAll("#elem-div .elems");

wrap.addEventListener("mousemove",function(e){
    let mouseX = e.clientX;
    let offset = (mouseX / docwidth) * slideWidth - mouseX / 1.2;

    for(let i = 0; i < imgs.length;i++){
        imgs[i].style.transform = `translateX(-${offset}px)`;
    }
    
})

wrap.addEventListener("mouseleave",function(e){
    for(let i = 0; i < imgs.length;i++){
        imgs[i].style.transform = `translateX(0px)`;
        imgs[i].style.transition = `0.5s`;
    }
})