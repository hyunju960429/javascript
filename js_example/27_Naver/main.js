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


//let checkId = function(){};
function checkId(){
    var idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    console.log(idPattern.test(id.value))
    
};