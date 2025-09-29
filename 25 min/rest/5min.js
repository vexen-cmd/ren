
let second=0;
let minute=0;
let timer;
let pause=false
function fiveMin(){

  timer=setInterval(() => {
    second++
    if(second>=60){
      second=0
      minute++
    }
  
    if(minute>=5){
     return clearInterval(timer)
    }
     document.querySelector('.min').innerHTML = minute;
    document.querySelector('.sec').innerHTML = second;
  },1 );
}


document.querySelector('.js-button').addEventListener('click', () => {
  clearInterval(timer)
 fiveMin()
});


document.querySelector('.js-button-pause').addEventListener('click', () => {
  pauseFunction()
});


document.querySelector('.js-button-reset').addEventListener('click', () => {
  minute = `00`
  second = `00`
  clearInterval(timer)
  document.querySelector('.min').innerHTML = minute;
  document.querySelector('.sec').innerHTML = second;

});


//done

function pauseFunction() {
  if (pause == false) {
    clearInterval(timer)
    console.log('shanti')
    pause = true
  } else {
    clearInterval(timer)
    pause = false
  }
};