// map method is used to only update the record

const arr = [1,2,3,4,5,6];


// O(N)
const newArr = arr.map(item => {
    if(item % 2 === 0) {
        return item * 2
    }
    return item
})

console.log(newArr);

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


//   O(N)
// multiple record will be updated..
const updatedUsers = users.map(user => {
    if(user.name === "Virat") {
        return {...user, age: 35}
    }
    return user;
})


// only one record will be updated..
const index = users.findIndex(x => x.name === "Virat");

console.log(index);

const updatedUsers1 = [
    ...users.slice(0, index),
    {...users[index], age: 35},
    ...users.slice(index + 1),
]


console.log(updatedUsers);

