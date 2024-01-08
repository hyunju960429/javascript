const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
///////////////////////////////

gsap.registerPlugin(ScrollTrigger);

let contentHolderHeight = document.querySelector('.content-holder').offsetHeight;
let imgHolderHeight = window.innerHeight;
let additionalScrollHeight = window.innerHeight;

let totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;

document.body.style.height = `${totalBodyHeight}px`;

ScrollTrigger.create({
    trigger:'.website-content',
    start: "bottom top",
    end: "+=1000% bottom",
    onEnter:()=>{
        gsap.set(".website-content",{
            position:"absolute",
            top:"195%",
        })
    },
    onLeaveBack:()=>{
        gsap.set(".website-content",{
            position:"fixed",
            top:0,
        })
    },
    markers:5
})

gsap.to('.header .letters:first-child',{
    x:() => -innerWidth * 3,
    scale:10,
    ease: "power2.inOut",
    scrollTrigger:{
        start: "top top",
        end: '+=200%',
        scrub:1
    }
})

gsap.to('.header .letters:last-child',{
    x:() => innerWidth * 3,
    scale:10,
    ease: "power2.inOut",
    scrollTrigger:{
        start: "top top",
        end: '+=200%',
        scrub:1
    }
})

gsap.to('.img-holder',{
    rotation:0,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power2.inOut",
    scrollTrigger:{
        start: "top top",
        end: '+=200%',
        scrub:1
    }
},"<")

gsap.to('.img-holder img',{
    scale:1.5,
    ease: "power2.inOut",
    scrollTrigger:{
        start: "top top",
        end: '+=200%',
        scrub:1
    }
},"<")