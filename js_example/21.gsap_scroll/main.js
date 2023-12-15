const lenis = new Lenis({
    duration:1.2,
    easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//--------------------------------------

let backColor=document.querySelectorAll("[data-bgcolor]");//속성data-bgcolor가 있는 요소들을 불름. 배열
console.log(backColor)

//item에는 배열의 요소들이 차례로 들어옴
//index 해당 item의 들어온 요소들의 index 번호가 들어옴
//backColor.forEach((item, index)=>{})

backColor.forEach((colorSection, i)=>{
    let prevBg = i === 0? "": backColor[i - 1].dataset.backColor;

    ScrollTrigger.create({
        trigger:colorSection,
       start:'top 50%',
       end:'bottom 5%',
       //markers:true,
       onEnter:()=>gsap.to("#contents",{
        backgroundColor:colorSection.dataset.bgcolor
       }),
       onLeaveBack:()=>gsap.to("#contents",{
        backgroundColor:prevBg
       }),

    })
})


const horSection=gsap.utils.toArray('.port_desc .port');//모든요소들을 horSection이라는 변수에 배열로 저장한다.
//console.log(horSection)

const horiz=gsap.to(horSection,{
    //x: (- 97 * (horSection.length - 1))+"%",
    xPercent:- 97 * (horSection.length - 1),
    scrollTrigger:{
        trigger:'.port_desc',
        start:'top 20%',
        end:"+=5000",  //애니메이션이 시작되는 시점으로부터 5000px 떨어진곳에 도착하면 애니 끝난다.
        markers:true,
        scrub:1,   //스크롤반응
        pin:true  //화면고정
    }
})
