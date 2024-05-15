let ran = Math.random()
let first, second, third;
if (ran < 0.33) {
    first = "Crazy"
}
else if (ran < 0.66 && ran >= 0.33) {
    first = "Amzing"
}
else {
    first = "Fire"
}
//////////////////////////////////////////////////////////////////////////
// Lets Generate the second word
ran = Math.random()
if (ran < 0.33) {
    second = "Engine"
}
else if (ran < 0.66 && ran >= 0.33) {
    second = "food"
}
else {
    second = "Garments"
}
///////////////////////////////////////////////////////////////////////
// Lets Generate the second word
ran = Math.random()

if (ran < 0.33) {
    third = "Bros"
}
else if (ran < 0.66 && ran >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)



/////////////////////////////////////////////////////////////////////////////////////////////



// Define arrays for each part of the name
const firstOptions = ["Crazy", "Amazing", "Fire"];
const secondOptions = ["Engine", "Food", "Garments"];
const thirdOptions = ["Bros", "Limited", "Hub"];

// Generate random index for each array
const randomIndex = () => Math.floor(Math.random() * 3);

// Generate the random name
const randomName = `${firstOptions[randomIndex()]} ${secondOptions[randomIndex()]} ${thirdOptions[randomIndex()]}`;

console.log(randomName);
