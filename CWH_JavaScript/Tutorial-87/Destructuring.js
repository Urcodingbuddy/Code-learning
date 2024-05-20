// let arr =  [11,12,13,34,34,6,7,43]
// No need to do this
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]                     
// let [a, , b,...rest] = arr
// console.log(a,b,rest)

let {a,b} = {a:1, b:2}
// console.log(a,b,rest)

// Spread Operator
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function  sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

let obj2 = {
    name:"Ansh",
    company:"XYZ",
    address:"xyz"
}

console.log({...obj2, name:"John", company:"DJI"})
console.log({name:"John", company:"DJI",...obj2})