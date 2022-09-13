// signle threaded language

//   thread                     child Thread

// task1 -> .1ms           // task4 -> 5min
// task2 -> .1ms
// task3 -> .1ms

// task5 -> .1ms
// task6 -> .1ms
//------------------- ----------------------
// total -> .5ms

// total  -> 5min

// callback ->
// promise
// generator

// document.addEventListener("copy", () => {

// })

// console.log("s1")

// setTimeout(() => { console.log("a1"); }, 0) // micro queue

// console.log("s2");

// Promise.resolve().then(() => console.log("a2")) // macro queue

// console.log("s3");

// pending
// completed
// rejected

// const p1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p1 resolved now")
//          }, 3000)
//     })
// }

// p1()
// .then((value) => {
//     console.log(value);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("finally");
// })

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(val => {
//     return val.json()
// })
// .then(json => {
//     console.log(json);
// })
// .catch(err => {
//     console.log(err);
// })

// fetch("http://localhost:3000/login", {
//   method: "POST",
//   body: JSON.stringify({
//     email: "yagnesh.modh@gmail.com",
//     password: "abcd1234",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
//   .then((val) => val.json())
//   .then((json) => {
//     fetch("http://localhost:3000/660/products", {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(produtRes => {
//         if(produtRes.ok) {
//             return produtRes.json()
//         }
//         throw new Error("something went wrong")

//     })
//     .then(productJson => {
//         console.log(productJson);
//     })
//     .catch(err => console.log(err))

//   }).catch(err => console.log(err.message));



const loadData = async () => {
  try {
    const loginRes = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: "yagnesh.modh@gmail.com",
        password: "abcd12345",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const loginJson = await loginRes.json();
    if(!loginRes.ok) {
        throw new Error(loginJson)
    }
    console.log(loginJson);
    const productsRes = await fetch("http://localhost:3000/660/products");
    const productsJson = await productsRes.json();
    if(!productsRes.ok) {
        throw new Error(productsJson)
    }
    console.log(productsJson);
  } catch (error) {
    console.log(error);
  }
};

loadData();
