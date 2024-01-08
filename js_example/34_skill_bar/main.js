gsap.registerPlugin(ScrollTrigger);

function animateSkills(){
    document.querySelectorAll('.skill-per').forEach((perElement)=>{
        gsap.to(perElement,{
            duration: 2,
            width: perElement.getAttribute('per') + "%",
            onUpdate:function(){
                perElement.setAttribute('per', Math.ceil(this.progress() * parseInt(perElement.style.width)) + "%");
            }
        })
    })
}


ScrollTrigger.create({
    trigger: ".main",
    start: "top 50%",
    onEnter: ()=>{
        animateSkills();
    }
})


//숫자로 변경하기
//Number(문자화된 숫자) --> Num(10.02) --> 10.02
//parseInt(문자화된 숫자) --> parseInt(10.02) --> 10