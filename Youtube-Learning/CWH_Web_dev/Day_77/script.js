console.log("Script loaded");

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    // let viewStrFormatted = "";

    if (views < 1000) {
        viewStrFormatted = views;
    } else if (views < 1000000) {
        viewStrFormatted = Math.round(views / 1000) + "K";
    } else {
        viewStrFormatted = Math.round(views / 1000000) + "M";
    }
    
    
    let html = `
<div class="card">
            <div class="thumb">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="title">
                <h1>${title}</h1>
                <p>${cName} . ${viewStrFormatted}Views . ${monthsOld}months Ago</p>
            </div>`;


            document.querySelector(".container").innerHTML += html

}





createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

