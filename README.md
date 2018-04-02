# Catch the Criminal

Catch the Criminal is an adventure game (loosely based on the 90's game "Where in the World is Carmen Sandiego"), that combines aspects of a "choose your own adventure format" and Trivia. The goal of the player is to track down the international jewel thief by clicking on cities and getting clues that lead them to each subsequent city, eventually leading to the criminal's final destination. When the player reaches the criminal's final destination, they win the game. The player is given $8,000 at the start of the game, and each flight will drain $1,000. If the player flys to too many incorrect destinations they will lose the game.

 Link to project:
 https://git.generalassemb.ly/pages/lmhale7/Haleproject-1/

# Technologies

My Landing page utilizes a form to initiate the game. The input submitted in the form is stored in a variable and is used on the following page.

I relied heavily on click events in my project which were all bundled together. Each click event triggered another, and appended various text and divs to the page. This control flow element was the most time consuming aspect of building the game.

I implemented a counter to keep track of the user's money. The decrementation of the counter occurs after the user clicks on any div with the class "tooltip."
