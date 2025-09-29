// console.log("Hello")

// let a;
// console.log(a);
// a=12;

// var a=10;
// if(a>20){
//     a=90;
//     console.log("a inside if="+a);
// }
// else{
//     console.log("Hii.....insider else");
// }

// console.log("a is outdider="+a)



// let a=30;
// if(a>20){
//     a=90;
//     console.log("a inside if="+a);
// }
// else{
//     console.log("Hii.....insider else");
// }

// console.log("a is outdider="+a)



// function
// function gettings(msg) {
//     console.log("Hii  .. Welcome to ABES!");
//     return 40;
// }
// const data = gettings();
// console.log("data="+data);



// const data = function gettings(msg) {
//     return "Hii...  ABES CSE-DS "+msg;
// }

// const msg1=data("Varun");
// console.log(msg1);


// const data=(myName) => {
//     console.log(`Hii ${myName} Welcome to FSD Class`);
// }

// // data("ALOK KUMAR");
// const msg = data("Rahul Singh");
// // console.log(msg);



// const data = msg=>msg;
// console.log(data("Hello Codders"));


// (function(){
//     console.log("Welcome to fsd");
// })();


// (()=>{
//     console.log("Hiii.........");
// })();


// function gretting(msg="Hii....") {              // Default message
//     console.log(msg+" Welcome To FSD!");
// }

// gretting("Hello Alok");
// gretting();


// function msg() {
//     console.log("Welcome to ABES!");
// }
// setTimeout(msg, 1000);



// function msg() {
//     console.log("Welcome to ABES!");
// }
// setInterval(msg, 1000);


function selectLang(lang){
    let data;
    if(lang == "JAVA"){
        function JavaCompiler() {
            return "JavaCompiler";
        }
        data = JavaCompiler();
    }
    else if(lang == "C") {
        function cCompiler(){
            return "cCompiler";
        }
        data = cCompiler();
    }
    else{
        data = "No such compiler available!";
    }
    return data;
}

console.log("Compiler is:",selectLang('C'));
console.log("Compiler is:",selectLang('JAVA'));
console.log("Compiler is:",selectLang('Python'));