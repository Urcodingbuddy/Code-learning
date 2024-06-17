greet2()// JS does not host function & Class expressions are not hosted
console.log(a)
function greet(){
    console.log("Good Morning")
}

greet()

var a;

var greet2 =()=>{
    console.log("Good afternoon")
}

let greeting = function(){
    console.log("Good Evening buddy")
}
greeting()


// This code will throw errors