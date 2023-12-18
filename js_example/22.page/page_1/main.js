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

         // let setOffT = document.querySelectorAll('.cont_item')[index].offsetTop;
         // console.log(setOffT)

         // window.scroll(0,setOffT)
         // window.scroll({left:0, top:setOffT})
         // window.scroll({
         //     left: 0,
         //     top: setOffT + "px",
         //     behavior: "smooth",
         //   });

         // window.scrollTo()  주어진 좌표로 뷰포트를 스크롤하는 메서드
         // window.scrollTo(0,setOffT)
         // window.scrollTo({
         //         left: 0,
         //         top: setOffT + "px",
         //         behavior: "smooth",
         //       });

         //element.scrollIntoView() ==> element가 뷰포트에서 보이도록 스크롤을 조정함


         document.querySelector(element.getAttribute("href")).scrollIntoView({
             behavior: "smooth"
         })


     })
 })


 // 영역으로 이동하면 그에 해당하는 메뉴에 클래스명을 추가하기
 window.addEventListener("scroll",()=>{
    //let scrollTop = window.pageYOffset;
    let scrollTop = window.scrollY;
    //console.log(scrollTop)

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