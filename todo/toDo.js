export default class toDo {

    /* Default Constructor */
    constructor()

    addElement() {
        const ul = document.getElementById('list-items');
        const li = document.createElement('li');
        const div = document.createElement('div');
    
        toDoList.forEach((element) => {
            li.innerHTML = element.content;
            div.innerHTML = 'X';
            li.setAttribute('id', element.content);
            li.appendChild(div);
            ul.appendChild(li);
        });
    }    
}