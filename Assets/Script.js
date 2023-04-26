const Questionlist = [
    {
    question: "Coprastastaphobia is the fear of what?",
    Options:["Holes","Constipation","Clowns","Dirt/Dust"],
    answer: "Constipation"
    },
    {
    question:"In Texas, it’s illegal to swear in front of what?",
    Options:["A Drag Queen","A child","A Corpse","A pastor"],
    answer: "A Corpse"
    },
    {
    question:"What was Marilyn Monroe’s natural hair color?",
    Options:["Blonde","Red","Brown","Black"],
    answer: "Red"
    },
    {
    question:" Johnny Depp is famously afraid of what??",
    Options:["Amber Heard","Clowns","daylight","Dirt/Dust"],
    answer: "Clowns"
    },
    {
    question:"With how many bricks is the Empire State Building made of?",
    Options:["5 Million","15 Million","25 Million","10 Million"],
    answer: "10 Million"
    },
    {
    question: "On average, what is the thing that Americans do 22 times in a day??",
    Options:["Drink","use the toilet","open the fridge","wash their hands"],
    answer: "Open the fridge"
    },
    {
    question:" What is illegal to eat with a cherry pie in Kansas??",
    Options:["Peanuts","Ice Cream","Bread","A pastor"],
    answer: "Iced Cream"
    },
    {
    question:"What was the first fruit that was eaten on the moon??",
    Options:["Tomatoe","Banana","Peach","Mango"],
    answer: "Peach"
    },
    {
    question:"What is the fear of long words known as??",
    Options:["The alphabet","Hippopotomostrosesquippedaliophobia","qwertypophobia","thcartopostrophobia"],
    answer: "Hippopotomostrosesquippedaliophobia"
    },
    {
    question:"What color is the ‘black box’ in an airplane??",
    Options:["Black","Orange","white","Red"],
    answer: "Orange"
    },
    ];
let Questionnum = 0;

function Triviastart() {
  const Triviabox = document.getElementById('Triviabox');
  const TriviaQuestion = document.getElementById('TriviaQuestion');
  const Optionline = document.getElementById('Optionline');
  const startBtn = document.getElementById('startBtn');

  startBtn.style.display = 'none';
  Triviabox.style.display = 'block';
  
  const showq = Questionlist[Questionnum];
  TriviaQuestion.textContent = showq.question;
  Optionline.innerHTML = '';
  for (let Option of showq.Options) {
    const input = document.createElement('input')
    input.type = 'radio';
    input.name = 'answer';
    input.value = Option;
    
    const label = document.createElement('label');
    label.textContent = Option;
    Optionline.appendChild(input);
    Optionline.appendChild(label);
    Optionline.appendChild(document.createElement('br'));
  }
  if (Questionnum === 0){
    startTimer();

  }
}
        
function startTimer() {
  let TimeLeft = 50;
  const Timer1 = document.getElementById('timer');
  Timer1.textContent = TimeLeft;
  const Timer2 = setInterval(() => {
    TimeLeft--;
    Timer1.textContent = TimeLeft;
    if (TimeLeft === 0 || Questionnum === Questionlist.length -1 ) {
      clearInterval(Timer2);
      Triviabox.submit();
    }
  }, 1000);
}

function pickedAns() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    alert('Please select an answer.');
    return;
  }
  const isCorrect = selectedAnswer.value === Questionlist[Questionnum].answer;
  if (isCorrect) {
    alert('Correct!');
  } else {
    alert(`Incorrect. The correct answer is ${Questionlist[Questionnum].answer}.`);
  }
  Questionnum++;
  if (Questionnum  < Questionlist.length) {
    Triviastart();
  } else {
    clearInterval(Timer2);
    Triviabox.submit();
  }
}
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',pickedAns);

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', Triviastart);