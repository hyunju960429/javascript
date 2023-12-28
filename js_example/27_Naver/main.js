let id = document.querySelector('#id');
let pw1 = document.querySelector('#psw1');
let pw2 = document.querySelector('#psw2');
let pwImg1 = document.querySelector('#pswd1_img1');
let pwImg2 = document.querySelector('#pswd1_img2');


//에러
let error = document.querySelectorAll('.error_next_box');
let pwMsg = document.querySelector('#alertTxt');



//id.addEventListener('focusout',function (){checkId()})
id.addEventListener('focusout',checkId)
pw1.addEventListener("focusout",checkPw)
pw2.addEventListener("focusout",comparePw)



//let checkId = function(){};
function checkId(){
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    // console.log(idPattern.test(id.value))
    if(id.value === ""){
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.display = "block";
        error[0].style.color = "red";
    }else if(!idPattern.test(id.value)){
        error[0].innerHTML = "5~20자의 영문 소문자, 대문자, 숫자와 특수기호( _ , - )만 사용가능합니다";
        error[0].style.display = "block";
    }else {
        error[0].innerHTML = "사용가능한 아이디입니다.";
        error[0].style.display = "block";
        error[0].style.color = "#80a600";
    }
    
}

function checkPw(){
    let pwPattern = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/;
    console.log(pwPattern.test("pw1.value"))

    if(pw1.value === ""){
        error[1].innerHTML = "필수 정보입니다.";
        error[1].style.display = "block";
        pwImg1.src = "img/m_icon_not_use.png"
        pwMsg.style.display = "none";
    }else if(!pwPattern.test(pw1.value)){
        error[1].innerHTML = "8~16자 영문, 대소문자, 숫자, 특수문자를 사용하세요";
        error[1].style.display = "block";
        pwMsg.style.display = "block";
        pwMsg.style.color = "red";
        pwImg1.src = "img/m_icon_not_use.png"
        pwMsg.innerHTML = "사용불가";
    }else {
        error[1].style.display = "none";
        pwMsg.innerHTML = "안전";
        pwMsg.style.display = "block";
        pwMsg.style.color = "#03c75a";
        pwImg1.src = "img/m_icon_safe.png"
    }
}

function comparePw(){
    if(pw1.value === pw2.value && pw2.value !== ""){
        pwImg2.src = "img/m_icon_check_enable.png";
    }
}