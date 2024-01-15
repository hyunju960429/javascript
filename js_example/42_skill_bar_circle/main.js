gsap.registerPlugin(ScrollTrigger);

let boxes = document.querySelectorAll('.box');

boxes.forEach((box)=>{
    let h3Element = box.querySelector('h3');
    let targetValue = h3Element.getAttribute('data-rate');

    ScrollTrigger.create({
        trigger: ".easypiechart",
        start: "top 40%",
        onEnter: ()=>{
            num();
            pieChart();
        }
    })
})


function pieChart(){
    let chartElements = document.querySelector('h3');
    let chartCanvas = document.querySelectorAll('.cartCanvas');


    chartCanvas.forEach(function(element){
        //const ctx = document.getElementById('myChart');
        let percent = element.parentElement.getAttribute('data-percent');

         //캔버스 엘리먼트에 이미 Chart 인스턴스가 있는지 확인
         const existingChart = Chart.getChart(element);

         if (existingChart) {
             // 기존의 Chart 인스턴스 파괴
             existingChart.destroy();
        }

        new Chart(element, {
          type: 'doughnut',
          data: {
            //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              //label: '# of Votes',
              data: [percent, 100 - percent],
              borderWidth: 0,
              borderRadius: 30,
              cutout: 100,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgba(255, 99, 132, 0)',
              ],
            }]
          },
          options: {
            animation:{
                duration:1500,
            },
            scales: {
            //   y: {
            //     beginAtZero: true
            //   }
            }
          }
        });
    })
}


function num(){
    boxes.forEach((box)=>{
        let h3Element = box.querySelector('h3');
        let targetValue = h3Element.getAttribute('data-rate');

        gsap.fromTo(h3Element,{
            innerText:0,

        },{
            innerText: targetValue,
            duration: 1.5,
            roundProps: "innerText" //소수점을 반올림
        })
    })
}

