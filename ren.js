
document.querySelector('.js-button').addEventListener('click', () => {
    play()
});

document.querySelector('.js-button-reset').addEventListener('click', () => {
    clearInterval(zeta)
});


 let zeta;
 let pause=false;
function play() {
    let beta = 0
    let count = -1
    
     zeta = setInterval(() => {
        count++
        if (count >= 60) {
            count = 0
            beta++
            if (beta >= 25) {
                beta = 0
            }
        }
        console.log(beta, count)
    }, 1000);
}
// correction needed isse pause krna h timer ko kaise kru??

document.querySelector('.js-button-pause').addEventListener('click', () => {
  if(!pause){
    play()
  }else{
    pause=false
    clearInterval(zeta)
  }
});