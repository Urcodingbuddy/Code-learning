function loadscript(src){
    return new Promise((resolve, reject) =>{
        var script = document.createElement("script");
        script.src = src;
        script.onload = function(){
            resolve(src)
        }
        script.onerror = function(){
            reject(src)
        }
        document.body.appendChild(script)
    })
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
.then(()=>{
    alert("The script is loaded successfully")
})
.catch(()=>{
    alert("THe script is not loaded")
})