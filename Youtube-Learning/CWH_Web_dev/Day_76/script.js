


async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
    return data;

}

async function main(data){
    console.log("loading...")
    console.log("still loading...")
    let doom = await getData()
    console.log(data)
    console.log("Your data is" ,doom)
    console.log("data loaded")
}
main();





// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500)
//     })
// }



// data.then((v)=>{
    //     console.log("Data Loaded",v) // but this is just like a callback, better use async,await
    // })
    
    
    