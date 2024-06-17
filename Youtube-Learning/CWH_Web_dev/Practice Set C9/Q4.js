async function promp(){

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("this is a promise p1")
    },2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("this is a promise p2")
    },3000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("this is a promise p3")
    },4000)
})



try{
    const results = await Promise.all([p1, p2, p3]);
    console.log(results);

    const result1 = await p1;
    const result2 = await p2;
    const result3 = await p3;
    console.log(result1, result2, result3);
    console.timeEnd("run")


}catch(err){
    console.log(err)
}

}

promp();