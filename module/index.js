
// // import User from "./User.js";
// import dotenv from "dotenv";
// dotenv.config();
// // const user = new User("Helen", 35);
// // console.log(user.toString(), process.env.MYARRAY);
// // while (true) {}


import MyArray from './MyArray.js';

const myArray = new MyArray([5, 3, 8, 1, 2]);

myArray.print(); 

console.log('Min:', myArray.findMin()); 
console.log('Max:', myArray.findMax()); 
console.log('Sum:', myArray.findSum()); 

myArray.bubbleSort();
myArray.print(); 


