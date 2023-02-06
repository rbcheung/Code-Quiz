var initials = document.querySelector("#initials");
// console.log(initials);
var submitBtn = document.querySelector("#submit");
// console.log(submitBtn);
var highscoresList = document.querySelector("#highscores");
console.log(highscoresList);
var endScreen = document.querySelector("#end-screen");
// console.log(endScreen);
var finalScore = document.querySelector("#final-score");
// console.log(finalScore);
var clearScore = document.querySelector("#clear");

if(submitBtn) {
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // create user object from submission
    var user = {
      Initials: initials.value.trim(),
      Score: finalScore.textContent

    };
    // console.log(user);
    
    if (user.Initials === "") {
      alert("Please input initials.");
    } 
    else {
      alert("Thanks for playing.");
  
      localStorage.setItem("user", JSON.stringify(user));
      location.href = "highscores.html";

     
    }
  });
}

var lastUser = JSON.parse(localStorage.getItem("user"));
// console.log(lastUser)
var newLi = document.createElement("li");
newLi.textContent = lastUser.Initials + " " + " -" + " " + lastUser.Score;
// console.log(highscoresList)
highscoresList.append(newLi);
// console.log(newLi)


clearScore.addEventListener("click", function(){
localStorage.clear();
newLi.classList.add("hide");
})




