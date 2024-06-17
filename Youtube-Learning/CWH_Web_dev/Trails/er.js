// Selecting the first row (index 0) from the table's tbody
const a = document.querySelector('tbody').children[0];

// Selecting the second cell (index 1) within the first row
const b = a.children[1];

// Applying styles to the second cell in the first row
b.style.color = 'red'; // Change text color to red
b.style.backgroundColor = 'blue'; // Change background color to blue
