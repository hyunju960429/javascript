let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-2",
        start: "top 90%",
        end: "180% 90%",
        scrub:true,
        markers:true,
    }
})


tl.to(".strip-r",{marginLeft: "-50%"})
tl.to(".strip-l",{marginLeft: "0%"},"<")

tl.to(".strip-r",{marginLeft: "-50%"},"green")
tl.to(".strip-l",{marginLeft: "0%"},"green")