//globals
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const todos = [];
let storedTodos;
let todo;
let getStoredTodos = JSON.parse(localStorage.getItem('todosArr'))

//creates li and button and appends to UL then clears input field
const makeLi = (formInput) => {

    let newLi = document.createElement('li')
    newLi.innerText = formInput;

    let removeBtn = document.createElement('button')
    removeBtn.innerText= 'delete'

    newLi.appendChild(removeBtn)
    ul.appendChild(newLi)

   
    document.querySelector('input').value = '';
}

//updates DOM on form submit
form.addEventListener('submit', e => {
    e.preventDefault();

    let formInput = document.querySelector('input').value;
     //saves new li text to local storage
     todos.push(formInput)
     todo = localStorage.setItem('todosArr', JSON.stringify(todos))
 

    if(!formInput){
        alert('you must fill in a todo')
    }else{
        makeLi(formInput);
    }
})

//removes element if delete button is clicked on
ul.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    isComplete(e)
})

//adds line through if li is clicked on
const isComplete = (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done')
    }
}


//get todos on load
window.onload = function() {
    
    console.log(getStoredTodos)

    for(i of getStoredTodos){
        let li = document.createElement('li')
        li.innerText = i;
        let btn = document.createElement('button')
        btn.innerText = 'delete';
        li.appendChild(btn);
        ul.appendChild(li)

    }
        
    
}