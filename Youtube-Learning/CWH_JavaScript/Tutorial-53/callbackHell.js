function loadscript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("load script with SRC: " + src)
        callback(null, src)
    }

    script.onerror = function () {
        console.log("Error load script with SRC: " + src)
        callback(new Error("SRC got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src) {
    if(error){
        console.log(error)
        return
    }
    alert("Hellow World !" + src)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello)

// /**
//  * This function is used to display a good morning message.
//  * If there is an error, it logs the error and sends an emergency message to the CEO.
//  *
//  * @param {object} error - The error object, if any.
//  * @param {string} src - The source or user to whom the good morning message is to be displayed.
//  */
function goodmorning(error, src) {
    // If there is an error
    if(error){
        // Log the error
        console.log(error)
        // Send an emergency message to the CEO
        sendEmergencyMassgaeToCeo();
        // Exit the function
        return
    }

    // Display the good morning message
    alert("Good morning !" + src)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){
    if(error){
        console.log(error)
        sendEmergencyMassgaeToCeo()
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
        if(error){
            console.log(error)
            sendEmergencyMassgaeToCeo()
            return
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
            if(error){
                console.log(error)
                sendEmergencyMassgaeToCeo()
                return
            }
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                if(error){
                    console.log(error)
                    sendEmergencyMassgaeToCeo()
                    return
                }
                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                    if(error){
                        console.log(error)
                        sendEmergencyMassgaeToCeo()
                        return
                    }
                    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                        if(error){
                            console.log(error)
                            sendEmergencyMassgaeToCeo()
                            return
                        }
                        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                            if(error){
                                console.log(error)
                                sendEmergencyMassgaeToCeo()
                                return
                            }
                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                if(error){
                                    console.log(error)
                                    sendEmergencyMassgaeToCeo()
                                    return
                                }
                                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                    if(error){
                                        console.log(error)
                                        sendEmergencyMassgaeToCeo()
                                        return
                                    }
                                    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                        if(error){
                                            console.log(error)
                                            sendEmergencyMassgaeToCeo()
                                            return
                                        }
                                        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                            if(error){
                                                console.log(error)
                                                sendEmergencyMassgaeToCeo()
                                                return
                                            }
                                            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                                if(error){
                                                    console.log(error)
                                                    sendEmergencyMassgaeToCeo()
                                                    return
                                                }
                                                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                                    if(error){
                                                        console.log(error)
                                                        sendEmergencyMassgaeToCeo()
                                                        return
                                                    }
                                                    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src){
                                                        if(error){
                                                            console.log(error)
                                                            sendEmergencyMassgaeToCeo()
                                                            return
                                                        }
                                                        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",) 
                                                    
                                                    }) 
                                                
                                                }) 
                                            
                                            }) 
                                        
                                        },) 
                                    
                                    }) 
                                
                                }) 
                            
                            }) 
                        
                        }) 
                    
                    }) 
                
                }) 
            
            }) 
        
        }) 
    
    }) 

})

