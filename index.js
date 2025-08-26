// Heart Icon Click Counter 

const heartCounter = document.querySelector('#heart h1' );

const heartBtns = document.querySelectorAll('.heart_btn');

let count = 0;

for(let i = 0; i < heartBtns.length; i++ ) {

    heartBtns[i].addEventListener('click', function(){
        count++
        heartCounter.textContent = count
    })

}