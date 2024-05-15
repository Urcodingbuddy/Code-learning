let num = [5,43,3,5,56,6];

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

num.forEach(e => {
    console.log(e*e)
});

// // Array.from

let name = "Ansh Pethe"
let arr = Array.from(name)
console.log(arr)


// For of loop
for(let i of num){
    console.log(num[i])
}

// for Each Loop
let a = [1,2,3,4,5,6,7,8,9]
a.forEach(element => {
    console.log(element**element)
});

let b = ["Ansh Pethe"]
Array.from(b)
console.log(b)

// For of Loop
for(let i of a){
    console.log(i)
}


// For in Loop basically gives you index or keys of Array
for(let i in a){
    console.log(i)
}

