function findMean(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    return mean;
}
const mean = findMean(2, 4, 5, 6, 5, 6, 4);
console.log("Mean is:", mean);

// hogiyaaaaaaaaaaaaa 😭❤️