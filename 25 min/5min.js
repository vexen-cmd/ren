export function fiveMin(second,minute){

  let timer=setInterval(() => {
    second++
    if(second>=60){
      second=0
      minute++
    }
  
    if(minute>=5){
     return clearInterval(timer)
    }
    console.log(minute,second)
  },1 );
}

//fiveMin(0,0)