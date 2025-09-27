
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
    
   if (minutes == 24 && seconds == 59) {
      minutes+1
    }

    document.querySelector('.min').innerHTML = minutes;
    document.querySelector('.sec').innerHTML = seconds;
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
  minutes = `00`
  seconds = `00`
  clearInterval(timer)
  document.querySelector('.min').innerHTML = minutes;
  document.querySelector('.sec').innerHTML = seconds;
  
});

//done

function pauseFunction() {
  if (pause == false) {
    clearInterval(timer)
    console.log('shanti')
    pause=true
  } else {
    clearInterval(timer)
    pause = false
  }
};


