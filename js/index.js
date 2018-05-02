/* alert('Hello'); */
// document.write('<h1>World</h1>');
// console.log('Hello World');

// const carName = 'Tesla Model X';
// const purchaseCarPrice = 100000 + 10000;
// const isAvailable = true;

// document.write(carName);
// document.write('<br>');
// document.write(carPrice);
// document.write('<br>');
// document.write(isAvailable);
// document.write('<br>');

// const saleCarPrice = carPrice * 1.1;


// const age = parseInt(prompt('Enter your age'));
// const newAge = age + 1;
// document.write('Next year you will be ' + newAge);


// Number
// 1, NaN, Infinity

// // String
// // '', "", ``

// // Boolean
// // true, false

// // undefined
// var variable;
// let anotherVariable;
// // null
// variable = null;

// // Object
// const car = {};

// // Symbol
// const sym = Symbol();


// const age = parseInt(prompt('Enter your age'));

// if ( (age >= 18) && (age < 70) ) {
//     document.write('You are adult');
// } else if (age < 18) {
//     document.write('You are child');
// } else {
//     document.write('You are old');
// }


// function add(a, b, c) {
//     const result = a + b + c;
//     return result;
// }


// const sum = add(100, 200.59, 'Hello');
// document.write(sum);

// const epsilon = 0.00001;
// if (0.1 + 0.2 - 0.3 < epsilon ) {
//     document.write('TRUE');
// } else {
//     document.write('FALSE');
// }

// document.write(Math.sqrt(16));

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a,b,c);
document.write(result);


function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
    
    return 'X1 = ' + x1 + ' X2 = ' + x2;
}

function discr(a, b, c) {
    return b*b - 1 - 2;
}


