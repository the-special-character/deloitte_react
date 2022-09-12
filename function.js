// In javascript method overloading is not possible

// problems

// should not call function before its declaration
// should allow to write same function name again

// console.log(add(1,2));

// named function
// function add(a,b) {
//     return a + b;
// }

// function add() {
//     return "hacked..."
// }

// var add;

// console.log(add);

// anonymous function
// const add = function(a, b) {
//     return a + b
// }

// arrow light weighted and it does not hava this pointer
const add = (a, b) => { 
    return a + b;
}

const greet = name => "hello " + name;

// console.log(add(1,2));

console.log(greet("Yagnesh"));


// in ES6 removed function key word







