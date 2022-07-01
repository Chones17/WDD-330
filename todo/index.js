/* Import modules */
import storage from './storage.js';
import {addTask, removeTask} from './utilities.js';

const list = new storage();

window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        addTask(localStorage.key(i), list);
    }
    removeTask(list);
});

const addList = document.getElementById('submit');

addList.addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    if (input !== '') {
        list.setToDo(input);
        const listItem = list.getToDo(input);
        addTask(listItem.content, list);
        removeTask(list);
        document.getElementById('text-input').value = '';
    } 
});

const completed = document.getElementById('completed');

completed.addEventListener('click', () => {
    const input = document.querySelectorAll('#list-items input');

    for (let i = 0; i < input.length; i++) {
        if (!input[i].checked) {
            input[i].parentElement.style.display = 'none';
        } else {
            input[i].parentElement.style.display = '';
        };
    }
});

const active = document.getElementById('active');

active.addEventListener('click', () => {
    const input = document.querySelectorAll('#list-items input');

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            input[i].parentElement.style.display = 'none';
        } else {
            input[i].parentElement.style.display = '';
        };
    }
});

const all = document.getElementById('all');

all.addEventListener('click', () => {
    const input = document.querySelectorAll('#list-items input');

    for (let i = 0; i < input.length; i++) {
        input[i].parentElement.style.display = '';
    }
});