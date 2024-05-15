let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value 2")
        reject(new Error("Error"));
    },2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000);
})

// let promise_all = Promise.all([p1,p2,p3]) //done all promise , but gives error if an of then is rejected 
// let promise_all = Promise.allSettled([p1,p2,p3]) //return all resolved promises , and if any promise rejected , so it will retrun all remainings resolved.....
// let promise_all = Promise.race([p1,p2,p3]) //it just return a promise which is resolved ASAP
// let promise_all = Promise.any([p1,p2,p3]) // wait for the first priomise is to fullfill and it result bucoumse the outcome
// let promise_all=Promise.resolve(6)
let promise_all=Promise.reject(new Error("hey"))

promise_all.then((value)=>{
    console.log(value)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })