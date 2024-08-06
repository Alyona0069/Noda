
const MyArray = require('./MyArray.cjs');

const myArray = new MyArray([5, 7, 9, 1, 3, 4]);

myArray.print(); 

console.log('Min:', myArray.findMin()); 
console.log('Max:', myArray.findMax()); 
console.log('Sum:', myArray.findSum()); 

myArray.bubbleSort();
myArray.print(); 
