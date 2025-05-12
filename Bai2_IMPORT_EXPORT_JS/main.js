// Lấy một phần tử cần thiết
// import { myVar } from "./name.js";
// console.log(myVar);

// Lấy nhiều hơn một phần tử
// import { myFunction, myVar } from "./name.js";
// myFunction();
// console.log(myVar);

// Lấy tất cả
import * as name from "./name.js";
console.log(name.myVar);
name.myFunction();

// import default
import total from "./default.js";
// console.log(df);
console.log(total(1,2));

