const correctNumber = document.getElementById('correct-num');
const userInputEl = document.getElementById('num');
const guessBtn = document.getElementById('guess-btn');
const messageEl = document.getElementById('message');
const scoreEl = document.getElementById('score');
const totalScoreEl = document.getElementById('total-score'); 
const restartBtn = document.getElementById('restart-btn')

//pseudocode
//--generate a random number
//--guessbtn-onclick----1->get and validate the user input
                        //1a- check whether score === 0
                        //-> game over
                     //-2->compare the user input vs random number
                     //-3->based on results display mssgs.


//global variables
let score = 10;
let totalScore = 0;

// getting a random number

const getRandomNumber = function(){
    return Math.trunc(Math.random() * 100 + 1);
};

const randomNumber = getRandomNumber();

// guess btn event
guessBtn.addEventListener('click' , function(){
    //getting user input
    const userInput = Number(userInputEl.value);
    // validating user input
    if(userInput > 0 && userInput <= 100){
        //checking scores
        if(score > 0 ){
            //comparing user input
            if(userInput === randomNumber){
                //updation
                document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/fb/4b/f7/fb4bf78a5bc230e2b1f35324982718a7.gif')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
                //change the high score
                totalScoreEl.innerText = score;
                messageEl.innerText = '🥳 You guessed RIGHT';
                correctNumber.innerText = randomNumber;
                correctNumber.style.backgroundColor = '#000';    
            }else if(userInput > randomNumber){
                messageEl.innerText = '🤯 You guessed HIGH';
                score -= 1;
                //change the score
                scoreEl.innerText = score;
            }else if(userInput < randomNumber){
                messageEl.innerText = '😞 You guessed LOW';
                score -= 1;
                //change the score
                scoreEl.innerText = score;
            }
        }else{
            document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/903590/screenshots/6438311/rouille_title-anim.gif')";
            document.body.style.backgroundRepeat = "no-repeat";
            // document.body.style.backgroundSize = "cover";
            document.body.style.backgroundSize = "100% 110%"
            messageEl.innerText = '☠️ GAME OVER';
            //change the score
            scoreEl.innerText = score;
        }
    }else{
        messageEl.innerText = '🤔 Enter a valid input';
    }
});

//restart button event

restartBtn.addEventListener('click' , function(){
//reset to starting stage
    document.body.style.backgroundImage ='none';
    document.body.style.backgroundColor ='#1F2833';
    messageEl.innerText = 'Start guessing.....';
    correctNumber.innerText = '?';
    correctNumber.style.backgroundColor = '#fff';
    userInputEl.value = '';

    // change score
    score = 10;
    // totalScore = 0;
    scoreEl.innerText = score;
    totalScoreEl.innerText = totalScore;
});



