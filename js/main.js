/*----- constants -----*/
const cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ",
"hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09",
"c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06",
"s05","s04","s03","s02"];


/*----- app's state (variables) -----*/
let pile1cards = [];
let pile1flipped= [];
let pile2cards = [];
let pile2flipped = [];
let winHand;
// var cardUp = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
// var suits = ["diamons", "hearts", "spades", "clubs"];
//let winHand;
//var playButton = document.querySelector('btnPlay');

/*----- cached element references -----*/
const pile1down = document.getElementById('pile1down')
const pile1up = document.getElementById('pile1up')
const pile2down = document.getElementById('pile2down')
const pile2up = document.getElementById('pile2up')
const playbtn = document.getElementById('playbtn')
//const playReset?? - I could use play to play and reset when game is over


/*----- event listeners -----*/
playBtn.addEventListener('click', play);

// /*----- functions -----*/
<<<<<<< HEAD
// function play() {
// console.log('working');
// }
=======
function init() {
    cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ",
    "hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09",
    "c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06",
    "s05","s04","s03","s02"];
    deck1Values = [];
    deck2Values = [];
    shuffle();
    deal();
    render();
};
>>>>>>> master

function shuffle() {
    let idx = cards.length, temp, rndIdx;
    while (0 !== idx) {
<<<<<<< HEAD
    rndIdx = Math.floor(Math.random() * idx);
    idx -= 1;
    temp = cards[idx];
    cards[idx] = cards[rndIdx];
    cards[rndIdx] = temp;
    }
};

