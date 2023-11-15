let pTag1 = document.querySelector('.first-parallel');
let pTag2 = document.querySelector('.second-parallel');

let textArr1 = 'Welcome Hello Welcome Hello Welcome Hello Welcome Hello'.split(' ');
//띄워쓰기 기준으로 잘라서 배열로 만든다
console.log(textArr1)

let textArr2 = 'My Portfolio My Portfolio My Portfolio My Portfolio'.split(' ');
console.log(textArr2)

// let arr=[];
// console.log(...textArr1) //Welcome Hello Welcome Hello Welcome Hello Welcome Hello
// arr.push(...textArr1) //...textArr1 --> textArr1을 그대로 복사해서 arr 배열에 추가한다.
// console.log(arr)

let count1 = 0;
let count2 = 0;

initTexts(pTag1,textArr1);
initTexts(pTag2,textArr2);

function initTexts (element, textArray){
    textArray.push(...textArray) //8개의 배열안의 아이템을 복사하여 다시 배열 뒤에 넣는다.
    console.log("함수안"+textArray)
    for(let i = 0;i<textArray.length;i++){
        //    &nbsp
        //    \u00A0   --> 자바스크립트의 공백을 나타냄
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}

/////////////////////////////////////////////////////////
function animate(){
    count1++;
    // console.log(count1)
    count2++;

    count1 = marqueeText(count1,pTag1,-1)
    count2 = marqueeText(count2,pTag2,1)


    window.requestAnimationFrame(animate);
    // setInterval--> 어떤 시간마다 할 일(오류가 많이나서 requestAnimationFrame로 대체사용)
}


function marqueeText(count, element, direction){
    // .scrollHeight --> 보이지 않는 공간이라도 그 공간의 높이값을 불러낸다.
    // 보이지않는 공간일지라도 스크롤해서 확인할 수 있는 공간의 높이
    // .scrollWidth --> 
    // console.log("element.scrollWidth" + element.scrollWidth)
    // console.log("count" + count)

    if(count>element.scrollWidth/2){
        count = 0;
        element.style.transform=`translate(0,0)`;
    }

    element.style.transform=`translate(${count * direction}px,0)`;

    return count

}


function scrollHandler(){
    count1 += 25;
    count2 += 25;
}
animate();
// window.addEventListener('scroll',function(){
//     scrollHandler();
// })

// let scrollHandler = function(){
//     console.log("나호출")
// }

window.addEventListener('scroll',scrollHandler); //!!scrollHandler 뒤에 괄호 넣지않기!!
//괄호를 넣으면 scrollHandler가 바로 호출이 되어 스크롤 할때 호출되지 않는다.