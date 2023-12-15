// document.querySelector("#section1").scrollIntoView({
//     behavior: "smooth"  
// })

//전체화면 부드럽게 움직이기
const lenis = new Lenis({
    duration: 1.5
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//--------------------------------------   
const parallaxItem = document.querySelectorAll('.cont_item');
const parallaxNav = document.querySelectorAll('nav ul li');
let lastScrollTop = 0;

function scrollNav() {
    document.querySelectorAll('nav ul li a').forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            //요소.scrollIntoView({옵션})
            document.querySelector(item.getAttribute("href")).item.scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}

function scroll() {
    // let scrollTop = window.pageYOffset;
    let scrollTop = window.scrollY;
    //console.log(scrollTop)
    if (scrollTop <= lastScrollTop) {
        document.querySelector('nav').classList.add('show');
    } else {
        document.querySelector('nav').classList.remove('show');
    }
    lastScrollTop = scrollTop;
    parallaxNav.foeEach((ele,index)=>{
        if(ele.offsetTop)
    })
    
}



window.addEventListener("scroll", scroll);
scrollNav();











const bar = document.querySelector(".scroll-indicator");

window.onscroll = () => {
    //document.documentElement.scrollHeight  ==> html 문서의 전체 높이
    let winScroll = document.documentElement.scrollHeight;
    let height = winScroll - window.innerHeight; //실제 스크롤 되는 최대치
    let scrolled = window.scrollY / height
    //console.log(scrolled)
    let scrollY = scrolled * 100;
    bar.style.width = scrollY + "%"
}