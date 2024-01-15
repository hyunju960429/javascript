let currentCookie = document.cookie; //쿠키를 가져오는 방법
let cookieCheck = currentCookie.indexOf("green");
let noticeElement = document.querySelector('.notice');
let checkboxElement = document.querySelector('#cb');


if(cookieCheck > -1){
    noticeElement.style.display = "none";
}else {
    noticeElement.style.display = "block";
}

checkboxElement.addEventListener('change',()=>{
    let date = new Date();
    date.setDate(date.getDate() + 7);
    //console.log(date)

    if(checkboxElement.checked){ //input에 check가 됐다는 뜻
        let setCookie = "";
        setCookie += `green = true; `;
        setCookie += `expires=` + date.toUTCString();

        document.cookie = setCookie; //쿠키저장
        // noticeElement.style.display = "none"; //체크와 동시에 공지사항 닫기
    }
})










document.querySelector('.close').addEventListener('click',function(){
    this.parentElement.style.display = "none";
})