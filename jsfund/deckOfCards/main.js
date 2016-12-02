//create deck of cards constructor
//properties include:
//The Deck should contain the 52 standard cards
const cardNumber = [A,K,Q,J,10,9,8,7,6,5,4,3,2];
const suit = [H,S,C,D,J];

function cardConstructor(cardNumber, suit) {
    this.cardNumber = cardNumber;
    this.suit = suit;
    this.name = this.cardNumber + this.suit;
}

const deck = [AH,AS,AC,AD,KH,KS,KC,KD,QH,QS,QC,QD,];


//deck methods include:
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
    // Deal should return the card that was dealt and remove it from the deck
