let random = Math.random()
let a = prompt("Enter First Number")
let b = prompt("Enter Second number")
let c = prompt("Enter Operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random>0.1){
    // Perfom correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
}
else
{
    // perform wrong calculations
    c =  obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
}


prompt("REsult is", result);