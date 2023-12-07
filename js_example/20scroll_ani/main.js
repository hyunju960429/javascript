let stageEle = document.querySelector('.stage'),
    houseEle = document.querySelector('.house'),
    maxScrollValue, //실제 스크롤이 움직이는 높이값
    mousePosition = {x:0,y:0};

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener('scroll',()=>{
        let scrollPer = pageYOffset / maxScrollValue;
        //console.log(scrollPer)

        let zMove = scrollPer * 1450 - 490;
        houseEle.style.transform = `translateZ(${zMove}vw)`;
    })

    window.addEventListener('mousemove',(e)=>{
        mousePosition.x = (e.clientX / window.innerWidth) * 5;
        mousePosition.y = -(e.clientY / window.innerHeight) * 5;
        stageEle.style.transform = `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`;
    })

    window.addEventListener('resize',resizeHandler)
    resizeHandler();