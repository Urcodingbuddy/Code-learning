function sum(a,b,c){
    return a+b+c;
}

let x = [1,3,5]
// console.log(sum(...x))


let j = [11,2,3,4]
function sub(a,b,c,d){
    return a+b+c-d;
}
let a = sub(...j)
console.log(a)