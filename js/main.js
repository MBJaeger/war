/*----- constants -----*/
var cards;


/*----- app's state (variables) -----*/
//These connect code with JS only. Make words plural when applicable. 
var deck1Values;
var flipped1Value;
var deck2Values;
var flipped2Value;
var deck1Dealt = [];
var deck2Dealt = [];
// var score1 = [];
// var score2 = [];



/*----- cached element references -----*///connect with the DOM
var deck1 = document.getElementById('deck1');
var flipped1 = document.getElementById('flipped1');
var deck2 = document.getElementById('deck2');
var flipped2 = document.getElementById('flipped2');
var playBtn = document.getElementById('playBtn');
//const playReset?? - I could use play to play and reset when game is over

/*----- event listeners -----*/
playBtn.addEventListener('click', play);


// /*----- functions -----*/
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
}


function shuffle() {
    let idx = cards.length, temp, rndIdx;
    while (0 !== idx) {
     rndIdx = Math.floor(Math.random()*idx);
     idx -= 1;
     temp = cards[idx];
     cards[idx] = cards [rndIdx];
     cards[rndIdx] = temp;   
    }
};

function deal() {
    //shuffle();
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
    flipped1.classList.add(cardPicked)
}   
 


function render() { 
    if (deck1Values.length === 0) {deck1.classList.add('outline')}
    if (deck2Values.length === 0) {deck2.classList.add('outline')}
    if (deck1Values.length === 0) {deck1.classList.remove('back-blue')}
    if (deck2Values.length === 0) {deck2.classList.remove('back-blue')}
    if (deck1Values.length !== 0) {deck1.classList.add('back-blue')}
    if (deck2Values.length !== 0) {deck2.classList.add('back-blue')}
    if (deck1Values.length !== 0) {deck1.classList.remove('outline')}
    if (deck2Values.length !== 0) {deck2.classList.remove('outline')}
};


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
init();
