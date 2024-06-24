const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static files being served from:', path.join(__dirname, 'public'));

// Route to serve the HTML file
app.get('/', function(req, res) {
    const filePath = path.join(__dirname, 'public', 'Bubble-game.html');
    console.log('Serving file:', filePath);
    res.sendFile(filePath);
});

// Start the server
app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});
