const  a = async (text,n=2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000*n);
    });
}
(
async()=>{
       let text = await a("I am resolving after 1 Second", 1)
       console.log(text)
       text = await a("I am resolving after 4 second", 4)
       console.log(text)
    }
)()

