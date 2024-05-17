// Q.3

class Human{
    constructor(name, favfood){
        this.name = name;
        this.favfood = favfood;
    }
    walk(){
        console.log(this.name + "Named human is walking");
    }
}
class student extends Human{
    walk(){
        console.log(this.name + " Named student is walking");
    }
}

let o =  new student("Shree","bhindi");
o.walk()
// Q.4

console.log(o instanceof Human)
