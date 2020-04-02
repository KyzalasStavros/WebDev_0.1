// let, const
// String, number, boolean, null, undefined, symbol

const name='john';
const age=30;

// concatenation
console.log('My name is ' + name + ' and I am ' + age);
// template string
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);


//------------------------------//
const s='technology, computer, it, code';

console.log(s.length);
console.log(s.split(', '))
/* multi
line 
comment */

//------------------------------//

//Arrays - variables that hold multiple values
const numbers= new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples','oranges','pears',10,true];
console.log(fruits);

fruits[6]='grapes';
fruits.push('mangos');
fruits.unshift('strawberries');


console.log(fruits);
console.log(fruits[1]);

fruits.pop();
console.log(fruits);

console.log(Array.isArray('fruits'));
console.log(fruits.indexOf('oranges'));

//--------------------------------//

// Object Literals

const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies: ['music','movies','sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;
console.log(city)

person.email='john@email.com';
console.log(person);


const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text: 'Meeting with Boss',
        isCompleted:true
    },
    {
        id:3,
        text: 'Dentist Appt',
        isCompleted:false
    }
];

console.log(todos[1].text);

//---------------------------------//

// Json

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// For

for(let i = 0; i<=10; i++){
    console.log(`for loop number: ${i}`);
}

// While

let i=0;
while(i<=10){
    console.log(`while loop number:${i}`)
    i++;
}

// Loop through arrays

for(let i = 0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text;
})
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

//------------------------------//

// Conditionals

let x=16;
const y=10;

if (x==10){
    console.log('x is 10')
} else if (x>10) {
    console.log ('x is greater than 10');
} else {
    console.log ('x is not 10');
} 

if (x>5 || y>10){
    console.log('x more than 5 OR y more than 10')
}

// and -> && , or -> ||

// (if) .. ?=then .. :=else .. 

x=9;
const color=x>10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red or blue');
        break;
}

//-------------------------//

// Functions

function addNums(num1 =1 , num2=1){
    return num1+num2;
}
console.log(addNums(7,8));

// Fat arrow
const addNums2= (num1 =1 , num2=1) => num1+num2;
console.log(addNums2(3,4));


/*
// Construction Function
function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
*/

// Class
class Person {
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1=new Person('john','dough','4-3-2000');
const person2=new Person('mary','smith','6-5-2001');

console.log(person2.dob)
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person2)

//------------------------//

// The Dom? @main.js
