
// let a;
// let x = 3;
// let y = 3;
// let z = x+y;
// console.log(z);
// let x = 31;
// let y = 15;
// x = x+y;
// y = x-y;
// x = x-y;
// console.log(x);
// console.log(y);

let x = 5;
function a(){
    let x = 100;
    b();
}
function b(){
    let y = 50;
    let sum = x+y;
    console.log("sum is : ",sum);
}
a();