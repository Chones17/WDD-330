/* Create a class for localStorage */
export default class storage {

    /* Default Constructor */
    constructor() {}
    
    /* Set ToDoList */
    setToDo(input) {

        // Set toDoList with toDo data.
        const list = JSON.stringify({id: Date(), content: input, completed: false});
        localStorage.setItem(input, list);
    }

    /* Get ToDoList */
    getToDo(input) {

        // Return toDoList with toDo data.
        const list = localStorage.getItem(input);
        return JSON.parse(list);
    }

    /* Get Length of localStorage */
    getLength() {

        /* Return length of localStorage */
        return localStorage.length;
    }

    /* Remove list item */
    removeToDo(input) {

        /* Remove list item */
        localStorage.removeItem(input);
    }
}