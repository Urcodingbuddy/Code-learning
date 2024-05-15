// let obj = {
//     a: 1,
//     b: 2,
//     c: "Ansh",
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let dog = {
//     barks: true
// }

// dog.__proto__  = animal;


// class animal {
//     constructor(name) {
//         this.name = name
//        console.log('Object is Created...');
//     }
//     jumps() {
//        console.log('anmimal kudta hai , Kangaru');
//     }
//     eats(){
//         console.log("Animal thusta hai, Saifu")
//     }
// }

// class lion extends animal{
//     constructor(name){
//         super(name);
//         console.log('Object is Created... and Name is sheru');
//     }
//     eats(){
//         super.eats();
//         console.log("Kha chuk hun Roar...")
//     }

// }

// let a = new animal("bunny");
// console.log(a);


// let l = new lion("Sheru")
// console.log(l);

// let obj = {
//     a:1,
//     b:"Ansh",

// }
// console.log(obj)


// let animal ={
//     eats: true
// }
// let  rabbit  = {
//     jumps: true
// }

// rabbit.__proto__ = animal;

class animal{
    constructor(name){
        this.name = name;
        console.log('Object is Created...');
    }
    eats(){
        super.eats();
        console.log("Animal Is eating.., animals are not eatable...");
    }
    jumps(){
        console.log("Animal is jumping...");
    }
}

class lion extends animal{
    constructor(name){
        super(name);
        

    }
    roar(){

    }
}

let a = new animal("Monkey");
console.log(a)
let l = new lion("Shera") 
console.log(l)
