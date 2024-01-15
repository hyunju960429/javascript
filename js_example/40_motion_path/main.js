gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

let path1 = document.querySelector('.theLine');
let path1Length = path1.getTotalLength();
//console.log(path1Length) //2530.276123046875

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;


let pluses = gsap.timeline({
    defaults:{
        duration:0.05,
        autoAlpha: 1,
        scale:2,
        transformOrigin: "center",
        ease: "elastic.out(1,0.3)",
    }
})


.to(".ball01,.text01",{},0.15)
.to(".ball02,.text02",{},0.25)
.to(".ball03,.text03",{},0.36)
.to(".text04",{},0.8)

let main = gsap.timeline({
    defaults:{duration:1},
    scrollTrigger: {
    trigger: "#svg",
        start: "top center",
        end: "+=1500",
        scrub:0.9,
    },
    onUpdate: animateUpdate,
})
.to(".ball04",{duration:0.01,autoAlpha:1})
.to(path1,{strokeDashoffset:0},"ball")
.to(".ball04",{
    motionPath: {
        path: ".theLine", //path연결
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
    }
},"ball"
)
.add(pluses,0) //2)

function animateUpdate(){
    console.log(this.progress().toFixed(2)) //1)
}







// 1)
// .toFixed(2) : 23.11111  ---> 23.11 ---> 소수점자리2개까지


// 2)
/*add(pulses, 0)는 GSAP(GreenSock Animation Platform)에서 사용되는 메소드로, 
특정 타임라인(Timeline)에 다른 타임라인을 추가하는 역할을 합니다.
여기서 pulses는 다른 GSAP 타임라인 객체입니다. 
이 타임라인은 각각의 .to() 메소드로 일련의 애니메이션 스텝을 가지고 있습니다. 
이 애니메이션 스텝들은 .add(pulses, 0)를 통해 main 타임라인에 추가되고 있습니다.
.add() 메소드의 첫 번째 인자로는 추가할 타임라인이 전달되고, 
두 번째 인자로는 해당 타임라인이 시작되는 시간을 나타내는 값이 전달됩니다. 
여기서 0은 main 타임라인의 시작 지점을 의미합니다.
즉, main 타임라인의 시작 시점에서 pulses 타임라인의 애니메이션을 동시에 시작하게 됩니다.  */