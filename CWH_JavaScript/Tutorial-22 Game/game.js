// let random = Math.random()*2;

// let input = prompt("Guess a Number")
// if(input==random){
//     alert("You guessed it right")
// }
// else if(input>random){
//     alert("You guessed it too high")
// }

// else if(input<random){
//     alert("You guessed it too low")
// }


{
    // guess = prompt("Guess a number between 1 to 100");

    // do{
    //     if(guess=number){
    //         guess = prompt("Your guess is too low","Guess again");
    //         guess =Number.parseInt(guess);
    //         chances++;
    //     }
    //     else if(guess>number){
    //         guess = prompt("Your guess is too high","Guess again");
    //         guess =Number.parseInt(guess);
    //         chances++;
    //     }
    //     else{
    //         alert("You guessed it right", "You Won the Game");
    //         break;
    //     }
    // }while(guess!=number);
}
////////////////////////////////////


///////////////////////////////////

// let num = Math.round(Math.random()*100);
// console.log(num)
// let a ;
// let score = 100 ; 

// while (a!=num) {
//     a = prompt('enter your number')
//     score = score-1
//     if(a==num){
//         confirm('congratulation your number is correct')
//         confirm(`your ans is ${num} and your score is ${100 - score}`)
//     }

//     else if((a>num)&&(a<100)){
//         confirm('your number is greater than actual number')
//     }

//     else if((a<num)&&(a>0)){
//         confirm('your number is smaller than actual number')
//     }
//     else {
//         confirm('enter number beetween 1 to 100 ')
//      }

//  }

//////////////////////////////////////////////////
//  #Best Working code   




/////////////////////////////////////////////////////////////////////        
//  #Best Working code from Chat GPT 

let number = Math.floor(Math.random() * 100) + 1
let guess;
let score = 100;


while (guess !== number) {
    guess = prompt("Guess a number between 1 to 100")
    guess = Number.parseInt(guess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 to 100")
        score--;
    }

    else if (guess === number) {
        alert(`You guessed it right`,`Your guess was ${guess} and You scored ${100-score} points`)
    }
    else if (guess > number) {
        confirm("You guessed Higher than Actual Number")
    }
    else {
        confirm("You guess is lower than Actual Number")
    }

}