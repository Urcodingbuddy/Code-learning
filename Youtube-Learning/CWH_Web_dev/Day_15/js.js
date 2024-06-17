let arr = [1, 2, 3, 4, 2, 1]; 
let a;
do {
    a = prompt("Please enter a number or type 'exit' to finish.");
    if (a === null || a.toLowerCase() === 'exit') { // Check if user wants to exit
        break;
    }
    a = Number.parseInt(a);
    if (!isNaN(a)) {
        arr.push(a);
    } else {
        console.error("Invalid number");
    }

    alert("Your Number is ",arr)

} while (true);


