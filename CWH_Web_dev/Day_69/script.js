// let a = 6;
// function factorial(number){
//     let arr = Array.from(Array(number).keys())
//     console.log(arr)
// }

// factorial(a)


////////////////////////////////////


let a = 6;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())


    // let c = arr.slice(1,).reduce((a, b)=>{
    //     return a*b
    // })

    //////////////  OR   ////////////

    let c = arr.slice(1,).reduce((a, b)=> a*b)
    console.log(c)
}

factorial(a)

//////// Another bny creating traditional for loop

function facfor(number){
    let fac = 1;
    for (let index = 0; index <= number; index++) {
        fac = fac * index;
    
    }
    return fac
}
console.log(factorial(a))
console.log(facfor(a))







