// DOM -> Document object model
// alert("hello")

/**
 * Window Object -> It represents an open window in a browser. It is browser's object(not Javascript's) & is automatically created by browser.
 * It is a global object with lots of properties and methods.
 */



/**
 * DOM:
 * When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
 * Jitna bhi html ham likhte hai apni javascript ke saath attach karke wo sara ka sara html code ham javascript ke andar access kar sakte hai 
 * Automatically hamara html ka sara code/elements javascript ke andar aake objects mei create ho jaate hai jinhe ham document bolte hai.
 */


/**
 * console.dir() -> helps to print the properties and methods of document object
 */


// DOM manipulation:
/**
 * 1. Selecting by id 
 * 2. Selecting with class (multiple element ko same category mei dalna hai toa ye use kar sakte hai ham)
 * 3. Selecting with tag
 *  */    
let head = document.getElementById("heading");// it returns the value in h1 tag

// console.log(head);

let headings = document.getElementsByClassName("heading");
console.dir(headings)


console.log(headings)


let parahs = document.getElementsByTagName("p");
console.dir(parahs)

/**
 * 
 * One more method of query selector is there.
 * document.querySelector("myID/ myClass/ tag") -> returns first element
 * document.querySelectorAll("myID/ myClass/ tag") -> returns a NodeList
 */

let elements = document.querySelector("p");
console.dir(elements)


/**
 * Properties:
 * tagName: returns tag for element nodes
 * innerText: returns the text content of the element and all its children
 * innerHTML: returns the plain text or HTML contents in the element
 * textContent: returns textual content even for hidden elements
 */
console.log(elements.innerHTML)

