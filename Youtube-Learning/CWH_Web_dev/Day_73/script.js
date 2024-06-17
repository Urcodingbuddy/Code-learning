function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr;

    if (views < 1000) {
        viewStr = views;
    }
    else if (views < 1000000) {
        viewStr = Math.round(views / 1000) + "K";
    }
    else if (views > 1000000) {
        viewStr = Math.round(views / 1000000) + "M";
    }
    else {
        viewStr = "Error"
    }

    let date;
    if (monthsOld < 19) {
        date = monthsOld + " months ";
    }
    else if (monthsOld > 19) {
        date = Math.round(monthsOld / 10) + "Years";
    }

    else {
        date = "Error"
    }

    let html = `
     
    <div class="card">
            
    <div class="thumb">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
   <div class="text">
        <h2>${title}</h2>
        <p>${cName} <span>•</span>  ${viewStr} Views <span>•</span> ${date} ago</p>
    </div>

</div>
 `

    let button = document.getElementById("cbtn")
    button.addEventListener("click",()=>{
        document.querySelector(".container").innerHTML += html
    })
}



createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")