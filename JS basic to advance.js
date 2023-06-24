// // console.log ("hello world");

// var myname = "Piyush";
// console.log (myname);
// console.log (typeof (myname));
// console.log (true != true);

// var a = 10;
// var b = 20;

// a = a+ b;
// b = a - b;
// a = a - b;
// console.log ("a:" + a + " " + "b:" + b);

// //normal function
// function sum (a,b){
//     return a+b;
// }

// console.log (sum (1,2));

// //ambigous function
// var res = function(a,b){
//     return a+b;
// }

// console.log (res (1,2));

// //Fat arrow  
// const sum2 = (a, b) => a+b; 

// console.log (sum2 (6, 7));

//array
// console.log ("ARRAYS");
// var nums = ["a","b","c"];

// for (let i = 0; i < nums.length; i++){
//     console.log (nums[i]);
// }

//for in
// for (let x in nums){
//     console.log (nums[x]);
// }

//for of
// for (let x of nums){
//     console.log (x);
// }

//for each
// nums.forEach (function(element, index, array){
//     console.log (`${element} ${index}  ${array}`);
// })

// var nums = [1,2,3,4,3,2];
// console.log (nums.indexOf  (3, 0));
// console.log (nums.indexOf (2, 0));
// console.log (nums.lastIndexOf (2));
// console.log (nums.indexOf (2,2));
// console.log (nums.indexOf (10, 0));
// console.log (nums.includes (4)); 

// const prices = [200, 300, 350, 400, 450, 500, 600];

//find method only gives first element satisfying the statement
//price < 400
// let findele = prices.find ((currval) => {
//     return currval < 400;
// })

// console.log (findele);

// const prices = [200, 300, 350, 400, 450, 500, 600];

//filter method returns the array of elements satisfying the condition.
// const ans = prices.filter ((element, index) => {
//     return element < 400;
// })

// console.log (ans);

//==========================================
// push adds element in the end
// unshift adds element in the front
// pop pops elemts from the end
// shift pops element from the front

//=========================================

// const animals = ['pigs', 'sheep', "goat"];
// animals.push ("chicken");
// console.log (animals);

// const arr = ['jan', 'feb'];
// arr.push ('Dec');

// console.log (arr);

//splice method === do push and pop ;
// const print = (ele) => console.log (ele);

// const arr2 =['Jan', 'march', 'April', 'June', 'July'];

// const res = arr2.splice (arr2.length, 0, "Dec");
//  n
// console.log (arr2);
// console.log (res);

// const res2 = arr2.splice (1, 1, "March");

// print (arr2);
// print (res2);

//const arr1 = [1,2,3,4, 16, 19];

// let arr2 = arr1.map ((ele, idx, arr) => {
//     return ele > 9;
// })

//console.log (arr1);
// console.log (arr2);

// let arr2 = arr1.map ((ele, idx, arr) => {
//     if (ele > 9) return ele;
// })

// console.log (arr2);

// let arr2 = arr1.map ((ele, idx, arr1) => {
//     return `Index no = ${idx} and the value is ${ele} belongs to ${arr1}`;
// })

// console.log (arr2);

// let arr1 = [25, 36, 49, 64, 81];

// let arr2 = arr1.map ((ele, idx, arr) =>{
//     return Math.sqrt(ele);
// }) 

// console.log (arr2);

// let arr1 = [2,4,6,8,3];
// let arr3 = arr1.map ((ele, idx, arr) =>{
//     return ele *2;
// }).filter ((ele) => {
//     return ele>10;
// })

// console.log (arr3);

// let  

// let currdate = new Date ();

// console.log (currdate);
// console.log (currdate.toLocaleStri ng ());
// console.log (currdate.toString ()); 

// console.log (Date.now ()); 

//OOP in js

// let bio_data = {
//     name: {
//         first_name: "Piyush",
//         last_name: "chauhan"
//     },
//     my_age: 22,
//     getData: () =>{
//         console.log ("hello");
//     }
// }

// console.log(bio_data.my_age);
// bio_data.getData ();
// console.log (bio_data.name.first_name);

//Arrray destructuring

// let arr = ['piyush', 'chauhan', 22];
// // let[fname, lname, age] = arr;

// // console.log (fname);

// let[fname, lname, age, degree= "btech"] = arr;
// console.log (degree);

// let Name = "piyush";
// console.log (Name);

// Name.padStart (5);
// console.log (Name);

// let person   