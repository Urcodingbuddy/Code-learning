 

 // Types of data Types (Number,String,Undefined, null)

// const promt = require("prompt-sync")({ sigint: true});

// let a = promt("Hey Whats your age ?")

// console.log("Wow your age is ",a)


// a = Number.parseInt(a) // Converts the sting to a number 
// if(a>17){
//     alert("This is a Valid age to Drive a Vehicle")
// }

// console.log("Age is Just a ",typeof a)


//...........................................................................


const promt = require("prompt-sync")({ sigint: true});
let age = promt("Hey Whats your age ?");
age = Number.parseInt(age) // Converts the sting to a number 



// if(age>17){
//     alert("This is a Valid age to Drive a Vehicle");
// }
// else
// {
//     alert("You are not valid to drive a vehicle ");
// }

//..................................................................................

// if(age>0)
// {
//     if(age>18){
//         console.log("You are eligible To drive a Vehicle or Vote");
//     }
//     else{
//         console.log("You are a teenager,wait untill you are done at 18")
//     }
// }
// else{
//     console.log("Enter a valid number to Cheak your Driving eligibility ")
// }

//.......................................................................................



// if(age<0)[
//     console.log("This is an invalid age")
// ]
// else if(age<9){
//     console.log("You are a kid,You can not even think about Driving !")
// }
// else if(age<18 && age>=9){
//     console.log("You are a kid,But You can  think about Driving after 17 !")
// }
// else if(age>78){
//     console.log("Please Dont Drive,You are on your 80s !")
// }
// else{
//     console.log("You can drive")
// }



// Home Work - Expolre Switch  statement and Write a basic program 
// HW done in HW_switchcase.js

//.............................................................................

// Ternary Operators =  { (age<18)? "If Yes" : "If No" }

console.log("You can",age<18? "not Drive" : "Drive")

