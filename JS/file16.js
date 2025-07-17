//promise
// problem statement
// const f1 = () => {
//   setTimeout(() => {
//     return 5;
//   }, 1000);
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// const n = f1();
// f2(n);

// solution
// const f1 = () => {
//   return new Promise((resolve,reject) => {
//     // resolve(5);
//     reject("Something went wrong...");
//   });
// };
// const f2 = (x) => {

//     console.log(x + 6);
// };
// f1()
//     .then((n) => f2(n))
//     .catch((err) => console.log(err));

// checking
// const f1 = (x) => {
//   return new Promise((resolve,reject) => {
//     if( x < 0){
//         reject("Wrong Input...");
//     }
//     else{
//       resolve(x);
//     }
//   });
// };
// const f2 = (x) => {

//     console.log(x + 6);
// };
// f1(-7)
//     .then((n) => f2(n))
//     .catch((err) => console.log(err));

// API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // data.map((value) => {
//     //   console.log(value.name);
//     // });
//     data.forEach((value) => {
//       console.log(`Name: ${value.name} & Email: ${value.email}`);
//     });
// })
// .catch((err) => console.log("Something went wrong..."));

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data.forEach((value) => {
    console.log(`Name: ${value.name} & Email: ${value.email}`);
  });
};
fetchData();
