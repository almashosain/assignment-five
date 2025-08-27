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


const copyCounter = document.querySelector('#copyCounter');

let copyCount = parseInt(copyCounter.textContent)

const copyBtns = document.querySelectorAll('.copy_btn');


for (let i = 0; i < copyBtns.length; i++ ) {
    copyBtns[i].addEventListener('click',function(){
        const copies  = copyBtns[i].closest('.helpline');
        const call = copies.querySelector('.emgNum').textContent
    
        navigator.clipboard.writeText(call)
        alert(`${call} copied to clipboard!`);

copyCount++
copyCounter.textContent = copyCount })
    }

// Call Section 

let coins = 100;

const allCallButton = document.querySelectorAll('.call_btn')
const coinCounter = document.querySelector('#coin h1')

for (let i = 0; i < allCallButton.length; i++) {
    allCallButton[i].addEventListener('click', function() {
         const card = allCallButton[i].closest('.helpline');

         const phoneName = card.querySelector('h1').textContent
         const phoneNum = card.querySelector('.emgNum').textContent

        if(coins < 20){
            alert("You don't have enough coins to make this call!");
            return;
        }

        coins -= 20;
        coinCounter.textContent = coins;

        const time = new Date().toLocaleTimeString();

        alert(`Calling ${phoneName} at ${phoneNum}`);
    

        // Add to history
        const historyElement = document.createElement('div');
        historyElement.classList.add('flex','justify-between','border-b','p-2');
        historyElement.innerHTML = `<span>${phoneName}</span><span>${phoneNum} | ${time}</span>`;
        call_list.appendChild(historyElement);
        })
}

const clearBtn = document.querySelector('#delete_all_list');

clearBtn.onclick = function() {
    call_list.innerHTML = '';
};
