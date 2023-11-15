function openCity(ev,cityName){
    //console.log(cityName)
    let tabcontent=document.getElementsByClassName('tabcontent');
    let tablinks;
    console.log(tabcontent)
    for(let i = 0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    document.getElementById(cityName).style.display="block";


}

document.getElementById('defaultOpen').click();


let topright=document.getElementsByClassName('topright');
//console.log(topright)
for(let i=0; i<topright.length;i++){
    topright[i].addEventListener('click',function(){
        this.parentElement.style.display="none";
    })
}