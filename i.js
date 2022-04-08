// ES6 stands for ECMAScript 6.
// ES6 is the 6th version of ECMAScript 6.
// ES6 is published in 2015 and also known as ECMAScript 2015.
// ES6 allows to make our code modern and readable.
// ES6 suits the term 'write less, do more'.

// ES6 introduced two new keywords ==>  let and const are used to declare the variables and both are block scoped.

// let used to declare variables
let a;
 a = 12;

a = 22; // here 'a' is reassigned.
console.log(a); // prints 22 , it means it is reassigning


// const used to declare constants and it is not reassigned.

const pi=3.14 // pi is universal constant

//pi = 3.4  ===> // here 'pi' is reassigned 
//console.log(a); ===>  // prints error that - Uncaught TypeError: Assignment to constant variable. literally it means const cant be reassigned  

// redeclaring the variable by using var

var c=10;

var c =12; // redeclaring the variable

 
console.log(c);  // prints 12 , it means by using var can redeclare the variable 

// cannot redeclare the variable by using let and const

/*let d = 5;
let d = 6;
console.log(d); */ // prints Error: Identifier 'd' has already been declared 

// in above example proofs that cannot declare variable by using let 

//block scope - let and const are block scoped  

//example:1
for(let i=0;i<=4;i++){
    console.log(i);
}
//console.log(i);

//example:2


{
    let e = 6; // it is inside block
    console.log(e); // prints 6 here because console also inside the block
}

//console.log(e);  // prints error that : e is not defined

// Hoisting : Hoisting is JavaScript’s default behaviour of moving variables and function declarations to the top of the current scope before code execution.

 //console.log(f); //prints undefined // we wont get any error like not defined because of hoisting
 var f;
 f = 10;
console.log(f);

// hoisting is not possible for let and const.

// example - uncomment below example to run it

/*g = 5 ;
console.log(g);
let g ; */ // prints Error: Cannot access 'g' before initialization

// hoisting is possible in functions.
//example:
age(1993);

function age(year){
    console.log(2021-year);
}


//hoisting is not possible in function expression.

//var res = age1(1997);   // prints age1 is not a function it means function expression is not worked as hoisting.
 /* var age1 = function(year){
    console.log(2021-year);
} */

//  functions in vennila javascript in below example.
//example for function:
function add(x,y){
     sum = x+y;
    console.log("answer is " + sum);
}
add(10,2);
add(10); //prints: answer is NAN(Not a Number)
// example for function expression:

var add1 = function(t,s){
    sum1 = t+s;
    console.log(sum1);
}
var result = add1(10,20);


// In ES6 we have new format of functions is called Arrow Functions

//example:
// this is called Arrow Function: 
// in parameters we can assign default arguments
var add1 =(m=5,n=10) => {   
    sum2 = m+n;
    console.log(sum2);
}
add1(); // here it prints the default arguments and prints value : 15
add1(10); // here 'm' parameter is given then , it adds the default 'n' parameter and prints value : 20
add1(6,3); // here these two arguments taken and prints value : 9

// IMP Note: what ever in ES6 we use in real world, not in vennela JS , we learn vennela js for basics.

// 


// Arrow Function :  for single statement
 var add2 = (o=3,p=5) => o+p ;
 let res = add2(6,4);
 console.log("result is", res);

 //Arrow Function : for multi statement
 var add3 = (q,r) => {
    return q+r;
 }
let res2 = add3(20,5);
console.log(res2);