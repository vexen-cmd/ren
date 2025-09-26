
let timer;
let pause = false;
let minutes = 0
let seconds = 0

function play() {

  timer = setInterval(() => {
    seconds++
    if (seconds >= 60) {
      seconds = 0
      minutes++
    }

    if (minutes >= 25) {
      minutes = 0
      return clearInterval(timer)
    }
    let innerHtmlText
   if (minutes == 24 && seconds == 59) {
      innerHtmlText = `00:${minutes + 1}:00`
    } else {
      innerHtmlText = `00:${minutes}:${seconds}`
    }
    document.querySelector('.ren-clock').innerHTML = innerHtmlText;
  }, 1000);
};


document.querySelector('.js-button').addEventListener('click', () => {
  clearInterval(timer)
  play()
});


document.querySelector('.js-button-pause').addEventListener('click', () => {
  pauseFunction()
});


document.querySelector('.js-button-reset').addEventListener('click', () => {
  minutes = 0
  seconds = 0
  clearInterval(timer)
  let displayTimer = `  00:00:00`
  document.querySelector('.ren-clock').innerHTML = displayTimer
});

//couldn't get this part will try tommorrow
function pauseFunction() {
  if (pause == true) {
    console.log('shanti')
  } else {
    clearInterval(timer)
    pause = false
  }
};


