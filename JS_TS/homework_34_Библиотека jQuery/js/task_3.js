function creatTodo() {
    const container = $('body');
    const todo = $('<ul class="todo">Список дел:</ul>');
    $(container).append(todo);

    while(true) {
        let userTodo = prompt('Введите пункт для списка дел:');

        if(userTodo === null || userTodo === undefined || userTodo === '') break;
        
        const elemTodo = $(`<li>${userTodo}</li>`);
        $(todo).append(elemTodo);
    };
};

