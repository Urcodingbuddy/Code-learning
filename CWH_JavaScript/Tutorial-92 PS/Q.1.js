 const  a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}
(
async()=>{
       let text = await a("Heloow")
       console.log(text)
       text = await a("World")
       console.log(text)
    }
)()