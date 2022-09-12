// Object Manipulation

// CRUD Operation

// Mutable:- changable

// Immutable:- we cant change it;

// inititalization
const a = "hello";

const newData = a.concat("how are you");

console.log(newData);




const obj = {
    a: 1,
    b: 2,
    c: 3,
    b: 4
}


// Immutble
// spread operator
const newObj = { ...obj, d: 4, e: 5, b: 8 };

console.log(newObj);




// O(1)
// intance
// const newObj = Object.assign({}, obj, { d: 4 })

// O(1)
// const updateObj = Object.assign({}, obj, { c: 5 })

console.log(obj);
// console.log(newObj);
// console.log(updateObj);

// dot notation
// O(N)
// obj.d = 5;

// O(N)
// obj.b = 0;

// O(logN)
// delete obj.c;

// const key  = 'b'

// array Notation

// console.log(obj[key]);

// console.log(obj);

// console.log(obj);



// Mutable approch
// delete obj.b;


// Immutable approch
// const { b, ...rest } = obj;

// console.log(rest);

// console.log(obj);
 
