class Person{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

const person = new Person('john doe')
console.log(person.name)
person._name = "jane de"
console.log(person.name)
console.log(person._name)