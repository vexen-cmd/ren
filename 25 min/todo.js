const array=[]
const innerELem=document.querySelector('.js-input')


document.querySelector('.js-add').addEventListener('click',()=>{
    array.push(innerELem.value)
    innerELem.value=''

    console.log(array)
    
 let mytodo='';
    array.forEach((value,i) => {
       let theta=`<p> ${value} </p>`
       mytodo+=theta
    });
    document.querySelector('.your-todo').innerHTML=mytodo;
});