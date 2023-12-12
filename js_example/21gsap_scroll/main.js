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
        markers: 5,
        // onEnter:()=>{
        //     return (gsap.to)
        // }
        onEnter:()=>gsap.to("#contents",{
            backgroundColor:colorSection.dataset.bgcolor
        }),
    })
})

// let backColor=document.querySelectorAll("[data-bgcolor]");//속성data-bgcolor가 있는 요소들을 불름. 배열
// console.log(backColor)

// //item에는 배열의 요소들이 차례로 들어옴
// //index 해당 item의 들어온 요소들의 index 번호가 들어옴
// //backColor.forEach((item, index)=>{})

// backColor.forEach((colorSection, i)=>{
//     let prevBg = i === 0? "": backColor[i - 1].dataset.backColor;

//     ScrollTrigger.create({
//         trigger:colorSection,
//        start:'top 50%',
//        end:'bottom 5%',
//        markers:true,
//        onEnter:()=>gsap.to("#contents",{
//         backgroundColor:colorSection.dataset.bgcolor
//        }),
       

//     })
// })