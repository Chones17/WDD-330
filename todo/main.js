const todo = [];

/* Add tasks to list from HTML input */
const addItem = document.getElementById('add');

addItem.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    todo.push({id: Date(), content: input, completed: false});
    const ul = document.querySelector('#list-items');    
    const li = document.createElement('li');
    const div = document.createElement('div');
    li.innerText = input;
    li.className = input;
    div.innerText = '+';
    li.appendChild(div);
    ul.appendChild(li);
});

/* Delete task from list */
function deleteTask(content) {
    for (let i=0; i < todo.length; i++) {
        if (todo[i].content === content) {
            todo.splice(i, 1);
            deleteItem[i].onclick = () => {
                this.target.remove();
            }
        }
    }
}

const deleteItem = document.

console.log(deleteItem);

//deleteItem.addEventListener('click', (event) => {

//});


/* Task List Count */
window.addEventListener('click', () => {
    const length = todo.length + ' tasks left';
    document.getElementById('count').innerHTML = length;
});