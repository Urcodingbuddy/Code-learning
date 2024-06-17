// let num = [1,2,3,4,56]
// let b = num.toString() // # Method 01
// console.log(b)
// console.log (typeof b)

// let c = num.join(" aur ye ")   // # Method 02 Basically it join multyiple array items and lies between all of them
// console.log(c)



const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]