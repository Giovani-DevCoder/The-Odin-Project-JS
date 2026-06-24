let x = new Object();

console.log(Object.getPrototypeOf(x));

console.log(x.toString())

console.log("-----------------")

let y = [];

console.log(Object.getPrototypeOf(y))

console.log("-----------------")

console.log(x.__proto__.__proto__);

console.log(y.__proto__.__proto__);

console.log("-----------------")

console.log(y.__proto__ === Array.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(y instanceof Array);