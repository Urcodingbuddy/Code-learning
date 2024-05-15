let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("resolved after 2 secends")
        resolve(56)
    },2000);
})


p1.then((value)=>{
    console.log(value)
    return p2 = new Promise ((resolve, reject)=>{
        setTimeout(()=>{resolve("Promise 2")},2000)
    })
}).then((value)=>{
    console.log("We are done with value: "+  value)
    return 2; 
}).then(()=>{
    console.log("Now we are pakka done")
})