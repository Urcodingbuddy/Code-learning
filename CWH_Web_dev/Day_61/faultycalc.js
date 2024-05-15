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


if (random > 0.1) {
    if (c == "-") {
        result = a - b;
    }
    else if (c == "+") {
        result = a + b;
    }
    else if (c == "*") {
        result = a * b;
    }
    else if (c == "/") {
        result = a / b;
    }
    else {
        result = "Please enter a Valid Operator"
    }

}

else {
    //Perform Wrong Calculation
    c = obj[c]
    if (c == "-") {
        result = a - b;
    }
    else if (c == "+") {
        result = a + b;
    }
    else if (c == "*") {
        result = a * b;
    }
    else if (c == "/") {
        result = a / b;
    }
    else {
        result = "Please enter a Valid Operator"
    }

}

prompt("REsult is", result);