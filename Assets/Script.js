//function timer() {
   // var start = new Date();
    //document.querySelector('input[name="timer"|').value = start;
    //}
//^^6 timer function

Var Question = [{question:"Coprastastaphobia is the fear of what?",
Option:["Holes","Constipation","Clowns","Dirt/Dust"],
answer: "Constipation"
}],
Var Question = [{question:" In Texas, it’s illegal to swear in front of what?",
Option:["A Drag Queen","A child","A Corpse","A pastor"],
answer: "A Corpse"
}],
Var Question = [{question:"What was Marilyn Monroe’s natural hair color?",
Option:["Blonde","Red","Brown","Black"],
answer: "Red"
}],
Var Question = [{question:"Coprastastaphobia is the fear of what?",
Option:["Holes","Constipation","Clowns","Dirt/Dust"],
answer: "Constipation"
}],
Var Question = [{question:"Coprastastaphobia is the fear of what?",
Option:["Holes","Constipation","Clowns","Dirt/Dust"],
answer: "Constipation"
},


];

//timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
  
    let interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = seconds + " seconds left";
  
      if (--timer < 0) {
        clearInterval(interval);
        // Do something when time runs out
      }
    }, 1000);
  }
  
  function displayQuiz() {
    let quizContainer = document.getElementById("quiz");
    let quiz = "";
  
    for (let i = 0; i < quizQuestions.length; i++) {
      let options = "";
  
      for (let j = 0; j < quizQuestions[i].options.length; j++) {
        options += `<label>
          <input type="radio" name="question${i}" value="${quizQuestions[i].options[j]}">
          ${quizQuestions[i].options[j]}
        </label>`;
      }
  
      quiz += `<div class="question">
        <h3>${quizQuestions[i].question}</h3>
        <div class="options">${options}</div>
                  <div class="timer"></div>
      </div>`;
    }
  
    quizContainer.innerHTML = quiz;
  
    let timerDisplays = document.querySelectorAll(".timer");
  
    timerDisplays.forEach((timerDisplay, index) => {
      startTimer(30, timerDisplay);
    });
}