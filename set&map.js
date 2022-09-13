
const arr = [1,2,3,4,5,4,6];

const xyz = [...new Set([1,3,4,5,3,2,])]

console.log(xyz);

// set is use for primitive type of data
const set = new Set(arr);

set.add(7)


console.log(set.keys());


console.log(set.has(4));

set.delete(4)


console.log(set);

// O(logN)

for (const iterator of set) {
    console.log(iterator);
}

const weakSet = new WeakSet();

const a = { a: 1 }

const b = { b: 2 }

weakSet.add(a);
weakSet.add(b);

weakSet.delete(a);

console.log(weakSet.has(b));



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

//   find rohit
// for loop
// findIndex
// some

// O(LogN)

const map = new Map()


// O(1)
map.set("Yagnesh",{
    name: "Yagnesh",
    age: 33,
    gender: "Male",
  })
map.set("Virat",  {
    name: "Virat",
    age: 30,
    gender: "Male",
  })

  console.log(map.size);

  const obj = {a: 1, b: 2,}

//   O(N)


//   O(1)
//   console.log(map.get("Yagnesh"));

map.delete("Virat")

console.log(map.size);

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}   



const weakMap = new WeakMap();

const data = { a: 1}



weakMap.set(data, 1)
weakMap.set(data, 1)

weakMap.