function deal() {
    //shuffle();
    if (cards.length) {
        for (let i = 0; i < 26; i++) {
        pile1distro = pile1Up.splice(0, 1);
        pile1cards.push(pile1distro[0]);
     }
        for (let i = 0; i < 26; i++) {
        pile2distro = pile2Up.splice(0, 1);
        pile2cards.push(pile2distro[0]);
=======
     rndIdx = Math.floor(Math.random()*idx);
     idx -= 1;
     temp = cards[idx];
     cards[idx] = cards [rndIdx];
     cards[rndIdx] = temp;   
>>>>>>> master
    }
};

<<<<<<< HEAD


function play() {
    if (pile1cards.length > 0 && pile2cards.length > 0) {
        pile1flipped = pile1cards.splice(0, 1);
        pile1up.classList.replace('outline', pile1flipped);
      }
    if (pile2cards.length > 0 && pile2cards.length > 0) {
        pile2flipped = pile2cards.splice(0, 1);
        pile2flipped.classList.replace('outline', pile2flipped);    
  }
};
//compareCards();


function winnerCheck() {
   //turning this one to a point system, where game stops when player reaches 15 points. 
    if (pile1cards.length === 0) {
        message.textContent = "Player Two Wins!"

    } else if (pile2cards.length === 0) {
        message.textContent = "Player One Wins!"
    }
};

function compareCards() {
    if (lookUp(pile1flipped) > lookUp(pile2flipped)) {
        pile1cards.push(`${pile1flipped}`);
        pile1cards.push(`${pile2flipped}`);
        pile2cards.splice(pile2cards.length, 1);
        winHand = 1;
    } else if (lookUp(pile1flipped) < lookUp(pile2flipped)) {
        pile2cards.push(`${pile2flipped}`);
        pile2cards.push(`${pile1flipped}`);
        pile1cards.splice(pile1cards.length, 1);
        winHand = 2;
    } else {
        war();
    }
    winnerCheck();
};


// function flipCard() {
//     if (cards.length) {
//     let rndIdx = Math.floor(Math.random() * cards.length) 
//     cardFlipped = cards.splice(rndIdx, 1);
//     flippedCards.push(cardFlipped[0]); 
//     }
//     render(); 
// }



// function render() {
//     //removedCard = cardFlipped;
//     if (flippedCards.length === 1){
//     pileA2.classList.replace('outline', cardFlipped)
//     } else {
//         pileA2.classList.replace(removedCard, cardFlipped[0]);
//     }
//     if (cards.length === 0){
//         pileA1.classList.replace('back', 'outline')
//     }
//     if (cards.length === 26) {
//         pileA1.classList.remove('shadow');
//         pileB1.classList.add('shadow');
//     }
// };



//on StartClick 
//--Shuffle cards, 26 cards get assigned to each player.
//on PlayClick - gets highlighted right after cards have been assigned.
    //card on top of each deck moves to "faceUp" space. 
    //recognize highest value from "faceUp" cards and origin player and move both cards to botton of "faceDown" pile
    //When both 'faceUp' cards have equal value, WAR STARTS
            //BIG War message pop-up
            //Three face down + One face up card gets moved to the "War" space
            //Player with highest value on "faceUp" card, wins all cards.

    //Every time a player looses a hand, 3 burpees are asigned to their count.         
    //Game ends when one player reaches 15 burpees. 
    //Message: "Time for burpees!"" Pops up      


//GAME DEVELOPMENT LIST
//1 create board - two positions per player, two positions for war

//How to structure code
// 1) Create players
// 2) Create Board
//3) Create Card Deck
//4) Each Player has 



=======
function deal() {
    if (cards.length === 52) {
    for (i=1; i<=26; i++) {
    deck1Dealt = cards.splice(0, 1);
    deck1Values.push(deck1Dealt[0]);
    }
    for (let i = 0; i < 26; i++) {
    deck2Dealt = cards.splice(0, 1);
    deck2Values.push(deck2Dealt[0]);  
        }
    }
};

function play() {
    cardPicked = deck1Values.pop();
    compare1 = lookUp(cardPicked);
    flipped1.className = 'card large'
    flipped1.classList.add(cardPicked)
    cardPicked = deck2Values.pop();
    compare2 = lookUp(cardPicked);
    flipped2.className = 'card large'
    flipped2.classList.add(cardPicked);
    
getScore();
render();
}; 

function getScore(){
    if (compare1 > compare2) {
    p2Score += 3; 
    } else {
    p1Score += 3; 
}
};

function render() { 
    if (deck1Values.length === 0) {deck1.classList.add('outline')}
    if (deck2Values.length === 0) {deck2.classList.add('outline')}
    if (deck1Values.length === 0) {deck1.classList.remove('back-blue')}
    if (deck2Values.length === 0) {deck2.classList.remove('back-blue')}
    if (deck1Values.length !== 0) {deck1.classList.add('back-blue')}
    if (deck2Values.length !== 0) {deck2.classList.add('back-blue')}
    if (deck1Values.length !== 0) {deck1.classList.remove('outline')}
    if (deck2Values.length !== 0) {deck2.classList.remove('outline')}
    score1.textContent = p1Score;
    score2.textContent = p2Score;
    if (p1Score === 15) {
    message.textContent = "Athlete 1 Wins" 
    }
    if (p2Score === 15) {
    message.textContent = "Athlete 2 Wins" 
    }
};

>>>>>>> master
function lookUp(x) {
    if (`${x}` === 'dA' || `${x}` === 'cA' || `${x}` === 'sA' || `${x}` === 'hA') {
        return 14;
    } else if (`${x}` === 'dK' || `${x}` === 'cK' || `${x}` === 'sK' || `${x}` === 'hK') {
        return 13;
    } else if (`${x}` === 'dQ' || `${x}` === 'cQ' || `${x}` === 'sQ' || `${x}` === 'hQ') {
        return 12;
    } else if (`${x}` === 'dJ' || `${x}` === 'cJ' || `${x}` === 'sJ' || `${x}` === 'hJ') {
        return 11;
    } else if (`${x}` === 'd10' || `${x}` === 'c10' || `${x}` === 's10' || `${x}` === 'h10') {
        return 10;
    } else if (`${x}` === 'd09' || `${x}` === 'c09' || `${x}` === 's09' || `${x}` === 'h09') {
        return 9;
    } else if (`${x}` === 'd08' || `${x}` === 'c08' || `${x}` === 's08' || `${x}` === 'h08') {
        return 8;
    } else if (`${x}` === 'd07' || `${x}` === 'c07' || `${x}` === 's07' || `${x}` === 'h07') {
        return 7;
    } else if (`${x}` === 'd06' || `${x}` === 'c06' || `${x}` === 's06' || `${x}` === 'h06') {
        return 6;
    } else if (`${x}` === 'd05' || `${x}` === 'c05' || `${x}` === 's05' || `${x}` === 'h05') {
        return 5;
    } else if (`${x}` === 'd04' || `${x}` === 'c04' || `${x}` === 's04' || `${x}` === 'h04') {
        return 4;
    } else if (`${x}` === 'd03' || `${x}` === 'c03' || `${x}` === 's03' || `${x}` === 'h03') {
        return 3;
    } else {
        return 2;
    }
};
<<<<<<< HEAD

=======
init();
>>>>>>> master
