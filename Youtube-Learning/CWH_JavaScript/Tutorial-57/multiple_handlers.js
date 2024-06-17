let p1 =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hey i am not resolved")
        resolve(1)
    },1000)
})

p1.then(()=>{
    console.log("Congratulation this promise is now resolved")
})

p1.then(()=>{
    console.log("Hurry")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4)
        },2000)
    }).then((value)=>{
        console.log(value)
    })
})

/////////////////////////

let time = new Date();

let t = time.setMonth(1,25)
console.log(time)

