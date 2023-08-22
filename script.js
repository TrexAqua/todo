var inputVal = document.getElementById('todo-input')
const addBtn = document.getElementById('add-todo')
const todoContainer = document.getElementById('todos-container')
const delBtn = document.getElementsByClassName('delete')


const addTodo = () => {
    if(inputVal.value === ''){
        alert('Please Write Something')
    } else {
    const todo = document.createElement('div')
    todo.className='todo'

    const todoText = document.createElement('h3')
    todoText.className='todo-info'
    todoText.textContent=`${inputVal.value}`

    const doneBtn = document.createElement('button')
    doneBtn.className='todo-done'
    doneBtn.textContent='✅'

    const delBtn = document.createElement('button')
    delBtn.className='delete'
    delBtn.textContent='❌'

    todo.appendChild(todoText)
    todo.appendChild(doneBtn)
    todo.appendChild(delBtn)

    todoContainer.appendChild(todo)  
    }
    inputVal.value = ''
    saveData()
}
const delOrMarkTodo = (e) => {
     if(e.target.className === 'delete'){
        e.target.parentElement.remove()
        saveData()

    } else if(e.target.className === 'todo-done'){
        e.target.parentElement.classList.toggle('checked')
        saveData()

    }
}
const saveData = () => {
    localStorage.setItem('Data', todoContainer.innerHTML)
}
const showData = () => {
    todoContainer.innerHTML = localStorage.getItem('Data')
}


addBtn.addEventListener('click', addTodo)
todoContainer.addEventListener('click', delOrMarkTodo)


showData()
