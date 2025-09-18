// Hoisting

console.log(a);
var a;
a = 45;
console.log(a);

// non hoisting variables (Remporal dead Zone (TDZ));
console.log(b);
let b;
b = 65;
console.log(b);