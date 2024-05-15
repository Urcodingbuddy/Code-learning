

async function rejection(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error('Invalid'))
        },3000)
        
    })
}

async function main(value){
    try{
       await rejection(value);
       console.log(value);
    }
    catch(error){
        console.log(error);
    }
}

main();