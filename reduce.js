const arr = [1,2,3,4,5];

const sum = arr.reduce((p, c) => p + c, 0)

console.log(sum);

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
    {
        name: "Amitabh",
        age: 75,
        gender: "Male"
    }
  ];

//   {
//     "00-09": [],
//     "20-29": [],
//     "30-39": []
//   }

const age = 22

// 20-29
  const groupByGender = users.reduce((p, c) => {
    const ageGroup = Math.floor(c.age / 10)
    const key = `${ageGroup}0-${ageGroup}9`
    if(p[key] === undefined) {
        p[key] = []
    }
    p[key].push(c);
    return p;
  }, {})

  console.log(groupByGender);

//   {
//     male: [],
//     female: []
//   }

// findIndex Method

// O(N)
// const index = users.reduce((p, c, index) => {
//     console.log(p);

//     if(c.gender === "Male") {
//         return c
//     }
//     return p
// }, -1)

// console.log(index);


// let sum =  0;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element;
// }

// console.log(sum);

