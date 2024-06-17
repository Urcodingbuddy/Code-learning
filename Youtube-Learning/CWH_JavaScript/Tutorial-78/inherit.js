class Animal {
    constructor(name, color, friend){
        this.name = name;
        this.color = color;
        this.friend = friend;
    }
    run(){
        console.log(this.name + "is Running..., And hidding his Color " +  this.color);
    }
    shout(){
        console.log( this.name + " is Shouting on his friend " + this.friend);
    }
}
class Monkey extends Animal{
    eatbanana(){
        console.log( "Now the "+this.name + "is Eating Banana peacfully after killing his friend " + this.friend);
    }
    jumps(){
        console.log(this.name + " is a monkey and jumpiing over the trees while plaayig with his friend " + this.friend);
    }
}

let ani = new Animal("Saifu", "black")
let mon = new Monkey("chimpu", "orange", "saifu")
let mon2 = new Monkey("jaggy", "blue", "Dholu-bholu")

mon.shout();
ani.run();
mon.eatbanana();
mon2.jumps();
