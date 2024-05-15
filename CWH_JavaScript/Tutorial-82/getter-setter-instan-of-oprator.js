class Animal {
    constructor(name){
        this._name = name;
    }
    fly(){
        console.log(this.name + " is flying...");
    }
    get name(){
        return this._name;
    }
    set name(newName){
       this._name = newName;
    }
}

class rabbit extends Animal{
    jump(){
        console.log("rabbit jumps")
    }
} 

let a = new Animal("Shri");
let d = new rabbit()
a.fly()
console.log(a.name)
a.name = "dalla"
console.log(a.name)
// console.log( a instanceof Animal ) // True
// console.log( b instanceof Animal ) // Flase Becouse it does not exist

console.log(d instanceof rabbit) // True
console.log(d instanceof Animal) // true
console.log(a instanceof rabbit) // Flase 



