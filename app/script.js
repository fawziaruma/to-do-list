//  Function add to task 
function addTask(){
     var taskInput = document.getElementById('task-input');
     var taskList = document.getElementById('taskList');

     //  create  a new task item 

     var  taskItem = document.createElement('li');
     // input  field value 
    //  var  inputfiledValue = taskInput.value
    taskItem.textContent = taskInput.value;
     taskList.appendChild(taskItem)

     // save the task local storage 

     var tasks =  JSON.parse(localStorage.getItem('tasks')) || []
     tasks.push(taskInput.value);


     // set  loacal  storage 
     localStorage.setItem('tasks' , JSON.stringify(tasks))

     //creat a remove button for task item
     var removeBtn = document.createElement('button')
     removeBtn.textContent = 'remove'
     taskList.appendChild(removeBtn)

     // addEvenListener to the remove button
     removeBtn.addEventListener('click', function(){
         taskList.removeChild(taskItem) 
         var index = tasks.indexOf(taskInput.value)
         if(index >  -1 ){
          taskInput.splice(index, 1);
          localStorage.setItem('tasks' , JSON.stringify(tasks) )
         }
     });


     // clear the input field
     taskInput.value = ' '
}

// function to the load task for localstorage
function loadTask(){
     var tasks =  JSON.parse(localStorage.getItem('tasks')) 
     var taskList = document.getElementById('taskList')

     // clear the task list
     taskList.innerHTML = ' '

     // add task to the tasklist
     for(var i = 0; i< tasks.length; i++){
          var taskItem = document.createElement('li')
          taskItem.textContent = tasks[i]
          taskList.appendChild(taskItem)
          // creat a remove btn for task item
          var removeBtn = document.createElement('button')
          removeBtn.textContent = 'remove'
          taskItem.appendChild(removeBtn)

           // addEvenListener to the remove button
     removeBtn.addEventListener('click', function(){
          taskList.removeChild(taskItem) 
          var index = tasks.indexOf(taskItem.textContent)
          if(index >  -1 ){
           taskInput.splice(index, 1);
           localStorage.setItem('tasks' , JSON.stringify(tasks) )
          }
      });

     }
     

}

//  add  event  listener to the  add  task button

var  addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click' , addTask  )

// LOAD TASK when the page is load
window.onload = loadTask
