//  What is Event Bubbling ?
//  when we click on any element , then it will raise an event 
//  and if it cant find and event listner on that element
//  So it will find Event listner in its Parent
//  if listner is not found in first parent So it will Start
//  finding the listner in parent of parents if closest parent -
//  This is called Event Bubbling


var score=0;
var timer = 6;
var hitrn = 0;
var clickedNum = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    
}
function MakeNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = (hitrn)
}
function countdown() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function makebubble() {
    var clutter = "";

    for (var i = 0; i <= 104; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}



document.querySelector("#pbtm").addEventListener("click",function(dets){
    clickedNum = Number(dets.target.textContent)
    if(hitrn==clickedNum){
        increaseScore()
        MakeNewHit()
        makebubble()
    }
    
})
increaseScore()

countdown()
makebubble()
MakeNewHit()