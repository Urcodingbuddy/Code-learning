// let ar =  [1,2,3,4,5]
// let newarr = [ ]
let arr =  [1,2,3,4,5]
let newarr = []


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
}

//using simple method insted of this loop

// let ar =  [1,2,3,4,5]

let newar = arr.map((e)=>{
    return e**2
})

console.log(newar)


let a = [1,2,3,4,5,6]

let newa =a.map((value, index, array)=>{
    return value*value
})

console.log("Square of Arrays are:",newa)

// Filter method

let c = [1, 45, 2, 4534, 2, 32, 3, 45]
const greaterThanSeven = (e) => {
    return e > 2 ? true : false;
}
console.log(c.filter(greaterThanSeven))

// //                OR


console.log(arr.filter((e) => {
    return e > 2 ? true : false
}))

//  Reduce Method 

let r = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b
}
console.log(r.reduce(red))

let b = Array.from("ANSH")
console.log(b)

