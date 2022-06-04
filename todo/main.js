import storage from './ls.js';

(() => {
    'use strict';

const list = new storage();
const addList = document.getElementById('submit');

addList.addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    if (input !== '') {
        list.setToDo(input);
        const listItem = list.getToDo(input);
        addElement(listItem.content);
        removeElement();
        document.getElementById('text-input').value = '';  
    } 
});

function addElement(content) {
    const ul = document.getElementById('list-items');
    const li = document.createElement('li');
    const div = document.createElement('div');

    li.innerHTML = content;
    div.innerHTML = 'X';
    div.className = 'remove';
    li.setAttribute('id', content);
    li.appendChild(div);
    ul.appendChild(li);

    listCount();
}

function listCount() {
    const length = list.getLength() + ' task(s) left';
    document.getElementById('count').innerHTML = length;
}

function removeElement() {
    const close = document.getElementsByClassName('remove');

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', (event) => {
            list.removeToDo(event.target.parentElement.id);
            event.target.parentElement.remove();

            listCount();
        });
    };

}
})();