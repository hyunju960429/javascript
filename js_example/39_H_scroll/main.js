const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

///////
let slider = document.querySelector('.slider');
let sliderWrapper = document.querySelector('.slider-wrapper');
let slides = document.querySelectorAll('.slide');


function updateScaleAniPosition(){
    slides.forEach((slide)=>{
        let rect = slide.getBoundingClientRect();
        let centerPosition = (rect.left + rect.right) / 2;
        let distanceFromCenter = centerPosition;
        let scale;

        if(distanceFromCenter > 0){
            scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth)
        }else {
            scale = Math.min(0.5, Math.abs(1 - distanceFromCenter) / window.innerWidth)
        }
        gsap.set(slide,{scale:scale})
    })
}



let horiz = gsap.to(slides,{
    xPercent: -97 * (slides.length - 1),
    scrollTrigger: {
        trigger: ".page",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        onUpdate: ()=>{updateScaleAniPosition()}
    }
});
updateScaleAniPosition();

