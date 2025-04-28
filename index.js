// // function testVarLetConst() {
//     if (true) {
//       var x = 10;
//       let y = 20;
//       const z = 30;
      
//     }
//     console.log(x); // ✅ 10
//     console.log(y); // ❌ Error (because block scoped)
//     console.log(z); // ❌ Error
//   }
 
//   testVarLetConst();


  //var can be used has global scope or functional scope can be declared outside blockscope eg(if,)
  //let const still can be global variable but But they are not properties of the global window object (in browser) or global object (in Node.js
  //if, else, for, while, or any {} block 


  //Data Types in JavaScript

// Primitive :Single value, stored directly
// Non-Primitive:	Complex data, stored by reference

// primitive -string number boolean undefined null Bigint symbol 
// Non primitive - object array function 


// Operators in JavaScript

// Arithmetic Operators (Math Operations):+-*%/
// Assignment Operators:= += x = X+1


// Normal Functions (Function Declarations)

// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(2, 3)); // ✅ 5
// Hoisted (can call before definition) only possible for normal function


// Arrow Functions (Modern ES6+ Syntax)

// const add = (a,b) => {
//     return a+b;
// };
// console.log(add(2, 3)); // ✅ 5



  
//   console.log(add(2, 3)); // ✅ 5



// const num = [1,2,3,4,5,6];
// const hof = num.map(a => a*2);
// console.log(hof)



// Higher-Order Functions (HOF)

function uv(name, func){
    console.log("asds" ,func)
    console.log("asds" ,name)
    return func(name);
}

function sayUv(a){
    console.log("sdas" ,a)
    return "hello " + a;
   
}

console.log(uv("UV" ,sayUv));