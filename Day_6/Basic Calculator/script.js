const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
// console.log("num1 is: ", num1.value);
// console.log("num2 is: ", num2.value);
const output = document.getElementById("output");

let result=0;

const add = () =>{

    if(num1.value === "" || num2.value === "") {
        error.innerText = "Please enter both number";
        error.style.color= "red";
    }
    else {
        error.innerText ="";
    }
    console.log("parseInt(num1.value", parseInt(num1.value))
    console.log("parseInt(num2.value", parseInt(num2.value))
    result = parseInt(num1.value) + parseInt(num2.value);
    output.value = result;
}
const sub = () =>{
    if(num1.value === "" || num2.value === "") {
        error.innerText = "Please enter both number";
        error.style.color= "red";
    }
    else {
        error.innerText ="";
    }
    result = parseInt(num1.value) - parseInt(num2.value);
    output.value = result;
}
const mul = () =>{
    if(num1.value === "" || num2.value === "") {
        error.innerText = "Please enter both number";
        error.style.color= "red";
    }
    else {
        error.innerText ="";
    }
    result = parseInt(num1.value) * parseInt(num2.value);
    output.value = result;
}
const div = () =>{
    if(num1.value === "" || num2.value === "") {
        error.innerText = "Please enter both number";
        error.style.color= "red";
    }
    else {
        error.innerText ="";
    }
    result = parseInt(num1.value) / parseInt(num2.value);
    output.value = result;
}