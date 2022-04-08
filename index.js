alert("hiiiii")
//ECMAScript 2015 is also known as ES6 and ECMAScript 6.
//ES6 stands for ECMAscript 6
// before ES6  we have used only one keyword var
var year = 2015
 console.log(year)
 var year = 2018
 console.log(year) // here the variable data has been chganged 
 //when we use var we assign a new value 

//updated version of javascript  6th version of ECMA2015
//ES6 had updated two keywords let and const
let cycle= "hero"
console.log (cycle)
let cycle1 = "ladybird"
console.log(cycle1) 
 // by using let one assigned value  stored to entire oage
// let and const are used to decclare the  variables
const flower="rose"
console.log(flower ,typeof flower)

//const is used to store the values by default to entire page we can't assign multiple times


//variable scope  scope determines the accessibility of variables, objects, and functions from different parts of the code.
//--> 1.global scope
//--> 2.local/functional scope
//--> 3.block scope

//global scope
/*A variable declared outside a function, becomes GLOBAL.
for better understand calling a function inside another function
*/
let cname = "Volvo";
symbol();

function symbol() {
  console.log("I can display " + cname) }
//local scope
/*Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName for this scope we can use var,let,const
Local variables are created when a function starts, and deleted when the function is completed.
 */
function myFunction() {
    let carname = "audi";
    // code here CAN use carName
  }

//block scope
/*Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block: 

*/
{
    let x = 2;
  }
  // x can NOT be used here
  //Variables declared with the var keyword can NOT have block scope.
  {
    var x = 2;
  }
  // x CAN be used here


// Hoisting : 
// Hoisting is JavaScript's default behavior of moving declarations to the top.
//in JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.
/*Variables defined with let and const are hoisted to the top of the block, but not initialized.
Using a let variable before it is declared will result to bugs(Error)*/
/*JavaScript only hoists declarations, not initializations. */

//functions in venilla javascript it is a old version
//example for function:
 function add(x,y){
     sum = x+y;
    console.log("answer is " + sum);
}
add(55,76);
add(10); //prints: answer is NAN(Not a Number)

// example for function expression:

var addition = function(t,s){
    sum1 = t+s;
    console.log(sum1);
}
var result = addition(10,20);

// functions in es6 is a arrow function
// ES5 
var combine = function(x, y) {
   value = x*y;
console.log(value)
    }
combine(2,3);  
  // ES6
  var comb1 = (x, y) => x * y ;
  let res =comb1(10,20)
  console.log('result is ',res)
  //in parameters we can assign default arguments
  
  var suitable = (c=20,d=4) => c * d ;
  let res1 = suitable(60,70);
  console.log("result is", res1);
    var sumof2 = suitable(40,3)
    console.log(sumof2)
    var sum3 = suitable(5)// here it assume by default value of d
    console.log(sum3)


   
  

