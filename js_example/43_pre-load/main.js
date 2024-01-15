let container = document.querySelector('#progress');
let progressBar = document.querySelector('.progress-bar');
let progressText = document.querySelector('.progress-text');


var imgLoad = imagesLoaded('body');
//console.log(imgLoad)
let imgTotal = imgLoad.images.length;

let imgLoaded = 0;
let current = 0;
let progressTimer;
let topValue;


progressTimer = setInterval(updateProgress, 1000/60);
imgLoad.on('progress', function(){ //이미지가 로드되는 중간중간 할일
    imgLoaded++;

});



function updateProgress(){
    let target = (imgLoaded / imgTotal) * 100;
    console.log(target)
    current += (target - current) * 0.03;

    progressBar.style.width = current + "%";
    progressText.innerHTML = `${Math.ceil(current)}%`;


    if(current > 99.9){
        clearInterval(progressTimer)
        container.classList.add('progress-complete');
        progressBar.style.width = "100%";
        gsap.to(container,{
            duration: 0.3,
            yPercent: -100,
        })
    }
}



//Math.ceil ==> 올림