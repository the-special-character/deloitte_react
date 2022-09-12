const arr = [1,2,3,4,5,6];


const index = 3;

// const a1 = arr.slice(0, index)

// const a2 = arr.slice(index)

// console.log(a1);

// console.log(a2);

const fa = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
]

console.log(fa);




// const newArr = [0, ...arr, 7];

// console.log(newArr);