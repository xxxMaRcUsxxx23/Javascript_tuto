// Arrays in Js
let marks = [96,75,48,83,66];

console.log(marks);

console.log(marks.length);



// methods in arrays
/**
 * push() -> add to end
 * pop() -> delete from end and returns the deleted value
 * toString() -> converts array to string
 */


marks.push(100,101,102);
console.log(marks);
console.log(marks.toString());

// Array methods contd..
/**
 * concat() -> joins multiple arrays and returns result
 * unshift() -> add to start (equivalent to push method)
 * shift() -> delete from start and returns the deleted value (equivalent to pop method)
 * 
 */
let marvel_heroes = ["thor","spiderman","ironman"];
let dcHeroes = ["superman","batman"];


let heroes = marvel_heroes.concat(dcHeroes);
console.log(heroes);



let deleted_val = marvel_heroes.shift();
console.log(deleted_val);

/**
 * slice() -> returns a piece of array. does not change original array
 * slice(startIdx,endIdx)
 * 
 * Splice() -> change original array(add,remove,replace)
 *     splice(startIdx, delCount, newEl1....)
 * 
 * agar splice ke andar sirf eek index pass karte hai iska matlab uss index se leke aage ke saare elements ko delete kardo
 */
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);

console.log(arr);

console.log(arr.splice(4));// printing deleted items

