import loadList from './loadList.js';

const notes = [
    {
        item: `Reserved words include: abstract, await, boolean, break, byte, ` +
        `case, catch, char, class, const, continue, debugger, default, delete, ` +
        `do, double, else, enum, export, extends, false, final, finally, float, ` +
        `for, function, goto, if, implements, import, in instanceof, int, interface, ` +
        `let, long, native, new, null, package, private, protected, public, return, ` +
        `short, static, super, switch, synchronized, this, throw, throws, transient, ` +
        `true, try, typeof, var, volatile, void, while, with, yield`
    },
    {
        item: `Primitive data types include: String, Symbol, Number, Boolean, ` +
        `Undefined, and Null.`
    },
    {
        item: `Properties are information about the object or value, while ` +
        `methods perform an action on the object or value ― either to change it ` +
        `or to tell us something about it.`
    },
    {
        item: `There is not a differentiation between floats and integers. They ` +
        `are just numbers.`
    },
    {
        item: `Desctructuring arrays allows us to assign multiple values at the ` +
        `time using arrays.`
    }
  ]


const questions = [
    {
        item: `What is the "Symbol" primitive type used for?`
    },
    {
        item: `When would a programmer use Bitwise operators?`
    } 
]

loadList('#noteslist', notes);
loadList('#questionslist', questions);