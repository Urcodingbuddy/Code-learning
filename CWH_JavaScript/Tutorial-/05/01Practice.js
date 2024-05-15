// Chapter - 01, Q-1

let a = "ansh"
let b = " "
let c = 5
console.log(a + b + c)
////////////////////////////////////////


//  Chapter 1, Q-2

console.log(typeof (a+b+c))


/////////////////////////////////////////

//  Chapter 1, Q-3

const d = {
    name: "Ansh",
    section: 1,
    students: 1,
    isprinciple: false,
}    
// d = "Ansh" its can not be done (once it is decleared under const)

////////////////////////////////////////


//   Chapter 1, Q-4

d['Friend'] = "Shriyanshu"
d['Friend2'] = "muskan"
d['Brother'] = "Nihal"
d['wife'] = "Ridhima"
console.log(d)


///////////////////////////////////////

//   Chapter 1, Q-5

const dict={
        appreciate: "recognize the full worth of.",

        ataraxia: "A state of freedom from emotional disturbance and anxiety",

        yakka: "work, especially hard work"
}
//  Two types of accessing const variable
console.log(dict.yakka)
console.log(dict['yakka'])