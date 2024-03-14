
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

// let x = 5;
// function a(){
//     let x = 100;
//     b();
// }
// function b(){
//     let y = 50;
//     let sum = x+y;
//     console.log("sum is : ",sum);
// }
// a();

// var num1 = parseInt(prompt("enter 1st number: "));
// var num2 = parseInt(prompt("enter 2nd number: "));
// let sum = num1 + num2;
// console.log("sum is: ",sum);
// console.log(typeof sum);

// var i = 20;
// if(i>15){
//     console.log("greater than 15");
// }
// console.log("not in if");

// var i = 10;
// if(i>15){
//     console.log("greater than 15");
// }
// else console.log("less than 15");

// var i = 10;
// if(i==10){
//     console.log("=to 10");
//     if(i<15){
//         console.log("<15");
//     }
// }
// else{
//     console.log("not = 10");
// }

// var i = 10;
// if(i<10){
//     console.log("less than 10");
// }
// else if(i>10){
//     console.log("greater than 10");
// }
// else{
//     console.log("equal to 10");
// }
// var i = praceInt(prompt('enter a number'));
// if(i%2==0){
//     document.write("<h1> is an Even Number</h1>");
// }
// else{
//     document.write(" <h1>is an odd Number</h1>");
// }
// var n = prompt('enter a number');
// var i = 1;
// while(i<=10){
//     document.write(n," X ",i," = ",n*i,"<br>");
//     i++;
// }
// var i = 1;
// while(i<=20){
//     if(i%2==0){
//         document.write(i," ");
//     }
//     else{
//         document.write(i," ");
//     }
//     i++;
// }
// var i = 1;
// var sum = 0;
// while(i<=20){
//     if(i%2!=0){
//         document.write("<p style=font-size:22px;color:red;>"+ i +"</p>","<br>");
//         sum = sum + i;
//     }
//     i++;
// }
// document.write("sum is -> ",sum);

// var n = prompt('enter a number');
// for(var i=1;i<=10;i++){
//     document.write(n," X ",i," = ",n*i,"<br>");
// }
// r = parseInt(prompt("Enter the number of rows -> "));
// c = parseInt(prompt("Enter the number of columns -> "));
// num = 1;
// for(i=1;i<=r;i++){
//     document.write("<tr>");
//     for(j=1;i<=c;i++){
//         document.write(`<td slign='center'>${num}</td>`);
//         num++;
//     }
//     document.write("</tr>");
// }
// document.write("</table");


// marks = {
//     maths : 40,
//     english : 40,
//     science : 50,
//     hindi : 60
// };

// for(i in marks){
//     console.log(i , "-> " , marks[i]);
// }
// console.log(typeof(marks));
// var n = prompt('Enter the number : ');
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }
// marks = {
//     maths : 97,
//     science : 34,
//     language : 34
// };
// for(i in marks){
//     console.log(i,marks[i]);
// }
// console.log(typeof(marks));
// var n = prompt('Enter the number : ');
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         document.write(j);
//     }
//     document.write("<br>");
// }
// arr=[13,58,23,45,26,48,100,66];
// arr2 = [];
// arr.sort(function(a,b){return a-b});
// for(let i=0,ni=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr2[ni] = arr[i];
//         console.log(arr[i],"<br>");
//     }
// }


// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i],"<br>");
// }
// fruit = ["mango","apple","kiwi","orange","banana","pear"];
// fruit.splice(1,3,"fruit1","fruit2");
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]," ");
// }

// console.log(`fruit : ${Array.isArray(fruit)}`);

// names = ['geeta','ram','atul','deepak'];
// console.log(names.includes('Ram'));
// names.reverse();
// console.log(names);

// names = ['geeta','ram','atul','deepak'];
// let newarr = [...names,'rahul'];
// console.log(newarr);

// let word = 'mayank';
// let newarr = [...word];
// console.log(newarr);

// names1 = ['geeta','ram','atul','deepak'];
// names2 = ['geet','ra','atu','deepa'];
// all = [...names1,...names2];
// console.log(all);

// arr1 = [-1,-2,-3,4];
// arr2 = [5,-6,-7,-8];
// arr3 = [-12,-13,-14,-15];
// console.log(Math.max(...arr1,...arr2,...arr3));

// function sum(...args){
//     var result = args.reduce(function(a,b){
//         return a+b;
//     },0);
//     return result;
// }
// console.log(sum(1,2,3,4,5));

// let n = 4;
// arr = [4,2,4,4,7];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==n){
//         arr.splice(i,1);
//     }
// }
// console.log(arr,"<br>");

// str = "Mayank";
// for(let i=0;i<str.length;i++){
//     if(str[i] = str[i].isUpperCase()){
//         str[i]
//         .toLowerCase();
//     }
// }
// console.log(str);

// str = new String ("mayank");
// document.write(str.toUpperCase());

document.getElementsByTagName("p").innerHTML = "Mayank";