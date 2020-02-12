/*----- constants -----*/
const cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ",
"hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09",
"c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06",
"s05","s04","s03","s02"];


/*----- app's state (variables) -----*/
let pile1down = [];
let pile1up= [];
let pile2down = [];
let pile2up = [];
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
playButton.addEventListener('click', onClick);



// /*----- functions -----*/
// function play() {
// console.log('working');
// }

function shuffle() {
    let idx = cards.length, temp, rndIdx;
    while (0 !== idx) {
    rndIdx = Math.floor(Math.random() * idx);
    idx -= 1;
    temp = cards[idx];
    cards[idx] = cards[rndIdx];
    cards[rndIdx] = temp;
    }
};

function dealCards() {
    //shuffle();
    if (cards.length) {
        for (let i = 0; i < 26; i++) {
        pile1distro = pile1Up.splice(0, 1);
        pile1cards.push(pile1distro[0]);
     }
        for (let i = 0; i < 26; i++) {
        pile2distro = pile2Up.splice(0, 1);
        pile2cards.push(pile2distro[0]);
    }



// function playCards() {
//     if (p1Cards.length > 0 && p2Cards.length > 0) {
//         p1Flipped = p1Cards.splice(0, 1);
//         p1flip.classList.replace('outline', p1Flipped);
//     
//     }
//     if (p2Cards.length > 0 && p2Cards.length > 0) {
//         p2Flipped = p2Cards.splice(0, 1);
//         p2flip.classList.replace('outline', p2Flipped);
//         
//     }
//     playButton.classList.add('hidden');
//     compareCards();
// };





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

