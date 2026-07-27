let month = ['january', 'july', 'march', 'august'];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");

console.log(month);
  

let v = ['a', 'b', 'c', 'd', 'e', 'f'];

v.slice(2);
console.log(v);
//this is to make array in ascending order.
let o = ['1', '6', '5', '2', '4', '3'];
    o.sort();
console.log(o);
//make array in reverse.
let arr = [10, 20, 30, 40, 50];

arr.reverse();
console.log(arr);
// to get sum of all array.
let a = [5, 10, 15, 20];
let sum = 0;

for(let i = 0; i < a.length; i++){
    sum = sum + a[i];
}

console.log(sum);

// finde largest number

let m = [5, 80, 56, 76, 34];
let max = 0;

for(let i = 0; i<m.length; i++){   
    if(m[i]>max){
        max=m[i]
    }
}

console.log(max);

//finde samllest number in array

let s = [5, 30, 66, 54,98];

let min = 100;

for (let i = 0; i < s.length; i++){
    if(s[i]<min){
        min=s[i];
    }
}
console.log(min);

splice , slice, pop, push, shift, unshift

let arr = [10, 20, 30, 40, 50];
// arr.push(30);
// arr.pop();
// arr.shift();
// arr.unshift(29);
// arr.splice(2, 1);

let newarr = arr.slice(0 , 2);
console.log(newarr);

forEach 
let arr = [1,2,3,4,45];
let newarr = arr.forEach(function(val){
        console.log(val + 1);
});

// Map
// map sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par
// map dikhte hi sath man main ek blank array bana liya karo 

let arr = [1,2,3,4,45];
let newarr = arr.map(function(val){
    return 12;
});
console.log(newarr);

// map foreach ki tarah hei lekin return karna compulsory he

let arr = [10, 30, 55, 4, 5];
let newarr = arr.map(function(val){
    if(val >= 10 ) return val;
    else
        return 0;
});
console.log(newarr);

// jab bhi aapko aisa koi case dikh jaye jaha par ek array se 
// naya array banega and wo naya array kuchh values ko rakhega 
// tab map lagega

// Reduce :
// ek array se ek bade array ko reduce kar dena ek single value mei.

let arr = [1, 2, 3, 4, 5];

let ans = arr.reduce(function(r, m){
        return r + m;
}, 0);

console.log(ans);

// FIND:

//find hame array mese hamari value dhund kar deta he 

let arr = [1, 2, 3, 4, 5];
let f = arr.find(function(val){
    return val <= 4;
});
console.log(f);

// some method.

let arr = [30, 40, 80, 90];
let s = arr.some(function(){
    return val => 50 ;
});
console.log(s);

// every method.

let arr = [ 10, 29, 50, 40];
let s = arr.every(function(val){
    return val > 50;
});

console.log(s);


//Q1 print an array with 3 fruits and print the secind fruit,

let arr = ['apple','guava', 'banana'];
console.log(arr[1]);

//Q2 

let arr = ['apple','guava', 'banana'];

arr.push("mango");
arr.unshift("pinapple");

console.log(arr);

//Q3

let arr = ['apple','guava', 'banana'];
 arr[2] = "kiwi"
console.log(arr);

//Q4

let color = ["green", "yellow"];
color.splice(1, 0, "red", "blue");
console.log(color);

//Q5

let name = ["Zaraz", "Arjun", "Mira", "Bhavya"];
name.sort().reverse();
console.log(name);

//Q6

let arr = [2, 4, 6, 8];
let newarr = arr.map(function(val){
    return val ** 2; // we can also use this for squre
    return val * val; 
});
console.log(newarr);

//Q7

let arr = [5, 12, 8, 20, 3];
let newarr  = arr.filter(function(val){
        return  val > 10;
});
console.log(newarr);

//Q8

let arr = [10, 20, 30];
let newarr = arr.reduce((acc , val) => {
  return acc + val;
}, 0);
console.log(newarr);

//Q 9

let arr = [12,15,3,8,20];
let newarr = arr.find((val) => {
  return val < 10;
});
console.log(newarr);

// Q10
let arr = [45, 60, 28, 90];
let newarr = arr.some((val) => {
  return val < 35;
});
console.log(newarr);

//q11

let arr = [2, 4, 6, 8, 10];
let newarr = arr.every((val) => {
  return val % 2 === 0;
});

console.log(newarr);

//Q12 

let fullname = ["mayank", "rahani"];
let [firstname, lastname] = fullname;
console.log(lastname);

//Q13 
let a = [1, 2, 3];
let b = [4, 5, 6];

let c = [...a, ...b];

console.log(c);

//Q14
let countries = ["USA", "Uk"];
let i = ["india"];
let m = countries.unshift(...i);
console.log(countries);