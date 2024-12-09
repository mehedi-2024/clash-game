
const playNow = document.getElementById('playNow');
const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');
const sec3 = document.getElementById('sec3');
const display = document.getElementById('display');
const tryAgain = document.getElementById('tryAgain');
const timer = document.getElementById('timer');
const life = document.getElementById('life');
const score = document.getElementById('score');
const finalScore = document.getElementById('finalScore');
let lifeTime = 3;
let scorePoint = 0;
score.innerHTML = scorePoint;
life.innerHTML = lifeTime;

const letters = 'abcdefghijklmnopqrstuvwxyz';
const letterArray = letters.split('');


// utility function 
function hidden(e) {
    e.classList.add('hidden')
}
function show(e) {
    e.classList.remove('hidden')
}


playNow.addEventListener('click', () => {
    hidden(sec1);
    show(sec2);
    playingTime();
})

let second = 59;
function playingTime(){
  const myInterval =  setInterval(() => {
        second--;
        if (second < 10) {
            timer.innerHTML = '0' + second;
        }
        else{
            timer.innerHTML = second;
        }
        if (second === 0) {
            clearInterval(myInterval);
            hidden(sec2);
            show(sec3);
        }
    }, 1000);

   
}

function randomNumber(x) {
    const randomIndex = Math.round(Math.random() * 25);
    let displayText = x.innerText = letterArray[randomIndex];
    let currentLetterColor = document.getElementById(displayText);
    currentLetterColor.classList.add('bg-indigo-700');
    currentLetterColor.classList.add('text-white');
}

randomNumber(display);

// document.getElementById('next').addEventListener('click', () => {

// })

let i = 0;

document.addEventListener('keyup', (e) => {
    if (display.innerText === e.key) {
        document.getElementById(display.innerText).classList.add('bg-green-500');
        scorePoint += 2;
        score.innerHTML = scorePoint;
        finalScore.innerHTML = scorePoint;
        setTimeout(() => {
            document.getElementById(display.innerText).classList.remove('bg-green-500');
            document.getElementById(display.innerText).classList.remove('bg-indigo-700');
            document.getElementById(display.innerText).classList.remove('text.white');
            randomNumber(display);
        }, 500);

    } else {
        document.getElementById(display.innerText).classList.add('bg-red-600');
        i++;
        if(i % 3 === 0){
            lifeTime--;
            life.innerHTML = lifeTime
        }
        if (lifeTime === 0) {
            hidden(sec2);
            show(sec3);
        }
        setTimeout(() => {
            document.getElementById(display.innerText).classList.remove('bg-red-600');
            document.getElementById(display.innerText).classList.remove('bg-indigo-700');
            document.getElementById(display.innerText).classList.remove('text.white');
            randomNumber(display);
        }, 500);
    }
})

tryAgain.addEventListener('click',()=>{
    window.location.reload();
})