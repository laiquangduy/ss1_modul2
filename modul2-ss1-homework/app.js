//Ex3
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// }//trả về giá trị 27

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };

//Ex4
// console.log(`1. ${age}`); // undefined
// var age = 20;
// console.log(`2. ${age}`); // 20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`); //27
// //Function declaration
// function calAge(year) {
//   return 2022 - year;
// }

// console.log(`4. ${calAge(yearOfBirth)}`); //27
// // console.log(`5. ${getFullName(firstName, lastName)}`);
// //Function ẽpression
// var getFullName = function (firstName, lastName) {
//   return `$(firstName) $(lastName)`;
// };
// console.log(`6. ${getFullName(firstName, lastName)}`);

//Ex5
// console.log(age); //not defined

// let age = 27;
// console.log(age); //27

// {
//   console.log(firstName); //undefined do chưa khai báo firstName
//   console.log(lastName); //undefined do chưa khai báo lastName
//   console.log(age); // 27 do khai báo biến trên

//   let firstName = "Peter";
//   let lastName = "Parker";
//   const job = "Spider man";

//   console.log(firstName); //Peter
//   console.log(lastName); // Parker
//   console.log(job); //
// }
//Ex6
// a = 2;
// var a;
// console.log(a);
//Giá trị in ra màn hình là 2
//Giải thích khi khai báo a mà không định nghĩa kiểu dữ liệu, máy sẽ mặc định biến này là global variable
//máy sẽ nhảy qua câu lệnh var a để thực hiện in ra a

//Ex7
// console.log(a);
// var a = 2;
//Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2

//Ex8
// var a = 10;
// function foo() {
//   var a;
//   console.log(a);
//   a = 2;
// }
// foo();
//Trả về giá trị undefined vì khi vào function nó cũng có một biến var a mới
//Điều này khiến cho a chưa có giá trị và đc gán undefined sau khi in thì mới được gán a =2

//Ex9
// foo(); //1
// var foo;
// function foo(){
//     console.log(1);
// }

// foo = function() {
//     console.log(2);
// }

//Ex10
// var foo;
// function foo(){
//     console.log(1);
// }
// foo = function() {
//     console.log(2);
// }
// foo(); //2

//Ex11

// function removeEnd(arr, n) {
//   //C3
//   return arr.splice(n, arr.length - n);
//   //c2:
//   //let result = [];
//   //for (let i = 0;i <= n -1; i=i+1){
//     result.push(arr[i]);
//   // }
//   //return result;
//   //C1:
//   //arr.length =n;
//   //return arr;

// }

//Ex12
// function first (arr, n) {
//     for (let i = 0;i<=n-1;i=i+1){
//         console.log(arr[i]);
//     }
// }

//Ex13
// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100,
//   },
// ];

// function ex13(user) {
//   return {
//     name: `<h1>${user.name}</h1>`,
//     age: `<h2>${user.age}</h2>`,
//   };
// }

// const newUsers = users.map(ex13);
// console.log(newUsers);

//Ex14

// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100,
//   },
// ];

// function ex14(user) {
//   return {
//     name: `${user.name}`,
//   };
// }
// const newUsers = users.map(ex14);
// console.log(newUsers);

//Ex15
//Duy
// function triple(a) {
//   a = a * 3;
//   return a;
// }

// let arr = [1, 2, 3, 4, 5];
// let arrM = arr.map(multiply);
// function multiply(num) {
//   return num * 3;
// }
// console.log(arrM);

// let arrM2 = arrM.map(triple);
// console.log(arrM2);
//Thầy
// function triple(num) {
//   return num * 3;
// }

// function multiply(arr) {
//   return arr.map(triple);
// }
// console.log(multiply([1, 2, 3, 4]));
//Ex16
// var arr = [1, 5, 6, 7, 8, 9, 2, 3, 4, 9, 0];
// var arr5 = arr.filter(check5);

// function check5(num) {
//   return num > 5;
// }
// console.log(arr5);

//Ex17

// var members = [
//   { name: "Lan", gender: "female" },
//   { name: "Linh", gender: "female" },
//   { name: "Trung", gender: "male" },
//   { name: "Peter", gender: "gay" },
// ];
// const girl = members.filter(function (girl1) {
//   return girl1.gender === "female";
// });
// console.log(girl);

//Ex18
// var arrNumber = [3, 7, 5, 63, 55, 473, 751];
//Duy
// console.log(arrNumber.find((e) => e % 2 == 0));
//Thầy

// let arr = [1,2,3,4,5,6];
// let result = arr.find(function(e,i){
//   return e < 4;
// });

// let result2 = arr.findIndex(function(e,i){
//   return e < 4;
// })
//Ex19
// function findDivisibleNum(array, x) {
//   array;
// }

// Ex 20

// let arr = ["a", "b", "c", "b", "a"];

// function countOccurrences(arr) {
// let result = {};

// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   let element = arr[i];
//   if (!result[element]) {
//     result[element] = 1;
//   } else {
//     result[element] = result[element] + 1;
//   }
// }
// return result;
// }

// countOccurrences(arr);
//countOcurrences(["a","b","c"]);
let arr = ["a", "b", "c", "b", "a"];

arr.reduce(function (previousValue, currentValue) {
  if (!previousValue[currentValue]) {
    previousValue[currentValue] = 1;
  } else {
    previousValue[currentValue] = previousValue[currentValue] + 1;
  }
  return previousValue;
}, {});
//Ex22
// arr = [1, 5];
// function sum(arr) {
//   let sum = 0;
//   for (let i = arr[0]; i <= arr[arr.length - 1]; ++i) {
//     sum = sum + i;
//   }
//   return sum;
// }
// let arrN = sum(arr);

// console.log(arrN);

//Ex24
// let n = Number(prompt("Enter a number"));

// function fibonaci{

// }
