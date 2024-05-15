

// const obj =  {harry:98, rohan:70, aakash:7}

// for(const student in obj){
//     console.log(`${student}:${obj[student]}`)
// }


const marks =  {harry:98, rohan:70, aakash:7}

const students = Object.keys(marks);

for(let i=0; i < students.length; i++){
    const student = students[i]
    console.log(`${student}:${marks[student]}`)
}


// let obj =  [12,,34,45,65]
//   console.log(obj.length)




