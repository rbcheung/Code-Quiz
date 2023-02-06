
// All variables 

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

var q;
var runningQuestionIndex = 0;
var score = 0;
var secondsLeft = 75;
var timerInterval;
var finalScore;

// Questions Array
var questions = [
    {
        question: "Javascript is an _______ language?",
        correct: "1.Object-Orientated",
        answers: [
            { choiceA: "1.Object-Orientated"},
            { choiceB: "2.Object-Based"},
            { choiceC: "3.Procedural"},
        ]

    },
    {
        question: "Which of the following is not a framework?",
        correct: "1.jQuery",
        answers: [
            { choiceA: "1.jQuery"},
            { choiceB: "2.Cocoa JS"},
            { choiceC: "3.JavaScript"}
        ]

    },
    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        correct: "2.onerror",
        answers: [
            { choiceA: "1.onclick"},
            { choiceB: "2.onerror"},
            { choiceC: "3.onmessage"},
        ]

    },
]


// Function to setup Countdown. created variable called secondsLeft and set it equal to 75(seconds)
// Used setTime function. second argument passed in is 1000 aka 1 second.
// created another variable called timeInterval and set it equal to a new function called setInterval
// secondsLeft-- so that when this function is executed it will subtract 1 from 75 every second.
// created another variable called time which is equal to document.getElementById("time");
// time.textContent = secondsleft changes the text from the time variable to equal the secondsLeft variable.
// if secondsLeft reaches 0, clear interval function is called and timerinterval is passed in so that it clears the countdown.
function setTime() {
        timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }

    }, 1000);
}
// New function created to end the quiz.
function quizEnd() {
    
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
    finalScore = document.getElementById("final-score");
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

// If running Question index equals 3 which is the number of questions. quizEnd function is called and the quiz will end.
function showQuestion() {
   
    if (runningQuestionIndex === 3) {
        quizEnd();
    }
    else {
        q = questions[runningQuestionIndex];
        // questionElement.innerText = questions[0].question1;
        questionElement.innerText = q.question;
        // console.log(q.question)
        answerA.innerText = q.answers[0].choiceA;
        // console.log(q.answers[0]);
        answerB.innerText = q.answers[1].choiceB;
        // console.log(q.answers[1]);
        answerC.innerText = q.answers[2].choiceC;
        // console.log(q.answers[2]);
    } 
}
// Added click event for each button.
// If first button clicked and the correct answer in the questions array equals the text content of the answerA button, add to score, increment runningQuestionsIndex, display correct and go through to next question.
// else display incorrect and subtract 5 seconds from the secondsLeft variable. increment runningQuestionsIndex variable and go through to the next question.
answerA.addEventListener('click', function(){
    if (q.correct === answerA.textContent) {
        // console.log(q.correct)
        //console.log(answerA.textContent)
        score++;
        feedback.style.display = "block";
        feedback.textContent = "Correct!";
        runningQuestionIndex++;
        showQuestion();
   }
   else {
    feedback.style.display = "block";
    feedback.textContent = "Incorrect!";
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion();

   }
// same logic applied as above.
})
answerB.addEventListener('click', function(){
    if (q.correct === answerB.textContent) {
        // console.log(q.correct)
        //console.log(answerB.textContent)
        score++;
        feedback.style.display = "block";
        feedback.textContent = "Correct!";
        runningQuestionIndex++;
        showQuestion();
   }
   else {
    feedback.style.display = "block";
    feedback.textContent = "Incorrect!";
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion();

   }
// as none of the correct answers are C. When answerC button is clicked we only display Incorrect. Subtract from secondsLeft variable and increment the runningquestionsIndex.
})
answerC.addEventListener('click', function(){
    feedback.style.display = "block";
    feedback.textContent = "Incorrect!";
    time.textContent = secondsLeft -= 5;
    runningQuestionIndex++;
    showQuestion();
})


