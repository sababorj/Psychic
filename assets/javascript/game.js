// make computer guess a random letter 

// general varables
var win = 0;
var lose = 0;
var Guessleft = 9;
var userGuess = [];

// user press the key 
document.onkeyup = function (event) {
    var compGuess = ('abcdefghijklmnopqrstuvwxyz').split('')[Math.floor(Math.random() * 26) + 1];
    Guessleft--;
    userGuess.push(event.key);
    document.getElementById("guesses").innerHTML = ` ${userGuess.join()}`;
    document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;
    // break point number 1
    console.log(`computer: ${compGuess}, user: ${userGuess}`);
    // winning path 
        if (userGuess[(userGuess.length)-1] === compGuess) {
            win++;
            alert(`you win this round!!! both of us thought of ${compGuess}`)
            Guessleft = 9
            userGuess = [];
            document.getElementById("win").innerHTML = ` ${win}`;
            document.getElementById("guesses").innerHTML = "";
            document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;
        } else if (userGuess[(userGuess.length)-1] !== compGuess && Guessleft === 0) {
            lose++;
            alert(`you lost this round!!! it's ok keep going ;)`);
            Guessleft = 9;
            userGuess = [];
            document.getElementById("Gleft").innerHTML = ` ${Guessleft}`;
            document.getElementById("guesses").innerHTML = "";
            document.getElementById("lose").innerHTML = ` ${lose}`;
        }
    }
