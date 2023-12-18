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
gsap.registerPlugin(SplitText)
