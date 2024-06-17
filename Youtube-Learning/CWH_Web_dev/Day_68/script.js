// let boxes = document.getElementsByClassName("box") 
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"


document.getElementById("gugu").style.backgroundColor = "green"
document.getElementById("gugu").style.color = "white"

/////////////////  OR  ///////////////////////////////

var guguElement = document.getElementById("gugu");
guguElement.style.backgroundColor = "green";
guguElement.style.color = "white";

/////////////////////////////////////////////////////////

document.querySelector(".box").style.backgroundColor = "gold"  // this will work on only first element that matches with class = "box" 
//                          |                              
// Insted of you casn use \|/

// document.querySelectorAll(".box").style.backgroundColor = "gold"  // This will not work becouse this gives the colection of html

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "gold"
})


// also you can target tags by using this ----->

document.getElementsByTagName("div")

// ///////////////////////////////////

document.querySelector(">container").contains(e[0])
// true 
document.querySelector(".container").contains(documentquerySelector("body"))
// this will return false becouse container does not contains body



document.querySelector("body").contains(documentquerySelector("container"))
// this will return true becouse container contains body


// matches, closet  & contains methods
// there are three impotant methods to search the DOM

// 1.> elem.matches()
document.querySelector(".container").matches(e[2])

// 1.> elem.contains()
document.querySelector(".container").contains(e[2])

// 1.> elem.closest()
document.querySelector(".container").closest(e[2])









