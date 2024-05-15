// Program to add first n natural number's
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1) // sum = sum + (i + 1)

}
console.log("sum of first " + n + " " + "natural number is " + sum)