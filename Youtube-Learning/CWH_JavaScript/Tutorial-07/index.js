// Types of data Types (Number,String,Undefined, null)

const promt = require("prompt-sync")({ sigint: true});

let a = promt("Hey Whats your age ?")

console.log("Wow your age is ",a)


a = Number.parseInt(a) // Converts the sting to a number 
if(a>17){
    alert("This is a Valid age to Drive a Vehicle")
}

console.log("Age is Just a ",typeof a)
