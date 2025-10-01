const array = []
const innerELem = document.querySelector('.js-input')


document.querySelector('.js-add').addEventListener('click', () => {
    array.push(innerELem.value)
    innerELem.value = ''

    console.log(array)

    let mytodo = '';
    array.forEach((value, i) => {
        let theta = `<p class="todo-p">
         ${value} </p>
       <div class="button-div">
        <button class="buttons"> Done </button>
         <button class="buttons"> Delete </button>
       </div>`
        mytodo += theta
    });
    document.querySelector('.your-todo').innerHTML = mytodo;
});