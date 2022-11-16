const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyStiles = document.querySelector('body');
console.log(btnStart);
console.log(btnStop);
console.log(bodyStiles);


// btnStart.disabled = false;
// btnStop.disabled = true;

let timeInterval = null;
btnStart.disabled = false;
btnStop.disabled = true;
btnStart.addEventListener('click', () => {
        timeInterval = setInterval(() => {
            btnStart.disabled = true;
            btnStop.disabled = false;
            bodyStiles.style.backgroundColor = getRandomHexColor()

            function getRandomHexColor() {
                return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            }
        }, 100);
    })
    // if (btnStart.disabled = true) {
    //     return;
    // }
btnStop.addEventListener('click', () => {
    clearInterval(timeInterval)
    btnStart.disabled = false;
    btnStop.disabled = true;
})

// console.log('first');


//