
      
// IIFE  (Immidiate invoke )
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })
}
(
    async function main() {
        let a = await sleep()
        console.log(a)
        let b = await sleep()
        console.log(b)
    })()


    let [x, y, ...bachehue] = [1,2,3,4,5,6,7,87,8]
        console.log(x,y,bachehue)


let arr = [1,2,3,4]
let obj = {...arr}
console.log(obj)

