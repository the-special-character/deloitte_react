

// Primitive Type
// string
// number
// bigint
// boolean
// symbol

// Non-Primitive Type
// object -> {}, [], null

// undefined

// console.log(Null === Null);

const data = {}

const arr = [1,2,3,data,5,6];

// this method will work only on primitive type of array
console.log(arr.indexOf(data));


const users = [
  {
    name: "Yagnesh",
    age: 33,
    gender: "Male",
  },
  {
    name: "Virat",
    age: 30,
    gender: "Male",
  },
  {
    name: "Rohit",
    age: 28,
    gender: "Male",
  },
  {
    name: "Taimur",
    age: 08,
    gender: "Male",
  },
  {
    name: "Alia",
    age: 22,
    gender: "Female",
  },
  {
    name: "Dipika",
    age: 35,
    gender: "Female",
  },
  {
    name: "Priyanka",
    age: 40,
    gender: "Female",
  },
  
];


// O(LogN)
// O(N)
// if record found return index
// or return -1
const index = users.findIndex(user => user.name === "Virat") 

// if record found then return data
// or return undefined
const viratInfo = users.find(user => user.name === "Shikhar")

// O(N)
// if record foud then return array of data
// else return []
const maleRecords = users.filter(user => user.gender === "Male" && user.age >= 30);

// O(LogN)
// O(N)
// if record found then return true
// else return false
const isChildExist = users.some(user => user.age < 18);

// if all condition true O(N)
// Or O(logN)
const isEveryAdult = users.every(user => user.age > 18);

console.log(isEveryAdult);


console.log(isChildExist);

console.log(maleRecords);

console.log(viratInfo);

// {
//     // return boolean
//     // if(user.name === "Alia") {
//     //     return true
//     // }
//     // return false;
//     return user.name === "Alia"
// })

console.log(index);