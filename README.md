# Project-1

BlackJack 

Game Overview
-the player will have a starting amount of $$

-player will then place a bet with the click of a button, after choosing their bet amount with the click of buttons respective to their chips(four different chips with four different values)(this will basically be a start button)

-this will draw two random cards from a deck of cards array 

-this array will contain the following characteristics
        1-starting out as an empty array
        2-the array will be filled on a shuffle function, 
        3-the deck of cards array will be associated with an API, therefore this will be an array of objects
        
        
-the ways this array will be manipulated:

        1-when the player starts the game, the two cards drawn from the array will be removed from the deck with the .pop() method
        2-the dealer will also automatically draw two cards, which will be removed from the deck with a similar function to player turn
        3-ALL cards that are drawn will be determined by Math.random(Math.floor) methods, and the index of each card pulled will be calculated, and removed            from the deck with a for-loop(s), indicating a value of 'i' that will:
        
                1-reflect the number value of the card(that will be used to calculate the sum of the hand, including a conditional for ACE being 1 or 10)
                2-reflect which of the four suits the card belongs to
-after the initial drawing of cards, the player will have the options to, when clicked:

                1-"hit":draw a new card---that will automatically add that cards 'i' number value to the sum of the players hand, and display "bust" if sum                   is > 21, and will restart the game, giving dealer the players bet.
                2- "stand": decide to let their current sum of hand compare to the dealers sum of hand (both of which will be empty arrays, filled with the                           .push() method upon draw. whoevers sum is <= 21 and > the others hand, will win the chips on the table.
 -upon player wins/losses, the value of the respective variable will be increased by 1.
 
 -when the player wins, the sum of the chips they win will be organized into their respective chip color, automatically upgrading chip color if it's value            allows.
 
 The following is my wireframe so far:
 <img width="1015" alt="Screen Shot 2022-09-17 at 12 56 26 PM" src="https://user-images.githubusercontent.com/68655342/190944630-37c4b3a2-9681-4c1b-9bd9-5bdef16a5de3.png">


 The following is how the different Elements of the game will interact 
 
 
  <img width="1046" alt="Screen Shot 2022-09-18 at 11 50 48 PM" src="https://user-images.githubusercontent.com/68655342/190947135-6ad810ec-66a8-497d-95d2-e50ee5d23a6a.png">
 
 
