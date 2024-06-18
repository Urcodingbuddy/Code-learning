const chalk = require('chalk');

function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

function displayTime() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    console.clear();
    console.log(chalk.green(currentTime));
}

setInterval(displayTime, 1000);
displayTime();
