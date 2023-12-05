let circleArea = document.querySelector('.circle_container_inner');
let circles = [...document.querySelectorAll('.circle')];
// let circles = [document.querySelectorAll('.circle')]; //유사배열
circles.shift();
console.log(circles)

let position = {
    circleOne:{x:0,y:0},
    circleTwo:{x:0,y:0},
    circleThree:{x:0,y:0},
    circleFour:{x:0,y:0},
};

let width = window.innerWidth; //viewport의 넓이
let height = window.innerHeight; //viewport의 높이
let x= 0;
let y= 0;

function lerp(start, end, t){
    return start * (1 - t) + end * t
} //이름 있는 함수만 호이스팅 가능

circleArea.addEventListener('mousemove',e=>{
    x=e.clientX;
    y=e.clientY;
    console.log(`${x},${y}`)
})


function animate(){
    position.circleOne.x = lerp(position.circleOne.x,  (x - (width/2)) * 0.2,  0.1);
    position.circleOne.y = lerp(position.circleOne.y,  (y - (height/2)) * 0.2,  0.1);

    position.circleTwo.x = lerp(position.circleTwo.x,  (-x + (width/2)) * 0.2,  0.1);
    position.circleTwo.y = lerp(position.circleTwo.y,  (y - (height/2)) * 0.2,  0.1);

    position.circleThree.x = lerp(position.circleThree.x,  (x - (width/2)) * 0.2,  0.1);
    position.circleThree.y = lerp(position.circleThree.y,  (-y + (height/2)) * 0.2,  0.1);

    position.circleFour.x = lerp(position.circleFour.x,  (-x + (width/2)) * 0.2,  0.1);
    position.circleFour.y = lerp(position.circleFour.y,  (-y + (height/2)) * 0.2,  0.1);

    circles[0].style.transform = `translate(-50%,-50%) translate3d(${position.circleOne.x}px,
        ${position.circleOne.y}px,0px)`;

    circles[1].style.transform = `translate(-50%,-50%) translate3d(${position.circleTwo.x}px,
        ${position.circleTwo.y}px,0px)`;

    circles[2].style.transform = `translate(-50%,-50%) translate3d(${position.circleThree.x}px,
        ${position.circleThree.y}px,0px)`;

    circles[3].style.transform = `translate(-50%,-50%) translate3d(${position.circleFour.x}px,
        ${position.circleFour.y}px,0px)`;

    requestAnimationFrame(animate)
}

animate();