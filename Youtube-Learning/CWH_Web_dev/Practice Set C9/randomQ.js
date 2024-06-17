function calculateSum(number){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray(number)){
            reject("Invalid input")   
        }
        else{
            const sum = number.reduce((acc, num)=>{
                if(typeof num === "number"){
                    return acc + num
            }
            else{
                return acc;
            }
        },0);
        resolve(sum)
        }
    });
}


calculateSum([0,1,2,3,4,5,6])
.then((sum)=>{
    console.log(sum)
})
.catch((error)=>{
    console.log(error)
})