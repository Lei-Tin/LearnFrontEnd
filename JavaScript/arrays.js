let marks = [];
let marksTwo = [1, 2, 3, 4];

console.log(marks.length);
console.log(marksTwo.length);

let myArr = [1, 2, 3];
myArr[5] = 6;

console.log(myArr);

// Checks if myArr is an array
console.log(Array.isArray(myArr));

myArr.fill(5);
console.log(myArr);

myArr.fill(1, 0, 2);
console.log(myArr);

let myArrTwo = Array.from("Hi there");

console.log(myArrTwo);

let myNum = [1, 2, 3];
let myNumTwo = Array.from(myNum, x => x * 2);

console.log(myNum);
console.log(myNumTwo);