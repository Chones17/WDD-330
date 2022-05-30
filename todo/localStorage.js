/* Create a class for localStorage */
export default class localStorage {

    /* Default Constructor */
    constructor() {

        // Define Class Variables.
        this.toDo = [];
        this.toDoList = [];
    }
    
    /* Set ToDo */
    setToDo(input) {

        // Set toDo with id, content, and complete keys.
        this.toDo = {id: Date(), content: input, completed: false};
    }

    /* Get ToDO */
    getToDo() {

        // Return toDo with id, content, and complete keys.
        return this.toDo;
    }

    /* Set ToDoList */
    setToDoList(array) {

        // Set toDoList with toDo data.
        this.toDoList.push(array);
    }

    /* Get ToDoList */
    getToDoList() {

        // Return toDoList with toDo data.
        return this.toDoList;
    }
}