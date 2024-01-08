Splitting();

gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".rotatingHeader",
        start: "top 70%",
        end: "+=200 70%",
        scrub: 1,
        pin: true
    }
});


function initHeaders(){
    let header = document.querySelector('.rotatingHeader');
    let original = header.querySelector('h1');
    let clone = original.cloneNode(true);

    header.appendChild(clone);

    gsap.set(clone,{yPercent:-100})

    let originalSplit = document.querySelectorAll('h1:first-child .char');
    let cloneSplit = document.querySelectorAll('h1:last-child .char');


}


initHeaders();