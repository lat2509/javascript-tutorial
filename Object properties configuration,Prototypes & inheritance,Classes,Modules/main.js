// import {add} from "./utils.js"
// import {mul} from "./utils.js"
// import trusub from "./utils.js"

let modulePath = prompt();

let {add,mul, default:trusub} = await import(`./${modulePath}.js`);

console.log(add(2,3));
console.log(mul(4,5));
console.log(trusub(10,6));
