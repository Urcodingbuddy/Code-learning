const personarray = ["Anha","denver","julie","mark"]

console.log(personarray[0])
console.log(personarray[1])
console.log(personarray[2])
console.log(personarray[3])





// Q.1 Print only Even numbers form 1 - 100
const numbers = Array.from({length:100}, (_, index) => index+1)

const nums = numbers.length;
const evenNumbers = [];

for(let i = 0; i <nums; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);


// Q.2 Print the biggest number of an array.

// Method - 01


let arr = Array.from({length:20}, (_,index)=>(index+1))
let largest = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);



// Method - 02


// const numbers = Array.from({length:100}, (_, index) => index+1) /*Used in upper line*/

function findBigNum(arr){
    console.log(`The largest num is ${Math.max(...arr)}`)
}

findBigNum(numbers)