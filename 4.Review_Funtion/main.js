// Khai báo hàm Function declaration
function xinChao() {
  console.log("Xin chào Chim Đang Sun");
}
xinChao();
function xinChao2(userName) {
  console.log("Xin chào: " + userName);
}
xinChao2("Sơn");
xinChao2("Đông");
xinChao2("Hoàng");

function tich(a, b) {
  console.log("Tích 2 số là: " + a * b);
}
tich(30, 8);

function tich2(c = 1, d = 3) {
  return c * d;
}
let kq = tich2(3, 9);
console.log(kq);

let kq2 = tich2();
console.log(kq2);

function xinChao3(userName = "No Name") {
  console.log("Xin chào: " + userName);
}
xinChao3();

// Function Expressiton
let tich4 = function (a) {
  return a;
};
console.log(tich4(4));

//Arrow Function
let multiplyAndAddArrow = (c, d) => {
  let product = c * d;
  let sum = c + d;
  return product + sum;
};
let kq3 = multiplyAndAddArrow(4, 5);
console.log(kq3);

// Khi trả về một đối tượng
let person = (ten, tuoi) => {
  return { "Ho va ten": ten, Tuoi: tuoi };
};
console.log(person("son", 22));
