console.log("Before initialization the function: ")
console.log(add(2,3));      // Invokation of function

function add(a,b) {
    return a+b;
}

console.log("After initialization the function: ")
console.log(add(2,3));      // Invokation of function


// non- hoisting function
console.log("Before initialization the function: ")
console.log(sub(2,3));      // Invokation of function

const sub = (a, b) => a - b;