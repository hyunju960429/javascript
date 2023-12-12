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

        
       
    })
})