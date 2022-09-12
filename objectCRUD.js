// const a = 5;

const obj = {
    a: 1,
    b: 2,
    c: 3,
    b: 4
}

console.log(obj);

const {a, c, ...restData} = obj;

console.log(restData);

console.log(obj);

// // Destrucrturing

// const key = 'c'

// const { a: xyz, b, [key]: pqr } = obj;

// console.log(xyz);
// console.log(a);
// console.log(b);
// console.log(pqr);
// const obj1 = {
//     d: 4,
//     e: 5
// }

// const newObj = Object.assign({}, obj, obj1);

// console.log(newObj);

// console.log(obj);

// const newObj = {...obj, ...obj1 };

// console.log(newObj);

const name = "rohit"


const user = {
    name: "Yagnesh",
    gender: 'male',
    age: 33
}

const { age, ...rest} = user;

console.log(rest);

// const key = 'age'

// const {name: userName, [key]: userAge} = user;

// console.log(name)
// console.log(userName);
// console.log(userAge);



// print rohit
// print yagnesh
// print age