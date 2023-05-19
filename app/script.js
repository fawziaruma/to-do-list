//  Function add to task 
function addTask(){
     var taskInput = document.getElementById('task-input');
     var taskList = document.getElementById('taskList');

     //  create  a new task item 

     var  taskItem = document.createElement('li');
     // input  field value 
    //  var  inputfiledValue = taskInput.value
     taskInput.textContent = taskInput.value;
     taskList.appendChild(taskItem)

     // save the task local storage 

     var tasks =  JSON.parse(localStorage.getItem('tasks')) || []
     tasks.push(taskInput.value);

     // set  loacal  storage 
     localStorage.setItem('tasks' , JSON.stringify(tasks)  )




}