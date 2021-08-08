const btn = document.querySelector('#burger')
const navig = document.querySelectorAll('.btn-head')
const span = document.querySelectorAll("span")

btn.addEventListener('click',function(){
   
    let i = 0
    for( i = 0; i<= navig.length;i++){

    navig[i].classList.toggle("show")
    
    
    }
    // for(i=0;i<=span.length;i++){
    // span[i].classList.toggle('rotate')
    // }
})