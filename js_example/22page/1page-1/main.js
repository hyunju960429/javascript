let navs = document.querySelectorAll('nav ul li a');
//console.log(navs)

navs.forEach((element, index)=>{
    element.addEventListener('click',(e)=>{
        e.preventDefault();

        let sectionOffT = document.querySelectorAll('.cont_item')[index].offsetTop;
        console.log(sectionOffT)

        //window.scroll(0,sectionOffT)
        //window.scroll({left: 0, top: sectionOffT, behavior:'smooth'}) //둘 다 같은말임 behavior 빼고
        // window.scroll({
        //     left:0,
        //     top: sectionOffT,
        //     behavior:'smooth',
        // });



        // window.scrollTo() //주어진 좌표로 뷰포트를 스크롤하는 메서드
        // window.scrollTo(0,sectionOffT)
        // window.scrollTo({
        //     left: 0,
        //     top: sectionOffT + "px",
        //     behavior:'smooth',
        // });



        // element.scrollIntoView() ==> element가 뷰포트에서 보이도록 스크롤을 조정함
        document.querySelector(element.getAttribute("href"))
        
        //element.scrollIntoView()
        document.querySelector(element.getAttribute("href")).scrollIntoView({behavior:"smooth"})
    })
})


//스크롤 부드럽게 만들기(lenis)
const lenis = new Lenis({
    easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    duration:1.5
})



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//영역으로 이동하면 그에 해당하는 메뉴에 클래스명을 추가하기
window.addEventListener("scroll",()=>{
    //let scrollTop = window.pageYOffset;
    let scrollTop = window.scrollY; //pageYoffset = scrollY 같은 기능
    //console.log(scrollTop)

    const parallaxItem = document.querySelectorAll('.cont_item');
    //console.log(parallaxItem)
    const parallaxNav = document.querySelectorAll('nav ul li');
    //console.log(parallaxNav)

    parallaxItem.forEach((element,index)=>{
        if(scrollTop > element.offsetTop - 100){
            parallaxNav.forEach((li)=>{li.classList.remove('active');})
            parallaxNav[index].classList.add('active')
        }
    })
})



//
const bar = document.querySelector('.scroll-indicator');

window.onscroll = ()=>{
    //document.documentElement.scrollHeight ==> html 문서 전체 높이
    let winScroll = document.documentElement.scrollHeight;
    //console.log(winScroll) //8767
    let height = winScroll - window.innerHeight; //실제 스크롤 되는 최대치
    //console.log(height) //7804
    let scrolled = window.scrollY /height;
    //console.log(scrolled)
    let scrollY = scrolled * 100;

    bar.style.width = scrollY + "%";
}