// console.log("1 hello")

// setTimeout(function(){
//     console.log("2 I am timeout")
// },2000)

// console.log("3 My name is ansh")

// console.log(Promise)


// let prom = new Promise(function(resolve, reject){
//      console.log("i am an alert in promise")
//      resolve(56)
// }) 

// setTimeout(function(){
//     console.log("Hello world")
// })


////////////////////////////////////////////////////////////

// let simplePromise = new Promise ((resolve, reject)=>{
//     let isdone = true;

//     if(isdone){
//         resolve("Task is done")
//     }
//     else{
//         reject("Task is not done")
//     }
// })


// simplePromise.then((massage)=>{
//     console.log(massage)
// }).catch((massage)=>{
//     console.log(massage)
// })

/////////////////////////////////////////////


let p1 = new Promise((resolve, reject)=>{
    console.log("Promiose is still pending")
    setTimeout(()=>{
        console.log("I am a promise and  i am fulfilled")
         resolve(false)
        // reject(new Error("I am an error"))
    }, 5090)
})


let p2 = new Promise((resolve, reject)=>{
    console.log("Promiose is still pending")
    setTimeout(()=>{
        console.log("I am a promise and  i am rejected")
        
        reject(new Error("I am an error"))
    }, 5090)
})


p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.error(error)
})



p2.catch((value)=>{
    console.log(value)
}).catch((error)=>{
    console.error(error)
})



console.log(p1, p2)

