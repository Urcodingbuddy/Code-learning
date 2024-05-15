class Animal {
    constructor(name){
        this.name = name; 
        // Or // 
        // this.name = Animal.capitalize(name)
    }
    walk(){
        console.log("Animal " + this.name +  " Is walking")
        //  Or  // 
        //  console.log("Animal " + Animal.capitalize(this.name)  +  " Is walking") with removing Animal.capitalize from variable declaration
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }

}


j = new Animal(Animal.capitalize("Raju"));
j.walk()
// j.capitalize("Human") // You can't do this becouse this is a static method & not a function
  