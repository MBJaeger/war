# war
Burpee WAR - A Card game where the loser wins in fitness :)

This game is inspired by the conventional War Game, where there are two players, one full deck of cards and chances to win or lose, depending on who got the highest card on top of their covered deck. 

With our Burpee War version of the game, our goal is to create a fun and interactive way to challenge players to improve their physical strength and move throughout the day. This our favorite part of the game: The more you lose, the stronger you become! You’ll have contradicting feelings when playing this game, we get it, but that’s part of the fun!
 
 ###GAME RULES:
 1) You play to WIN, but we are rooting for you to loose! 
 2) Hit "RESET" to start or restart the game.
 3) Hit "PLAY" to show a new card.
 4) On each hand played, three burpees are assigned to the player with the lowest card value, zero to the player with the highest card value. 
 5) When a player reaches 15 burpees the game ENDS.
 6) Both players get to do the amount of burpees on their scoreboard (the loser will always have 15).
 
 Our recommendation:
 Play this game daily! It will help you get your body moving, become stronger and release happy hormones!

Have fun and we hope you lose! 

# war

###Technologies Used

Link to Game Page



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

