console.log('This is promise')
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Rnadom number is supporting you")
    }
    else {
        setTimeout(() => {
            console.log('yes I Am done 1')
            resolve("Ansh 1")
        }, 3000);
    }
})
let prom2 = new Promise((resol, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No Rnadom number is supporting you 2 ")
    }
    else {
        setTimeout(() => {
            console.log('yes I Am done 2 ')
            resol("Ansh 2")
        }, 1000);
    }
})
let p3 = Promise.allSettled([prom1, prom2]) // This will return statement of results ,(status and values)
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

p3.finally(()=>{
    console.log('finally done!')
})


let p4 = Promise.all([prom1, prom2]) // This will return values when all promises are resolved
p4.then((a)=>{
    console.log(a)
}).catch(e=>{
    console.log(e)
})


p4.race([prom1, prom2]) // This will return value of the first resolved  promise in race
    .then((a)=>{
        console.log(a)
    })

p4.any([prom1, prom2])
    .then((a)=>{
        console.log(a)
    }) 


    Promise.resolve(prom1).then((value) => {
        console.log(value); // Logs "Ansh 1" if prom1 resolves
    }).catch((error) => {
        console.log(error); // Logs "No Random number is supporting you" if prom1 rejects
    });

    Promise.reject(prom2).then((value) => {
        console.log(value); // Logs "Ansh 1" if prom1 resolves
    }).catch((error) => {
        console.log(error); // Logs "No Random number is supporting you" if prom1 rejects
    });