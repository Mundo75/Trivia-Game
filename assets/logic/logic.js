
//create object array of trivia questions


var questions = [{

    "question": "What animal has the longest lifespan?",
    "correctAnswer": "c",
    "choice1": "Elephant",
    "choice2": "Blue Whale",
    "choice3": "Giant Tortoise",
    "choice4": "Locust",
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",

}, {
    "question": "What is the only mammal capable of true flight?",
    "correctAnswer": "b",
    "choice1": "Flying Squirrel",
    "choice2": "Bat",
    "choice3": "Ocelot",
    "choice4": "Humming Bird", 
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What is the fastest flying bird in the world?",
    "correctAnswer": "c",
    "choice1": "Happy Eagle",
    "choice2": "Horned Sungem",
    "choice3": "Peregrine Falcon",
    "choice4": "Spin-tailed Swift", 
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "A newborn kangaroo is about the size of a ...?",
    "correctAnswer": "a",
    "choice1": "Lima Bean",
    "choice2": "Plum",
    "choice3": "Grapefruit",
    "choice4": "Watermelon", 
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What is the gestation period of a blue whale?",
    "correctAnswer": "d",
    "choice1": "4-6 Months",
    "choice2": "2 Years",
    "choice3": "16-18 Months",
    "choice4": "10-12 Months", 
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What is the smallest mammal in the world?",
    "correctAnswer": "d",
    "choice1": "Western Harvest Mouse",
    "choice2": "Numbat",
    "choice3": "Pygmy Marmoset",
    "choice4": "Bumblebee Bat", 
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What is the largest of the great apes?",
    "correctAnswer": "a", 
    "choice1": "Mountain Gorilla",
    "choice2": "Orangutan",
    "choice3": "Western Lowland Gorilla",
    "choice4": "Eastern Lowland Gorilla",
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What is the world's most poisonous spider?",
    "correctAnswer": "b", 
    "choice1": "Brown Recluse",
    "choice2": "Brazillian Wandering Spider",
    "choice3": "Sydney Funnel Spider",
    "choice4": "Daddy-Longlegs",
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "How many times can a hummingbird flap its wings /sec?",
    "correctAnswer": "c", 
    "choice1": "20",
    "choice2": "40",
    "choice3": "80",
    "choice4": "160",
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}, {
    "question": "What animal has the highest blood pressure?",
    "correctAnswer": "a", 
    "choice1": "Giraffe",
    "choice2": "Blue Whale",
    "choice3": "Elephant",
    "choice4": "Flea",
    "imageCorrect": "",
    "imageWrong": "",
    "sound": "",
}];

var currentQuestion = 0;
var score = 0;
var questionTime = 10;
var count;
var totalQuestions = questions.length;

var quizWindow = document.getElementById("questionDiv");
var quizText = document.getElementById("quizQuestion");
var startScreen = document.getElementById("startPageId")
var gameScreen = document.getElementById("gameBoardId")
var resultWindow = document.getElementById("resultContainerID");
var endWindow = document.getElementById("endScreen");
var buttonStart = document.getElementById("startButton");
var opt1 = document.getElementById("answerChoice1"); 
var opt2 = document.getElementById("answerChoice2");
var opt3 = document.getElementById("answerChoice3");
var opt4 = document.getElementById("answerChoice4");
var checkedDefault = document.getElementById("defaultChecked");
var timerDiv = document.getElementById("timerId");
var submitButton = document.getElementById("nextButton");
var buttonRestart = document.getElementById("restartButton");

buttonRestart.onclick = function restartGame () {
    endWindow.style.display = "None";
    startScreen.style.display = "initial";
    score = 0;
    currentQuestion = 0;
    
}

function countDown () {
    clearInterval(count);
    count = setInterval(decrement, 1000);
}
function decrement () {

    questionTime--;
    timerDiv.innerHTML = "Time Left:  " + questionTime + " Seconds";

    nextButton.onclick = function submitAnswer () {
        stop();
        loadNextQuestion();
    }

    if (questionTime === 0) {
        stop();
        loadNextQuestion();
        
    }

    
   
}
function stop () {
    clearInterval(count);
    questionTime = 10;
    
}
    
   
     
buttonStart.onclick = function initiateGame () {

   startScreen.style.display = "none";
   gameScreen.style.display = "";
   countDown();
   
}

function loadQuestion (questionIndex) {
    checkedDefault.checked = true;
    var q = questions[questionIndex];
    quizText.textContent = (questionIndex +1) + ") " + q.question; 
    opt1.textContent = q.choice1;
    opt2.textContent = q.choice2;
    opt3.textContent = q.choice3;
    opt4.textContent = q.choice4;

}


function loadNextQuestion () {
    
    countDown();
    

    var selectedChoice = document.querySelector("input[type=radio]:checked");

    var answer = selectedChoice.value; 

    if (questions[currentQuestion].correctAnswer == answer) {
        score++;

    }
        //selectedChoice.checked = false;
        checkedDefault.checked = true;
        currentQuestion++;
    

    if (currentQuestion == totalQuestions -1) {

        nextButton.textContent = "Finish";
    }

    if (currentQuestion == totalQuestions) {
        gameScreen.style.display = "none";
        endWindow.style.display = "";
        //buttonRestart.style.display = "";
        resultWindow.textContent = "Your Score: " + score + "/10";
        return;
    
    }

    if (score >= 7) {
        $("#fail").attr("src", "assets/images/win.jpg");
    } else {
        $("#fail").attr("src", "assets/images/fail.jpg");
    }
    loadQuestion(currentQuestion);
}
 loadQuestion(currentQuestion);

 

//Initialize game - click event to start questions

//generate a random question and display in the DOM

//store player answer and determine if correct or not

//if correct update score, alert correct, display animal image and move on to next question

//Reset timer

//if incorrect update score, alert incorrect, display image and move on to next question

//Reset timer

//after last question calculate/display final score

