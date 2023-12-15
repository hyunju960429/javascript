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




 //메인메뉴 
 let navs = document.querySelectorAll("nav ul li a")
 //console.log(navs)

 navs.forEach((element, index) => {
     element.addEventListener('click', (e) => {
         e.preventDefault();

         document.querySelector(element.getAttribute("href")).scrollIntoView({
             behavior: "smooth"
         })


     })
 })


 // 영역으로 이동하면 그에 해당하는 메뉴에 클래스명을 추가하기
 window.addEventListener("scroll",()=>{
    //let scrollTop = window.pageYOffset;
    let scrollTop = window.scrollY;

    const parallaxItem=document.querySelectorAll('.cont_item');
    const parallaxNav=document.querySelectorAll('nav ul li')

    parallaxItem.forEach((element,index)=>{
        if(scrollTop>=element.offsetTop -  100){
            parallaxNav.forEach((li)=>{li.classList.remove('active')}) 
            parallaxNav[index].classList.add('active')
        }
    })
 })


 const bar =document.querySelector(".scroll-indicator");

 window.onscroll=()=>{
    //document.documentElement.scrollHeight  ==> html 문서의 전체 높이
    let winScroll=document.documentElement.scrollHeight;
    let height= winScroll - window.innerHeight;//실제 스크롤 되는 최대치
    let scrolled= window.scrollY / height
    console.log(scrolled)
    let scrollY= scrolled * 100;
    bar.style.width= scrollY + "%"
 }