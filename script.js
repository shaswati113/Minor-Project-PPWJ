const quiz=[
    {
        question: "Which language is used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question:"If pop() is called on an empty array, what will it return?",
        options:["An empty array []","null","undefined","An error"],
        answer:"undefined"
    },
    {
        question:"Which of the following is the correct way to declare an empty JavaScript object?",
        options:["let obj = [];","let obj = {};","let obj = new Object();","Both b and c"],
        answer:"Both b and c"
    },
    {
        question:"What will fruits.shift() return if fruits is an empty array?",
        options:["undefined","null","0","An empty string ''"],
        answer:"undefined"
    },
    {
        question:"let x = 10; let y = '10'; console.log(x == y);",
        options:["true","false","error","undefined"],
        answer:"true"
    },
    {
        question:"let age = 20; let message = (age >= 18) ? 'Adult' : 'Minor'; console.log(message);",
        options:["Adult","Minor","undefined","error"],
        answer:"Adult"
    },
    {
        question:"What is the output in the console? const myArr3 = [3,6,8,9,3,55,553,434]; myArr3.sort(); myArr3.length = 0; console.log(myArr3[0]);",
        options:["null","undefined","3","error"],
        answer:"undefined"
    },
    {
        question:"How do you create an object using the constructor function?",
        options:["let obj = {};","let obj = []","let obj = Object.create()","let obj = new Object();"],
        answer:"let obj = new Object();"
    },
    {
        question:"What does document.querySelectorAll() return?",
        options:["An array of elements","A single element","A NodeList","Undefined"],
        answer:"A NodeList"
    },
    {
        question:"What will fruits.shift() return if fruits is an empty array?",
        options:["undefined","null","0","An empty string ''"],
        answer:"undefined"
    }
]

let container=document.getElementById("container")
let questionBox=document.getElementById("question");
let answerBox=document.getElementById("answer");
let optionsList=document.getElementsByClassName("option");
let scoreBox=document.getElementById("score");
let nextButton=document.getElementById("next");
let startButton=document.getElementById("start");
let score=0;
let qn=0;
let x=0;
let check=0;
function startQuiz(){
    if(startButton.textContent=="Restart"){
        startButton.style.backgroundColor="green";
        startButton.textContent="Start Quiz";
        container.style.display="none";
    }
    else if(startButton.textContent=="Start Quiz"){
        startButton.style.backgroundColor="red";
        startButton.textContent="Restart";
        container.style.display="block";
    }
    qn=-1;
    changeQuestion();
    document.getElementById('finalMsg').style.display="none";
    score=0;
    scoreBox.textContent=0;
}
function changeQuestion(){
    update();
    highlight();
    score= check==1? score=score+1:  score;
    scoreBox.textContent=score;
    questionBox.textContent=quiz[qn].question;
    for(var i=0;i<4;i++){
        optionsList[i].innerText=quiz[qn].options[i];
    }
    check=0;
}
function checkAnswer(x){
    if((quiz[qn].options[x]==quiz[qn].answer) && (questionBox.innerText==quiz[qn].question)){
        console.log("right answer!")
        check=1;
    }
    else{
        console.log("wrong answer!")
        check=0;
    }
    highlight();
    optionsList[x].classList.add("highlight");
}
function update(){
    if(qn==9){
        container.style.display="none";
        document.getElementById('finalMsg').style.display="block";
        startButton.textContent="Start Quiz";
        startButton.style.backgroundColor="green";
    }
    else{
        qn+=1;
    }
}
function highlight() {
    for (let i = 0; i < optionsList.length; i++) {
        const e = optionsList[i];
        e.classList.remove("highlight")
    }
}

