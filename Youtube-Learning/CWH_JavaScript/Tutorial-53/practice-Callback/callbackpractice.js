// Sure, here are some similar questions that involve creating logic with callbacks in JavaScript:

// 1. Write a JavaScript function that takes two arguments: a string and a callback function. The function should log the string to the console and then run the callback.

// 2. Write a JavaScript function that takes two arguments: an array and a callback function. The function should iterate over the array and pass each item to the callback function.

// 3. Write a JavaScript function that takes two arguments: a number and a callback function. The function should calculate the square of the number and then pass the result to the callback function.

// 4. Write a JavaScript function that takes two arguments: a URL and a callback function. The function should fetch data from the URL and then pass the data to the callback function.

// 5. Write a JavaScript function that takes two arguments: a DOM element and a callback function. The function should add an event listener to the element that triggers the callback function when the element is clicked.
 
{
function greet(name , callback){
    console.log("Heelo" + name)
    callback();
}

function saygoodby(){
    console.log("Good Bye!")
}

greet("Ansh", saygoodby)
}


// ///////////////////////////////////////////////

{
function loadimage(url , callback){
     let img = document.createElement("script")
     img.src = url;
     document.body.appendChild(img)
     img.onload =()=>{
        callback(url);
     }
}

function hello(url){
    console.log("You image is loaded successfully with URL:" + url)
}

loadimage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Foptics&psig=AOvVaw2sSfjE77vczCUqQAfoytXg&ust=1712594129477000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDs7LjEsIUDFQAAAAAdAAAAABAE", hello )
}
// ///////////////////////////////////////////////////////////////////////////////////////
{
function string(string, callit){
    
    callit(string);
}

function  callback(string){
    console.log("callback is loaded successfully after loading : "+ string)
}

string("I am a string!", callback);
}
// //////////////////////////////////////////////////

{
function calc(number, callback){
let result = number * number;
callback(result)
}

function printit(result){
console.log("Your Square of number is : "+ result)
}


calc("2", printit) 
}

//////////////////////////////////////////////////////////
{
function fetchdata(url, callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error("Error: " +error));
}

function printdata(data){
        data.forEach(item => {
            console.log(item.body);
        });
}

fetchdata("https://jsonplaceholder.typicode.com/posts", printdata)

}


////////////////////////////////////////////////////////////




