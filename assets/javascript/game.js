// Counter varables
var win = 0;
var lose = 0;
var Guessleft = 9;

// Place holder for what user will guess
var userGuess = [];

// General function which makes random letter
function randomLetter() {
    return ('abcdefghijklmnopqrstuvwxyz').split('')[Math.floor(Math.random() * 26) + 1]
};
var compGuess = randomLetter();
// When user press any key game will run
document.onkeyup = function (event) {
    
    Guessleft--;
    userGuess.push(event.key);
    document.getElementById("guesses").innerHTML = ` ${userGuess.join()}`;
    document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;

    // Loging the results of the game
    console.log(`computer: ${compGuess}, user: ${userGuess}`);

    // Winning path 
    if (userGuess[(userGuess.length) - 1] === compGuess) {
        win++;
        alert(`you win this round!!! both of us thought of ${compGuess}`)

        // Keep the score and reset the game
        Guessleft = 9
        userGuess = [];
        document.getElementById("win").innerHTML = ` ${win}`;
        document.getElementById("guesses").innerHTML = "";
        document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;
        compGuess = randomLetter();

        // losing path
    } else if (userGuess[(userGuess.length) - 1] !== compGuess && Guessleft === 0) {
        lose++;
        alert(`you lost this round!!! it's ok keep going ;)`);

        // Keep the score and reset the game
        Guessleft = 9;
        userGuess = [];
        document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;
        document.getElementById("guesses").innerHTML = "";
        document.getElementById("lose").innerHTML = ` ${lose}`;
        compGuess = randomLetter();
    }
}
