fullName = "Divyanshu Kumar"
age = 24
price = 99.99
x = null // -> pata hai ki iske andar kuch nhi hai
y = undefined // -> pata hi nhi ki iske andar kya hai
console.log(x);
isFollow = true
// In javascript null and undefined are different

/*
var(global scope variable): Variable can be re-declared and updated.(not used now)
let(block scope variable): Variable cannot be re-declared.{}
const(block scope variable): Variable cannot be re-declared or updated. {}

Data Types:
1. Primitive

Number 
String
Boolean
Undefined
Null
BigInt
Symbol

*/

console.log(typeof age);
/**
 objects are stored in key value pairs.
 Generally we declare objects using const keyword
 */
const student = {
    fullName: "Divyanshu Kumar",
    age: 21,
    cgpa: 8.50,

    isPass: true
};


student.age = student.age +1;


console.log(student.fullName);
console.log(student["fullName"]);
console.log(student.age);
// const object ki key ko update kar sakte hai


