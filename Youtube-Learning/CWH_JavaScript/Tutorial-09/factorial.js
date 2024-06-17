let fact = 1;
// let n = prompt("Enter a number to find its factoril")
let n = 5;

n = Number.parseInt(n)
for(let i = 1; i <= n; i++)
{
    fact *= i
    
}
console.log("Factorial of", n , "is", fact )
    