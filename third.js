// loops
for(let i=1;i<=5;i++){
    console.log("Hello World");
    
}

// while loop
// while(condition){}

// do while loop
// do{

// }while(condition);

// for-of loop -> it helps us to iterate over strings and arrays
let str = "Divyanshu Kumar"

for(let it of str){
    
    console.log(it);
    
}

// for-in loop -> used to iterate in objects. iterator mei object ki keys aa jaati hai



const student = {
    fullName: "Divyanshu Kumar",
    age: 21,
    cgpa: 8.50,

    isPass: true
};
for(let it in student){


    console.log(student[it]);
    
}

// Strings in Js
let s = "DK";
console.log(s.length);

// Template literals in JS
// it is a way to have embedded expressions in strings
let sentence = `This is a template literal.`;

let obj = {
    item: "pen",
    price: 10
};

let output = `the cost of ${obj.item} is ${obj.price}`
console.log(output);

// string methods in js
/** strings are immutable in js
 * str = str.toUpperCase()
 * str = str.toLowerCase()
 * str.trim() -> removes whitespaces
 * str.slice(start,end?) -> returns part of string, end is not inclusive
 * str1.concat(str2)
 * str.replace(searchVal,newVal)
 * str.charAt(idx)
 */
