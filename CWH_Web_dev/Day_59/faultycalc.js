
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let a = prompt("Enter your First number to")

let operator = prompt("Choose the mathmetical Operator", "+ , - , / , x  ")

let b = prompt("Enter your Second number")

let c = Math.random();

let result; 

if (operator == "+") {
    result =   a - b + c;
}

else if( operator == "-" ){
    result =  a / b + c;
}

else if(operator == "*"){
    result =  a + b + c;
}

else if(operator == "/"){
    result =  a ** b + c;

}

alert("Your answer is:", result)
