const myArr = [0,1,5,4,8]; // method 1 for defining array
// console.log(myArr);
const myArr2 = new Array(1,55,66,77); // method 2 for defining array
// console.log(myArr2);
myArr2.push(87);
// console.log(myArr2);
myArr.pop(5);
// console.log(myArr);
myArr.unshift(9);
// console.log(myArr);
myArr.shift();
// console.log(myArr);
// console.log(myArr2);
// console.log(myArr.includes(45));
// console.log(myArr.indexOf(5));
const animals = ["cat","dog","tiger","lion","elephant","cow"];
// const mid = animals.slice(1,3);
// console.log(mid);
animals.splice(1,0,"snake");
console.log(animals);
animals.splice(1,1);
console.log(animals);
