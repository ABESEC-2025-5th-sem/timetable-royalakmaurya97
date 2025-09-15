// (() => {
//     var x = y = 6;
// }) ();
// console.log(x);
// console.log(y);
// console.log(typeof x);
// console.log(typeof y);

// let a = 23 - "23" + true + false - true + 23 + (-23);
// console.log(a);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof NULL);

const Car = {
    brand : "Mahindra",
    model : "XUV-700",
    year : 2021
}

console.log(Car.brand);
console.log(Car.model);
function changeModel(obj){
    obj.model("SUV");
}
changeModel(Car);
console.log(Car.brand);
console.log(Car.model);
