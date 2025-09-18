// let

// let name = 'xyz';
// const pi = 3.14;
// console.log("let and const in global scope");
// console.log("Value of name in global scope: ", name);
// console.log("Value of pi in global scope: ", pi);





// {
//     let name = 'xyz';
//     const pi = 3.14;
//     console.log("let and const in block scope");
//     console.log("Value of name in block scope: ", name);
//     console.log("Value of pi in block scope: ", pi);
// }

//     console.log("let and const in global scope");
//     console.log("Value of name in global scope: ", name);
//     console.log("Value of pi in global scope: ", pi);


function getValue() 
{
    let name = 'xyz';
    const pi = 3.14;
    console.log("let and const in function scope");
    console.log("Value of name in function scope: ", name);
    console.log("Value of pi in function scope: ", pi);
}

getValue();
console.log("let and const outside function scope");
console.log("Value of name outside function scope: ", name);
console.log("Value of pi outside function scope: ", pi);