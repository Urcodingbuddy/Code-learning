
async function ansh(){
    let dehliweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 C")
        }, 2000)
    })
    
    
    let bangloreWeather =  new Promise((resolve, rejcet)=>{
        setTimeout(()=>{
            resolve("30 C")
        },5000)
    })

    // dehliweather.then(alert)
    // bangloreWeather.then(alert)

    console.log("Fetching Delhi weather, Please wait...")
    let dehliw = await dehliweather
    console.log("fetched delhi weather:" + dehliw)
    console.log("Fetching Bangalore weather, Please wait...")
    let banglw = await bangloreWeather
    console.log("fetched bangalore weather:" + banglw )
    return[dehliw, banglw]
}

const cherry = async () =>{
    console.log("hey i am  cheary and i am  waiting for other executions")
}
const main = async ()=>{
    console.log("Welcome to weather conttol room")
    let a = await ansh();
    let b = await cherry();
    
    
}

main()


// ansh().then(alert)// this is same as console.log(x)