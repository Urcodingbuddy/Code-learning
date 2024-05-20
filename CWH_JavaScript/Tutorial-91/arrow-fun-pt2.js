const sayHello1 = () => {
    console.log("Hello 1")
}
// But if it is single liner You can do this
const sayHello2 = name => {
    console.log("Hello 2" + name); 
    console.log("hy")

}
// but less readablity


const x = {
    name: "Ansh",
    role: "Js Developer",
    age: 19,
    exp: "fresher",
    // show: function(){
    //     let that = this
    //     console.log(this)
    //     console.log(that)
    //     setTimeout(function(){
    //         console.log(`The name is ${that.name}\nThe role is ${that.role}`)
    //     },1000)
    // } instead of use arrow function without the use of lexical this{let that = this (that.name)}
    show: function () {
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 1000)

    }
}

x.show("Ansh")
// console.log(x.name, x.exp, show())


// sayHello1()
sayHello2("Ansh")