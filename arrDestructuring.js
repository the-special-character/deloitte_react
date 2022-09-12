const arr = [1,2,3,4,5,6];

const [,,,, ...rest] = arr;

console.log(rest);

// const [,,,,,a] = arr;

// console.log(a);


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

