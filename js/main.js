/*----- constants -----*/
cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ",
"hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09",
"c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06",
"s05","s04","s03","s02"];

const Athlete1 = document.getElementsByClassName('athleteOne');
const Athlete2 = document.getElementsByClassName('athleteTwo');
const rBtn = document.getElementById('buttonReset');
const pBtn = document.getElementById('buttonPlay');

/*----- app's state (variables) -----*/



/*----- cached element references -----*/



/*----- event listeners -----*/




/*----- functions -----*/
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





