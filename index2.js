// Navbar elements
const heartCounter = document.querySelector('#heart h1');
const coinCounter = document.querySelector('#coin h1');
const copyCounter = document.querySelector('#copy h1');

let hearts = 0;
let coins = parseInt(coinCounter.textContent);
let copies = 0;

// Call History container
const historyContainer = document.querySelector('#history_container');

// Heart buttons
const heartButtons = document.querySelectorAll('.heart_btn');
heartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        hearts++;
        heartCounter.textContent = hearts;
    });
});

// Copy buttons
const copyButtons = document.querySelectorAll('.copy_btn');
copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const number = card.querySelector('.hotline').textContent;

        // Copy to clipboard
        navigator.clipboard.writeText(number);
        alert(`${number} copied to clipboard!`);

        copies++;
        copyCounter.textContent = copies;
    });
});

// Call buttons
const callButtons = document.querySelectorAll('.call_btn');
callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const serviceName = card.querySelector('h1').textContent;
        const serviceNumber = card.querySelector('.hotline').textContent;

        if(coins < 20){
            alert("You don't have enough coins to make this call!");
            return;
        }

        coins -= 20;
        coinCounter.textContent = coins;

        const time = new Date().toLocaleTimeString();

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Add to history
        const historyItem = document.createElement('div');
        historyItem.classList.add('flex','justify-between','border-b','p-2');
        historyItem.innerHTML = `<span>${serviceName}</span><span>${serviceNumber} | ${time}</span>`;
        historyContainer.appendChild(historyItem);
    });
});

// Clear History
const clearBtn = document.querySelector('#clear_history');
clearBtn.addEventListener('click', () => {
    historyContainer.innerHTML = '';
});






// // Navbar elements
// const heartCounter = document.querySelector('#heart h1');
// const coinCounter = document.querySelector('#coin h1');
// const copyCounter = document.querySelector('#copy h1');

// let hearts = 0;
// let coins = parseInt(coinCounter.textContent);
// let copies = 0;

// // Call History container
// const historyContainer = document.querySelector('#history_container');

// // Heart buttons
// const heartButtons = document.querySelectorAll('.heart_btn');
// heartButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         hearts++;
//         heartCounter.textContent = hearts;
//     });
// });

// // Copy buttons
// const copyButtons = document.querySelectorAll('.copy_btn');
// copyButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const card = btn.closest('.card');
//         const number = card.querySelector('.hotline').textContent;

//         // Copy to clipboard
//         navigator.clipboard.writeText(number);
//         alert(`${number} copied to clipboard!`);

//         copies++;
//         copyCounter.textContent = copies;
//     });
// });

// // Call buttons
// const callButtons = document.querySelectorAll('.call_btn');
// callButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const card = btn.closest('.card');
//         const serviceName = card.querySelector('h1').textContent;
//         const serviceNumber = card.querySelector('.hotline').textContent;

//         if(coins < 20){
//             alert("You don't have enough coins to make this call!");
//             return;
//         }

//         coins -= 20;
//         coinCounter.textContent = coins;

//         const time = new Date().toLocaleTimeString();

//         alert(`Calling ${serviceName} at ${serviceNumber}`);

//         // Add to history
//         const historyItem = document.createElement('div');
//         historyItem.classList.add('flex','justify-between','border-b','p-2');
//         historyItem.innerHTML = `<span>${serviceName}</span><span>${serviceNumber} | ${time}</span>`;
//         historyContainer.appendChild(historyItem);
//     });
// });

// // Clear History
// const clearBtn = document.querySelector('#clear_history');
// clearBtn.addEventListener('click', () => {
//     historyContainer.innerHTML = '';
// });
