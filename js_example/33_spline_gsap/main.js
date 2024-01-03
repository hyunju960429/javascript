let spline = document.querySelector(".spline");

gsap.timeline({
  scrollTrigger: {
    trigger: spline,
    start: "top top",
    end: "800% bottom",
    scrub: 1,
    // scroller:"#main",
    pin:true,
    markers:true
    },
})
//.to(spline, { xPercent : 0,duration:0.2})
.to(spline, { xPercent : 200, autoAlpha:0, delay:1})
.to(spline, { PointerEvent:"none"})