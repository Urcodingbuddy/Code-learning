let a = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000)
    })
} 
 (async () => {

    let b = await a()
    console.log(b,"B is done")
    let c = await a()
    console.log(c,"C is done")
    let d = await a()
    console.log(d, "D is done")
})()

