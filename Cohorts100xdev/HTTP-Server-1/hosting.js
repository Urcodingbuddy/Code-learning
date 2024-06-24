const express = require('express');
const path = require('path');
const app = express();
const port =  process.env.POST || 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static files being served from:', path.join(__dirname, 'public'));

// Route to serve the HTML file
app.get('/bubble', function(req, res) {
    const bubblePath = path.join(__dirname, 'public', 'Bubble-game.html');
    console.log('Serving bubble game file:', bubblePath);
    res.sendFile(bubblePath);
});
 
app.get('/responsive',function(req, res){
    const responsive = path.join(__dirname,'public','FirstResponsive.html');
    console.log('Serving resposive dummy site:', responsive);
    res.sendFile(responsive)
})

// Start the server
app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});
