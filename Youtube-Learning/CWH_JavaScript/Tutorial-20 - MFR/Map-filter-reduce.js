/* 
Aray map method (it is slightly simpler 
to for each but twist is its creat a returns a new array 
Ex - {let a = arr.map})
*/

// Array Map method
let arr = [45,23,67]
let a = arr.map((value,index)=>{
    // console.log(value,index)
    return value+index;
})
// console.log(a)

// Array Filter method
let arr2 = [60,62,52,41,30,80,42,35]
let a2 = arr2.filter((a)=>{
    return a<55
})
// console.log(a2)

// Array Reduce method
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let a3 = arr3.reduce((v,i)=>{
    return v+i
})
console.log(a3)


// Array Reduce method using Function
const reduce_function = (a1,a2)=>{
    return a1+a2
}
let a4 = arr3.reduce(reduce_function)
console.log(a4)