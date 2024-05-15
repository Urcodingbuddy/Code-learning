class User{

    constructor(name){
    this.name = name;  
}
    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Write your full name Please")
            return;
        }
        this._name = value;
    }
}

let user = new User(prompt("Enter your Name"));
console.log(user.name);
alert(user.name);

user.name = "John wick"
console.log(user.name);