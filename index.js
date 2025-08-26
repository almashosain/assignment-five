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

// Copy Icon Click Counter 


const copyCounter = document.querySelector('#copy button');

const copyBtns = document.querySelectorAll('.copy_btn');

let copyCount = 0;

for (let i = 0; i < copyBtns.length; i++ ) {
    copyBtns[i].addEventListener('click',function(){
        const copies  = copyBtns[i].closest('.copy');
        const call = copies.querySelector('.emergency').textContent
    

copyCount++
copyCounter.textContent = copyCount })
    }
