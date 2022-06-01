import localStorage from './localStorage.js';

const list = new localStorage();
const addList = document.getElementById('submit');
const toDoList = list.getToDoList();

addList.addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    if (input !== '') {
        list.setToDo(input);
        const toDo = list.getToDo();
        list.setToDoList(toDo);
        addElement();
        removeElement();
        document.getElementById('text-input').value = '';  
    } 
});

function addElement() {
    const ul = document.getElementById('list-items');
    const li = document.createElement('li');
    const div = document.createElement('div');

    toDoList.forEach((element) => {
        li.innerHTML = element.content;
        div.innerHTML = 'X';
        div.className = 'remove';
        li.setAttribute('id', element.content);
        li.appendChild(div);
        ul.appendChild(li);
    });
}    

/* Task List Count */
window.addEventListener('click', () => {
    const length = toDoList.length + ' task(s) left';
    document.getElementById('count').innerHTML = length;
});

function removeElement() {
    const close = document.getElementsByClassName('remove');

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', (event) => {
            toDoList.forEach((element) => {
                if(event.target.parentElement.id === element.content) {
                    toDoList.splice(toDoList.indexOf(element), 1);
                    event.target.parentElement.remove();
                }
            });
        });
    };
}