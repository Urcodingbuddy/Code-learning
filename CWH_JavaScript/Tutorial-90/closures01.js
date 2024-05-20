massage = "Good Global"
function hello1(){
    let massage = "Good morning local  "
    {
        let massage = "Good morning inner"
        console.log("Hello1: "+ massage)
    }
    let c = function hello2(){
        console.log("I am C" + massage)
    }
    return c
}

c = hello1()
c()
