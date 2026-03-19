"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.HTML 요소 선택
const todoInput = document.getElementById('todo-input');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
let todos = [];
let doneTasks = [];
let nextId = 0;
const getTodoText = () => {
    return todoInput.value.trim();
};
const renderTask = () => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    todos.forEach((todo) => {
        const li = createTodoElement(todo, false);
        todoList.appendChild(li);
    });
    todos.forEach((todo) => {
        const li = createTodoElement(todo, true);
        todoList.appendChild(li);
    });
};
const addTodo = (text) => {
    todos.push({ id: nextId++, text });
    todoInput.value = '';
    renderTask();
};
const completeTodo = (todo) => {
    todos = todos.filter((t) => t.id !== todo.id);
    doneTasks.push(todo);
    renderTask();
};
const deleteTodo = (todo) => {
    doneTasks = doneTasks.filter((t) => t.id !== todo.id);
    renderTask();
};
const createTodoElement = (todo, isdone) => {
    const li = document.createElement('li');
    li.classList.add('render-container__item');
    li.textContent = todo.text;
    const button = document.createElement('button');
    button.classList.add('render-container__item-button');
    if (isdone) {
        button.textContent = '삭제';
        button.style.backgroundColor = '#dc3545';
    }
    else {
        button.textContent = '완료';
        button.style.backgroundColor = '#28a745';
    }
    button.addEventListener('click', () => {
        if (isdone) {
            deleteTodo(todo);
        }
        else {
            completeTodo(todo);
        }
    });
    li.appendChild(button);
    return li;
};
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});
//# sourceMappingURL=script.js.map