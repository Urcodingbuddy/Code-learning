{
function fetchdata(url, callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error("Error: " +error));
}

function printdata(data){
    console.log("Your data is: " + JSON.stringify(data, null, 2));
}

fetchdata("https://jsonplaceholder.typicode.com/posts", printdata)

}




function fetchdata(url){
    return fetch(url).then(Response => Response.json())
    .catch(error => console.error("Unexpected error: " + error))
} 

fetchdata("https://jsonplaceholder.typicode.com/posts")