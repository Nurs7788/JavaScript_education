const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

const todo = document.getElementById("todo-list");


for(let i = 0; i < tasks.length; i++){
    let liTasks = document.createElement("li")
    liTasks.innerHTML = tasks[i];
    todo.appendChild(liTasks);
};