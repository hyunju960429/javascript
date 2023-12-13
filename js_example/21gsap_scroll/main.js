const lenis = new Lenis({
    duration:1.2,
    easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//-------------------------------------------

// gsap

let backColor = document.querySelectorAll('[data-bgcolor]');
//속성 data-bgcolor가 있는 요소들을 NodeList배열로 불러옴.
console.log(backColor)

// backColor.forEach((item,index)=>{
//   //변수이름은 상관없으나 3개까지 가능 마지막변수에는 배열자체가 들어옴
//   //item에는 배열의 요소들이 차례로 들어옴
//   //index에는 해당 item에 들어온 요소들의 index번호가 들어옴
// })

backColor.forEach((colorSection,i)=>{
    let prevBG = i === 0 ? "" : backColor[i - 1].dataset.backColor;

    ScrollTrigger.create({
        trigger: colorSection,
        start: 'top 50%',
        end: 'bottom 5%',
        //markers: 5,
        // onEnter:()=>{
        //     return (gsap.to)
        // }
        onEnter:()=>gsap.to("#contents",{
            backgroundColor:colorSection.dataset.bgcolor
        }),
        onLeaveBack:()=>gsap.to("#contents",{
            backgroundColor:prevBG
        }),
    })
})

const horSection = gsap.utils.toArray('.port_desc .port');
//모둔 요소둘울 horiSection이라는 변수에 배열로 저장한다.
//console.log(horSection)

const horiz = gsap.to(horSection,{
    //x: (- 97 * (horSection.length - 1)) + "%",
    xPercent:- 97 * (horSection.length - 1),
    scrollTrigger:{
        trigger:".port_desc",
        start:"top 20%",
        end:"+=5000", //애니메이션이 시작되는 지점으로부터 5000px 떨어진곳에 도착하면 애니메이션 종료
        markers: 5,
        scrub: 1, //스크롤반응
        pin: true, //화면고정
    }
})