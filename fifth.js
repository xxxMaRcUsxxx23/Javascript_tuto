function myFunction () {
    console.log("Welcome");
    console.log("We are learning JS");
    
}
myFunction();



function sum(x,y){
    s = x+y;
    return s;
}


console.log(sum(3,4));



// Arrow Functions -> compact way of writing a function
/**
 * const functionName = (param1,param2,....) => {
 * // do some work
 * }
 */
// function mul(a,b){

//     return a * b;
// }

// above can also be written as
const mul = (a,b)=> {
    return a*b;
}; 
console.log(mul(3,5));


const printHello = ()=> {
    console.log("Hello");
}

printHello();

const task = (str)=>{
    let cnt = 0;
    for(let it of str){
        if(it=='a' || it=='e' || it=='i' || it=='o' || it=='u'){
            cnt++;
        }
    }
    console.log(cnt);
}
task("aeiou")

// forEach loop in Arrays
/**
 arr.forEach(callBack Function)
 the function that we pass inside forEach as parameters 
 are know as callBack Functions

 In Javascript functions can be passed as parameters
 Callback Function: It is a function which is passed as an argument to another function

 */
let arr = [1,2,3,4,5,6];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

// callback function hame execute nhi karna hota. sirf uski defination pass karni hoti hai. 
// forEach usse apne execute kar deta hai

// forEach ke call back function mei three parameters hote hai
// val,index,arr itself

/**
 * Higher order functions are those functions which either take other functions as parameters or return some other function.
 */

// Some important array methods

/**
 * Map is similar to forEach but the difference is thay map returns a new array after some operation.
 * syntax: arr.map(callbackFunc(value,index,array))
 */

arr.map((val)=> {
    console.log(val); 
});

let newArr = arr.map((val)=> {
    return val;
});
// jo bhi value map se call back mei return hoti hai wo newArr mei jaake store ho jayegi

console.log(newArr);

/**
 * Filter -> creates a new array of elements that give true for a condition/filter.
 * 
 */
let neArr = arr.filter((val)=>{
    return val%2 === 0;
})

/**
 * Reduce -> Perform some operation & reduce the array to a single value.
 * It returns that single value
 */

const op1 = arr.reduce((res,curr)=>{
    return res+curr;
})

const op2 = arr.reduce((res,curr)=>{
    return res > curr? res : curr; 

}) 