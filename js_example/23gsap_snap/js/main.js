const lenis = new Lenis({
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    duration: 1.5,
})



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//////////////////

gsap.registerPlugin(ScrollTrigger)

/////////////////
Splitting(); //글자나누는 그거 연결

const stage = document.querySelector('.stage');
const slides = document.querySelectorAll('.slide');



function initHeader(){
  let tl = gsap.timeline({delay:0.5});
  tl.from(".logo",1,{y:-40, opacity:0, ease: "power4.out"})
tl.from(".nav-btn__svg rect",{
  scale:0, transformOrigin:"center right", duration:0.6, ease: "power4.out", stagger:0.1
},0.6)
tl.to(".nav-rect",{scale:0.8, transformOrigin:"center left", duration:0.4, ease: "power4.out", stagger:0.1},"-=0.6")

let navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener("mouseover",()=>{
  gsap.to('.nav-rect',{scaleX:1,transformOrigin:"top left", duration:0.4, ease: "power4.out"})
})


navBtn.addEventListener("mouseleave",()=>{
  gsap.to('.nav-rect',{scaleX:0.8,transformOrigin:"top left", duration:0.4, ease: "power4.out"})
})

}

function initIntro(){
    let gTl = gsap.timeline();
    gTl.from(".intro_img",1.5,{opacity:0,yPercent:130,stagger:0.9,})
    gTl.from(".intro_title .char",1,{opacity:0,yPercent:130,stagger:0.06,ease: "back.out(1.7)",},"-=0.9") 
    //중간에 있는 숫자 1은 duration을 뜻함 1s
}

function initLinks(){

}

function initSlides(){
  slides.forEach((slide, i)=>{
    // let tl = gsap.timeline({
    //   scrollTrigger: slide[i],
    // });
    let tl =gsap.timeline();
    tl.from(slide.querySelectorAll('.col_content-title'),{
      ease: "power4.out",
      y: "+=5vh",
      duration: 2.5,
    })
  })
}

function init(){
  initHeader();
  initIntro();
  initLinks();
  initSlides();
}

init();

