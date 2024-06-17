alert("Welcome to word Guessing Game!");
let words = ["Engine", "Food", "Bros", "Limited", "Hub", "Crazy", "Amazing", "Fire"];
let wordindex = Math.floor(Math.random() * words.length)
let randword = words[wordindex].toUpperCase();
let displayword = "_".repeat(randword.length).split('');
let maxIncorrectguessing = 6;
let incorrectguess = 0;
let guessedletters = [];

while (displayword.join('') !== randword && incorrectguess < maxIncorrectguessing){
    alert(displayword.join(' '))
    let guess = prompt("Guess A letter").toUpperCase();
    
    if (guessedletters.includes(guess)){
        alert("You have already guessed this letter")
        continue;
    }

    guessedletters.push(guess);
    if(randword.includes(guess)){
        for(let i = 0; i < randword.length; i++){
            if(randword[i] === guess){
                displayword[i] = guess;
                displayword[i] = guess;
            }
        }
    }else{
        incorrectguess++;
        alert(`Incorrect ! You have ${maxIncorrectguessing-incorrectguess} Guesses are left`)
    }
    
}

if (displayword.join('')=== randword){
    alert(`Congratulations! You guessed the word : ${randword}`)
}
else{
    alert(`Sorry! Run out of Guesses, You lost the word : ${randword}`)
}

