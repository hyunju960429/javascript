let rotationX=0;
let rotationY=0;

const cube = document.querySelector('.box-area');
const three = document.querySelector('.box-back h2');

function rotateXAxis(n){
    rotationX = rotationX + (90*n);
    console.log(rotationX);
    three.style.transform = `rotateX(180deg) rotateY(180deg)`;
    // cube.style.transform = "rotateX(" + rotationX + "deg) rotateY(0deg)"
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg)`;
}

function rotateYAxis(n){
    rotationY = rotationY + (90*n);
    console.log(rotationY)
    three.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cube.style.transform = `rotateY(0deg) rotateY(${rotationY}deg)`;
}

function front(){
    cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

