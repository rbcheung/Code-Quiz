var startBtn = document.querySelector("#start");
//console.log(startBtn);
var timer = document.querySelector("#time");
//console.log(Timer);
var questionsContainer = document.querySelector("#questions");
//console.log(questionsContainer);
var startScreen = document.querySelector("#start-screen");
//console.log(startScreen);
var questionElement = document.getElementById("question-title");
//console.log(questionElement);
var answerElement = document.querySelectorAll(".answers");
// console.log(answerElement);
var answerA = document.getElementById("A");
// console.log(answerA);
var answerB = document.getElementById("B");
// console.log(answerB);
var answerC = document.getElementById("C");
// console.log(answerC);
var time = document.getElementById("time");
//console.log(time);
var feedback = document.getElementById("feedback")
//console.log("feedback")
var initials = document.getElementById("initials")
//console.log("feedback")

var q;
var runningQuestionIndex = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;

// Questions Array
var questions = [
    {
        question: "Javascript is an _______ language?",
        correct: "Object-Orientated",
        answers: [
            { choiceA: "Object-Orientated"},
            { choiceB: "Object-Based"},
            { choiceC: "Procedural"},
        ]

    },
    {
        question: "Which of the following is not a framework?",
        correct: "jQuery",
        answers: [
            { choiceA: "jQuery"},
            { choiceB: "Cocoa JS"},
            { choiceC: " JavaScript"}
        ]

    },
    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        correct: "onerror",
        answers: [
            { choiceA: "onclick"},
            { choiceB: "onerror"},
            { choiceC: "onmessage"},
        ]

    },
]


// Function to setup Countdown. created variable called secondsLeft and set it equal to 60(seconds)
// used setTime function. second argument passed in is 1000 aka 1 second.
// created another variable called timeInterval and set it equal to a new function called setInterval
// secondsLeft-- so that when this function is executed it will subtract 1 from 60 every second.
// created another variable called time which is equal to document.getElementById("time");
// time.textContent = secondsleft changes the text from the time variable to equal the secondsLeft variable.
// if secondsLeft reaches 0, clear interval function is called and timerinterval is passed in so that it clears the countdown.
function setTime() {
        timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

function quizEnd() {
    
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = score;
    questionsContainer.setAttribute("class", "hide");
    clearInterval(timerInterval);
    
}

// When start button is clicked. startGame function is Run.
startBtn.addEventListener("click", startGame)

// when function is run. startbutton is hidden, questions container is shown and start screen is also hidden.
// called show question function so that when the start button is clicked the questions will be displayed
// called the setTime function so that when the start button is clicked the countdown from 60 seconds will begin.
function startGame() {
    startBtn.classList.add("hide");
    questionsContainer.classList.remove("hide");
    startScreen.classList.add("hide");

    showQuestion();
    setTime();
}

function showQuestion() {
     console.log(runningQuestionIndex)
    if (runningQuestionIndex === 3) {
        quizEnd();
    }
    else {
        q = questions[runningQuestionIndex];
        // questionElement.innerText = questions[0].question1;
        questionElement.innerText = q.question
        // console.log(q.question)
        answerA.innerText = q.answers[0].choiceA;
        // console.log(q.answers[0]);
        answerB.innerText = q.answers[1].choiceB;
        // console.log(q.answers[1]);
        answerC.innerText = q.answers[2].choiceC;
        // console.log(q.answers[2]);
    } 
}

answerA.addEventListener('click', function(){
    if (q.correct === answerA.textContent) {
        console.log(q.correct)
        //console.log(answerA.textContent)
        score++;
        feedback.style.display = "block"
        feedback.textContent = "Correct!"
        runningQuestionIndex++;
        showQuestion();
   }
   else {
    feedback.style.display = "block"
    feedback.textContent = "Incorrect!"
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion();

   }

})
answerB.addEventListener('click', function(){
    if (q.correct === answerB.textContent) {
        console.log(q.correct)
        //console.log(answerB.textContent)
        score++;
        feedback.style.display = "block"
        feedback.textContent = "Correct!"
        runningQuestionIndex++;
        showQuestion();
   }
   else {
    feedback.style.display = "block"
    feedback.textContent = "Incorrect!"
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion()

   }

})
answerC.addEventListener('click', function(){
    feedback.style.display = "block"
    feedback.textContent = "Incorrect!"
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion();
})































// For loop to loop over the answerElement variable as it is a node list and acts like an array.
// Added Event Listener to listen for a click on the answerElement variable.
// If event target clicked == answerA, add score++
// If the event target clicked == answerA, then create new paragraph and append it to the body.
// Then I changed the content of the correctP variable to say "You have chosen the correct answer!!!"
// else any other button is clicked, I do the same thing but say "You have chosen the wrong answer!!!" instead.
// else event target clicked == answerA, runningQuestionIndex++ and shoqQuestion to get new questions.
// else event target clicked == answerA, set the text of the time variable to equal secondsLeft -= 5 seconds.

//function checkAnswer() {

    
    // for (i = 0; i < answerElement.length; i++) {
    //     console.log(answerElement[i]);
    //     answerElement[i].addEventListener("click", function (e) {
    //         if (e.target.matches("#A")) {
    //             score++;
    //             feedback.removeAttribute("class");
    //             feedback.textContent = "Correct!";
    //             runningQuestionIndex++;
    //             showQuestion();
    //         }
    //         else {
    //             feedback.removeAttribute("class");
    //             feedback.textContent = "Incorrect!";
    //             time.textContent = secondsLeft -= 5;
    //             showQuestion();
    //         }

    //     })
    // }

//}

