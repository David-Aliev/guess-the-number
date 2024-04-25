'use strict';


console.log(document.querySelector('.guess-message').textContent);


// музикаа
/*

let myBtn = document.querySelector('.check');
let sound = document.querySelector('.sound');
myBtn.addEventListener('click',function(){
    if(sound.paused) {
        sound.currentTime = 0;
        sound.play();
        myBtn.textContent = "pause sound"
    } else {
        sound.pause();
        myBtn.textContent = 'play sound'
    }
})
*/
















// code





const displayGuessMessage = function(message) {
    document.querySelector('.guess-message').textContent = message;
}



let secretNumber = Math.trunc(Math.random() * 20) + 1; // між 1 і 20
let score = 20;
let highestScore = 0;
console.log(secretNumber);




const eventHandler = function () {
    console.log(document.querySelector('.number-input').value);
}




document.querySelector('.check')
.addEventListener('click',function(){
   const guessingNumber = Number(document.querySelector('.number-input').value);
   console.log(guessingNumber, typeof guessingNumber);

   if(!guessingNumber) {
    // document.querySelector('.guess-message')
    // .textContent = "input some number"
    displayGuessMessage("введи число");

    // player WON
   } else if (guessingNumber === secretNumber) {
    // document.querySelector('.guess-message')
    // .textContent = "харош,правильно";
    displayGuessMessage("харош правильно");
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "rgb(37, 146, 33)";
    document.querySelector('.question').style.width = "50rem";
    if(score > highestScore) {
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
    }
    // number from input is wrong
   } else if(guessingNumber !== secretNumber){
        if(score > 1) {
            // document.querySelector('.guess-message')
            // .textContent = guessingNumber > secretNumber ? "занадто багато" : "занадто мало";
            displayGuessMessage(guessingNumber > secretNumber ? "занадто багато" : "занадто мало")
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            // document.querySelector('.guess-message')
            // .textContent = "game over";
            displayGuessMessage("game over");
            document.querySelector('.score').textContent = 0; 
        } 
   }
});
   // to high
   /*
   else if(guessingNumber > secretNumber) {
        if(score > 1) {
            document.querySelector('.guess-message')
            .textContent = "занадто велике"; 
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.guess-message')
            .textContent = "game over";
            document.querySelector('.score').textContent = 0; 
        } 

    // to low
   } else if(guessingNumber < secretNumber) {
        if(score > 1) {
            document.querySelector('.guess-message')
            .textContent = "занадто маленьке";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message')
            .textContent = "game over";
            document.querySelector('.score').textContent = 0; 
            
        }  
   }    
});
*/


const again = document.querySelector('.again');
again.addEventListener('click',function(){
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // document.querySelector('.guess-message')
    // .textContent = "починай вгадувати сука.";
    displayGuessMessage("почни вгадувати");

    document.querySelector('body').style.backgroundColor = "#151111";

    document.querySelector('.score').textContent = score; 

    document.querySelector('.number-input').value = '';

    document.querySelector('.question').textContent = "???";

})


