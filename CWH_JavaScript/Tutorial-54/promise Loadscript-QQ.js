// function loadScript(src){
//     return new Promise((resolve, reject)=>{
//         var script = document.createElement("script");
//         script.src = src;
//         script.onload =  function(){
//             console.log("Successfully loaded with SRC: " +  src)
//             resolve(src);
//         }
//         script.onerror = function(){
//             console.log("Error script Loading with src: " + src)
//             reject(new Error("SRC got some error"));
//         }
//         document.body.appendChild(script);
        
//     });
// }

// function hello (src) {
//     console.log("You can use the data of this src:" +  src)
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js").then(hello).catch((error)=>{
//     console.log(error);
// })
///////////////////////////////////////////////////////////////////////////////////////////////////

function loadScript(src){
    return new Promise((resolve, reject)=>{
        var script = document.createElement("script");
        script.src =  src;
        script.onload =  function(){
            console.log("Done with src: "+ src)
            resolve(src)
        }

        script.onerror =  function(){
            console.log("Error with src: "+ src)
            reject(new Error("Unexpectted error with src: " + src))
        }
        document.body.appendChild(script);
    });
}    
function dataloaded(src){
    console.log("Script Loaded with src : " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js").then(dataloaded).catch((error)=>{
    console.log(error);
})


/////////////////////////////////////////////////////////////////////////////////////////////////
// function fetchdata(url){
//     return fetch(url).then(Response => Response.json())
//     .catch(error => console.error("Unexpected error: " + error))
// } 

// fetchdata("https://jsonplaceholder.typicode.com/posts")

///////////////////////////////////////////////////////////////////////////////////////////////////

