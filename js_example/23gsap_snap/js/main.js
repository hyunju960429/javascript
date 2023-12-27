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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/////////////////
Splitting(); //글자나누는 그거 연결

const stage = document.querySelector('.stage');
const slides = document.querySelectorAll('.slide');
const links = document.querySelectorAll('.slide_scroll-link');
let slideID = 0;



function initHeader(){
  let tl = gsap.timeline({delay:0.5});
  tl.from(".logo",1,{y:-40, opacity:0, ease: "power4.out"})
tl.from(".nav-btn_svg rect",{
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
  links.forEach((link,index,e)=>{
    let linksT = link.querySelector('.slide_scroll-line');

    link.addEventListener('click',(e)=>{
      e.preventDefault();
      gsap.to(window,{
        duration: 1.5,
        scrollTo:{
          y: "#slide_" + (index + 2),
        }
      })
    })
  

     link.addEventListener("mouseover", (e) => {
      gsap.to(linksT, {
        y: 40,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4",
      });
    });

    link.addEventListener("mouseout", (e) => {
      gsap.to(linksT, {
        y: 0,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4",
      });
    });
  })

  let top = document.querySelector('.footer_link-top');

  top.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window,{
      duration: 1.5,
      scrollTo:{
        y: "#slide_0",
      }
    })

    gsap.to('.footer_link-top-line',{
      scaleY:1,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power4",
    })
  });

  top.addEventListener("mouseover", (e) => {
    
    gsap.to(".footer_link-top-line", {
      scaleY: 3,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power4",
    });
  });

  top.addEventListener("mouseout", (e) => {
    gsap.to(".footer_link-top-line", {
      scaleY: 1,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power4",
    });
  });
}  //수정요망!

function initSlides(){
  slides.forEach((slide, i)=>{
    // let tl = gsap.timeline({
    //   scrollTrigger: slide[i],
    // });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "40% 50%",
      }
    });
    tl.from(slide.querySelectorAll('.col_content-title'),{
      ease: "power4.out",
      y: "+=5vh",
      duration: 2.5,
    })
    .from(slide.querySelectorAll('.line_inner'),{
      y:200,
      duration:2,
      ease: "power4.out",
      stagger:0.1,
    },"<")
    .from(slide.querySelectorAll('.col_content-txt'),{
      x:200,
      y:50,
      duration:2,
      ease: "power4.out",
    },"0.4") //0.4 => +=0.4 같은말
    .from(slide.querySelectorAll('.slide-link'),{
      x:-100,
      y:100,
      opacity:0,
      duration:2,
      ease: "power4.out",
    },"0.3")
    .from(slide.querySelectorAll('.slide_scroll-link'),{
      y:200,
      duration:3,
      ease: "power4.out",
    },"0.4")
    .to(slide.querySelectorAll('.slide_scroll-line'),{
      scaleY: 0.6,
      transformOrigin: "left bottom",
      duration:2.5,
      ease: "elastic.out(1,0.3)",
    },"0.4")

  })
}

function initParallax(){
  slides.forEach((slide, i) => {
    let imageWrappers = slide.querySelectorAll(".col_image-wrap");

    gsap.fromTo(
      imageWrappers,
      {
        y: "0vh",
      },
      {
        y: "-50vh",
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: "top bottom", // position of trigger meets the scroller position
          snap: {
            snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
            duration: 1,
            ease: "power4.inOut",
          },
        },
        ease: "none",
      }
    );
  });
}

function init(){
  initHeader();
  initIntro();
  initLinks();
  initSlides();
  initParallax();
}

init();

