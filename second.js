/**
 * Comparison operators:
 * == -> equal to
 * != -> not equal to
 * === -> equal to & type
 * !== -> not equal to & type
 */


// if statement example
let color,mode;
if(mode=="dark-mode"){
    color = "black";
}else{
    color = "white";
}

// Ternanry operator
let age = 25;
let result = age >=18 ? "adult" : "not adult";
console.log(result);

// prompt prints message and also takes input
let n = prompt("Enter anything");
console.log(n);
