// variables

var a; //declarando
var b = 'b'; //declaramos /asignamos
b = 'bb'; //reasignación 
var a = 'aa'; //redeclaración

// Global scope
var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'colombia'; //global
    console.log(country);
}

countries();
console.log(country);