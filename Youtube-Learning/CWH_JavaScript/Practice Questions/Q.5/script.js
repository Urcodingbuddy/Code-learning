// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create a deck of cards
function createDeck(symbols, pairs) {
    const deck = [];
    for (let i = 0; i < pairs; i++) {
        for (let j = 0; j < 2; j++) {
            const symbol = symbols[i];
            deck.push({ symbol, matched: false, flipped: false });
        }
    }
    return deck;
}

// Function to initialize the game
function initGame() {
    const symbols = ['🌟', '⚽', '🍕', '🎈', '🚀', '🐶']; // Array of symbols
    const pairs = symbols.length; // Number of pairs of symbols
    const deck = createDeck(symbols, pairs); // Create the deck of cards
    const shuffledDeck = shuffle([...deck]); // Shuffle the deck

    let attempts = 0; // Number of attempts
    let matchedPairs = 0; // Number of matched pairs

    // Function to check if the game is over
    function isGameOver() {
        return matchedPairs === pairs;
    }

    // Function to display the deck
    function displayDeck() {
        shuffledDeck.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.textContent = card.flipped || card.matched ? card.symbol : '🃏';
            cardElement.classList.add('card');
            cardElement.addEventListener('click', () => flipCard(index));
            document.getElementById('game-board').appendChild(cardElement);
        });
    }

    // Function to flip a card
    function flipCard(index) {
        const card = shuffledDeck[index];
        if (!card.flipped && !card.matched) {
            card.flipped = true;
            attempts++;
            renderGame();
            if (selectedCards.length === 2) {
                checkMatch();
            }
        }
    }

    // Function to check if selected cards match
    function checkMatch() {
        const [card1, card2] = selectedCards.map(index => shuffledDeck[index]);
        if (card1.symbol === card2.symbol) {
            card1.matched = true;
            card2.matched = true;
            matchedPairs++;
        } else {
            setTimeout(() => {
                card1.flipped = false;
                card2.flipped = false;
                renderGame();
            }, 1000);
        }
        selectedCards = [];
        renderGame();
        if (isGameOver()) {
            endGame();
        }
    }

    // Function to render the game
    function renderGame() {
        document.getElementById('game-board').innerHTML = '';
        displayDeck();
        document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    }

    // Function to end the game
    function endGame() {
        alert(`Congratulations! You completed the game in ${attempts} attempts.`);
    }

    let selectedCards = []; // Array to store the indices of selected cards

    // Start the game
    renderGame();
}

// Initialize the game when the DOM is loaded
// document.addEventListener('DOMContentLoaded', initGame);

initGame();