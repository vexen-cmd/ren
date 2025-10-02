const array = []

document.querySelector('.js-add').addEventListener('click', () => {
  const innerELem = document.querySelector('.js-input')
  array.push(innerELem.value)
  innerELem.value = ''
  render()
});

function render() {
  let mytodo = '';
  array.forEach((value) => {

    if (value === '') {
      return;
    }

    let theta = `<p class="todo-p">
        ${value} </p>
      <div class="button-div">
      <button class="js-done buttons"> Done </button>
        <button class="js-delete buttons"> Delete </button>
      </div>`

    mytodo += theta
  });

  document.querySelector('.your-todo').innerHTML = mytodo;


  document.querySelectorAll('.js-delete').forEach((button, i) => {
    button.addEventListener('click', () => {
      array.splice(i, 1)
      render()
    })
  });
};





