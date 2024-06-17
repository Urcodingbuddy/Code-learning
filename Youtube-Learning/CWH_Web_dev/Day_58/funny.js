
let gender = prompt("hey stranger what is your Gender" + " " + "give answer by pressing ( M or F ) ");

let name;

if (gender == "m" || gender == "M") {
    const name = prompt("So.. Hansome Boiii Enter you Name Please...");
    if (name) {
        nice(name);
    } else {
        alert("Please enter your name next time!");
    }
} 
else if (gender == "f" || gender == "F") {
    const name = prompt("So.. Gorgoes girl Enter your Name Please...");
    if (name) {
        nice(name);
    } else {
        alert("Please enter your name next time!");
    }
}

else {
    alert("Are You LGBT please refresh this page and re select the appropriate Options")
}

// if (name) {
//     nice(name);
// } else {
//     alert("Please enter your name next time!");
// }

function nice(name) {
    alert("hey" + " "  + name + " "  + "you are good")
    alert("hey" + " "  + name + " "  + "you are nice")
    alert("hey" + " "  + name + " "  + "you are honest")
    alert("hey" + " "  + name + " "  + "you are best")
    alert("hey" + " "  + name + " "  + "you are great")
    alert("hey" + " "  + name + " "  + "you are humble")
}


// let gender = prompt("Hey stranger, what is your gender? (Please enter M or F)");

// let name;

// if (gender === "M" || gender === "m") {
//     name = prompt("So.. Handsome Boiii Enter your Name Please...");
// } else if (gender === "F" || gender === "f") {
//     name = prompt("So.. Gorgeous girl Enter your Name Please...");
// } else {
//     alert("Are you LGBT? Please refresh this page and reselect the appropriate options.");
// }

// if (name) {
//     nice(name);
// } else {
//     alert("Please enter your name next time!");
// }

// function nice(name) {
//     alert("Hey " + name + ", you are good.");
//     alert("Hey " + name + ", you are nice.");
//     alert("Hey " + name + ", you are honest.");
//     alert("Hey " + name + ", you are best.");
//     alert("Hey " + name + ", you are great.");
//     alert("Hey " + name + ", you are humble.");
// }






