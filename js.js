let problemNumber = 1;
let numberCorrect = 0;
let left;
let right;
let correctAnswer = left * right;

function getRandomNumber(){
    return Math.floor(Math.random() * (81-0) + 0);
}

function shuffleArray(arr){
    return arr.sort(function (a, b) { return Math.random() - 0.5});
}

function buildNewProblem(){
    left = Math.floor(Math.random() * (9-0) + 0);
    right = Math.floor(Math.random() * (9-0) + 0);

    correctAnswer = left * right;
    console.log(correctAnswer);

    expression = left + " * " + right;
    let parent = document.getElementById('problem').querySelector('.expression');
    parent.innerText = expression;

    let answers = [correctAnswer, getRandomNumber(), getRandomNumber(), getRandomNumber()];
    let array = shuffleArray(answers);

    let firstLi = document.getElementById('one');
    firstLi.innerText = array[0];
    let secondLi = document.getElementById('two');
    secondLi.innerText = array[1];
    let thirdLi = document.getElementById('three');
    thirdLi.innerText = array[2];
    let fourthLi = document.getElementById('four');
    fourthLi.innerText = array[3];
    
}
document.addEventListener('DOMContentLoaded', () => {
    buildNewProblem();

    let listOfAnswers = document.getElementById('answers').querySelector('ul').querySelectorAll('li');
    listOfAnswers.forEach(answer =>
        answer.addEventListener('click', (event) => {
            problemNumber++;
            console.log(event.target.innerText);
            console.log(correctAnswer);

            if(event.target.innerText == correctAnswer){
                numberCorrect++;
                let problem = document.querySelector('.currentProblem');
                problem.innerText = problemNumber;
                let number = document.querySelector('.currentScore');
                number.innerText = numberCorrect;
            } else if (event.target.innerText != correctAnswer){
                let problem = document.querySelector('.currentProblem');
                problem.innerText = problemNumber;
            }

            if(problemNumber < 10){
                buildNewProblem();
            } else {
                let problem = document.querySelector('.currentProblem');
                problem.innerText = 10;
                let elementsToDelete = document.querySelectorAll('.show-hide');
                elementsToDelete.forEach( item => item.remove());


            }

            
        }))

       document.getElementById('btnStartOver').addEventListener('click', (event) => {
                location.reload();
            }) 
})