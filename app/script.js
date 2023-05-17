import { todo } from "../class/todo"
const toDoForm = document.querySelector('.todo-form')
const toDoInput = document.querySelector('#inputTodo')
const toDoList = document.getElementById('list')
const  messageElement = document.getElementById('message')

//show message 

const showMessage = (text ,  status) =>{
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`)
    setTimeout(()=>{
        messageElement.textContent = ' '
        messageElement.classList.remove(`bg-${status}`)
    }, 1000)
}
// creat todo
const creatToDo = (newToDo) =>{
const toDoElement = document.createElement('li')
toDoElement.classList.add('li-style')
toDoElement.innerHTML = `
<span> ${newToDo.toDoValue}</span>
<span> <button class='btn' id='delet-btn'><i class="fa-solid fa-trash"></i></button> </span>`

toDoList.appendChild(toDoElement)


}