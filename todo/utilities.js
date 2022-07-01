export function addTask(content, list) {

    // Declare function variables.
    const ul = document.getElementById('list-items');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    // Modify the DOM view.
    input.setAttribute('type', 'checkbox');
    label.innerHTML = content;
    button.innerHTML = 'X';
    button.className = 'remove';
    li.setAttribute('id', content);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);
    ul.appendChild(li);

    listCount(list);
}

export function removeTask(list) {
    const close = document.getElementsByClassName('remove');

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', (event) => {
            list.removeToDo(event.target.parentElement.id);
            event.target.parentElement.remove();
            listCount(list)
        });
    };

}

function listCount(list) {
    const length = list.getLength() + ' task(s) left';
    document.getElementById('count').innerHTML = length;
}