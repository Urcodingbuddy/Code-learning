      

try{
    let age =  prompt("Enter your age")
    age =  Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("My friends are chutiya")
    }

    
}
catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}

console.log("the script is still running")