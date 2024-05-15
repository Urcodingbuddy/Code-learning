// let a =  [ 1,3,4,56,6,98]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// // a.forEach((value, index, arr)=>{
// //     console.log(value, index, arr)
// // })


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }


// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,":",element)
//     }
// }

let a = 52;

for (const iterator of a) {
    console.log(iterator)
}

// const str = "hello";

// for (const char of str) {
//     console.log(char);
// }

let v = "This is an exaple string"
for (const key in v) {
    console.log(v[key]);
}