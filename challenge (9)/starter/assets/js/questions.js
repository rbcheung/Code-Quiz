var startBtn = document.querySelector("#start");
//console.log(startBtn);
var timer = document.querySelector("#time");
//console.log(Timer);
var questionsContainer = document.querySelector("#questions");
//console.log(questionsContainer);

var startScreen = document.querySelector("#start-screen");
var questionElement = document.getElementById("question-title");
var answerElement = document.querySelectorAll(".answers");
// console.log(answerElement);
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");


// let runningQuestionIndex = 0;
let score = 0;

// Questions Array
var questions = [
    {
        question1: "Javascript is an _______ language?",
        answers: [
            { choiceA: "Object-Orientated", correct: true },
            { choiceB: "Object-Based", correct: false },
            { choiceC: "Procedural", correct: false },
        ]

    },
    {
        question2: "Javascript is an _______ language?",
        answers: [
            { choiceA: "Object-Orientated", correct: true },
            { choiceB: "Object-Based", correct: false },
            { choiceC: "Procedural", correct: false },
        ]

    },
    {
        question3: "Javascript is an _______ language?",
        answers: [
            { choiceA: "Object-Orientated", correct: true },
            { choiceB: "Object-Based", correct: false },
            { choiceC: "Procedural", correct: false },
        ]

    }

]
// When start button is clicked. startGame function is Run.
startBtn.addEventListener("click", startGame)

// when function is run. startbutton is hidden, questions container is shown and start screen is also hidden.
function startGame() {
    startBtn.classList.add("hide");
    questionsContainer.classList.remove("hide");
    startScreen.classList.add("hide");

    showQuestion();
}


function showQuestion() {

    let runningQuestionIndex = 0;

    var q = questions[runningQuestionIndex];
    // console.log(q) 
    questionElement.innerText = questions[0].question1;
    // console.log(questions[0].question1)
    answerA.innerText = q.answers[0].choiceA;
    // console.log(q.answers[0]);
    answerB.innerText = q.answers[1].choiceB;
    // console.log(q.answers[1]);
    answerC.innerText = q.answers[2].choiceC;
    // console.log(q.answers[1]);

// For loop to loop over the answerElement variable as it is a node list and acts like an array.
// Added Event Listener to listen for a click on the answerElement variable. 
// If the event target clicked == answerA, then create new paragraph and append it to the body.
// Then I changed the content of the correctP variable to say "You have chosen the correct answer!!!"
// if any other button is clicked, I do the same thing but say "You have chosen the wrong answer!!!" instead.

    for (i = 0; i < answerElement.length; i++) {
        console.log(answerElement[i].innerHTML);
        answerElement[i].addEventListener("click", function (e) {
            if (e.target == answerA) {
                var correctP = document.createElement("p");
                //console.log("This is the correct answer");
                document.body.appendChild(correctP);
                correctP.textContent = "You have chosen the correct answer!!!";
                correctP.setAttribute("id", "correct");

            }
            else {
                //console.log("This is the wrong answer");
                var wrongP = document.createElement("p");
                //console.log("This is the correct answer");
                document.body.appendChild(wrongP);
                wrongP.textContent = "You have chosen the wrong answer!!!";
                wrongP.setAttribute("id", "Incorrect");
                

            }

        })
    }

}
