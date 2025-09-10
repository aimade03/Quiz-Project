const countryCapitalQuestions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris",
    },
    {
        question: "What is the capital of Germany?",
        choices: ["Vienna", "Berlin", "Warsaw", "Brussels"],
        answer: "Berlin",
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Lisbon", "Madrid", "Barcelona", "Valencia"],
        answer: "Madrid",
    },
    {
        question: "What is the capital of Italy?",
        choices: ["Milan", "Florence", "Naples", "Rome"],
        answer: "Rome",
    },
];

const question = document.querySelector('.question')
const options = document.querySelector('.options')
const btn = document.querySelector('.submit-btn')
const container = document.querySelector('.quiz-container')
const result = document.querySelector('.result')

let count = 0
let Rank = 0;
function RenderQuiz() {
    question.innerHTML = countryCapitalQuestions[count].question;
    options.innerHTML = countryCapitalQuestions[count].choices.map(choice => `
        <li> <input type="radio" name="m" value="${choice}" onchange="showChecked()" >  ${choice} </li> 
        `).join('');
}
function showChecked() {
    let checked = document.querySelector('input[name="m"]:checked');
    return checked ? checked.value : null ;
}
RenderQuiz()

btn.addEventListener('click', () => {
    let chick = showChecked() ;
    console.log(chick)
    if(chick){
        if (countryCapitalQuestions[count].answer === chick) {
            Rank++;
        }
    }

    if (count < countryCapitalQuestions.length - 1) {
        count++
        RenderQuiz()
    } else {
        container.style.display = 'none';
        result.innerHTML = `
        <div class=" d-block ">
        <h1 class="text-center fw-bold" ; > Dein Rank ist : ${Rank} </h1> 
        <a href="index.html" class="btn btn-primary d-flex justify-content-center " style="text-decoration: none;">Return</a>
        </div
        `

    }
})




