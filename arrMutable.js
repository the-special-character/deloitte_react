const arr = [1,2,3,4,5,6];

const index = 3;

// arr[index] = 8

arr.splice(index, 2)

console.log(arr);

// arr.splice(index, 1, 8, 9);
console.log(arr);

// mutable
//  add
// arr.splice(index,0, 8)

// console.log(arr);



// mutable
// LILO
arr.push(7);
console.log(arr);

arr.pop()
console.log(arr);

// never do this
arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

