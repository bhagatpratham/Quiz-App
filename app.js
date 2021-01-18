const btnHam = document.getElementById("btn-ham");
const nav = document.getElementById("nav");

btnHam.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnHam.classList.toggle("active");
});

// Grab all Elements


const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtns = document.getElementById('answer-btns')

//  Both the values are set to default(undefined)
let shuffledQuestions, currentQuestionIndex

// Event Listeners
startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Start Quiz Function
function startQuiz() {
    console.log('Started');
    startBtn.classList.add('hide')  // Hides start button when quiz starts
    // ShuufledQuestions contains a question array..... and..... Math.random contains random no from 0 to 1
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 // Because we are starting from first question
    questionContainer.classList.remove('hide')
    countRightAnswers = 0; 
    setNextQuestion()
}


function setNextQuestion() {
    resetAll() 
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {  // Contains question object
    questionElement.innerText = question.question // Displays Question
    question.answers.forEach(answer => {  // Answers Array
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {   // Checks if the answer is correct 
            button.dataset.correct = answer.correct  // Data attribute (Should not display boolean[false] value if the answer is wrong)
        }
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)  
    })
}


// removes default options example 'answer1'
function resetAll() {
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild
        (answerBtns.firstChild)
    }
    
}


let countRightAnswers = 0; 


// Select Answers Function
function selectAnswer(e) {
    const selectedButton = e.target // whatever we click on
    const correct = selectedButton.dataset.correct // checks if selected button is correct
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct) // To set the status if the answer was correct or not
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
    nextBtn.classList.remove('hide')
    // For Displaying Answers
    document.getElementById('right-answers').innerHTML = countRightAnswers;
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
     }
}

function setStatusClass(element, correct) {}

// Questions

const questions = [
    {
        question : 'Who is the best soccer player ?',
        answers : [
            { text: 'Cristiano Ronaldo', correct: true },
            { text: 'Leo Messi', correct: false},
            { text: 'Neymar Jr', correct: false},
            { text: 'Lewandowski', correct: false}
        ]
    },
    {
        question : 'Who won 2014 FIFA WORLD CUP ?',
        answers : [
            { text: 'Spain', correct: false },
            { text: 'Brazil', correct: false},
            { text: 'Germany', correct: true},
            { text: 'Argentina', correct: false}
        ]
    },
    {
        question : 'Which club has won highest number of UEFA CHAMPIONS LEAGUE ?',
        answers : [
            { text: 'Real Madrid', correct: true },
            { text: 'FC BARCELONA', correct: false},
            { text: 'AC MILAN', correct: false},
            { text: 'MANCHESTER UNITED', correct: false}
        ]
    },
    {
        question : 'With Javascript you can create ?',
        answers : [
            { text: 'WEB APPLICATIONS', correct: false },
            { text: 'MOBILE APPLICATIONS', correct: false},
            { text: 'DESKTOP APPLICATIONS', correct: false},
            { text: 'ALL OF THE ABOVE', correct: true}
        ]
    },
    {
        question : 'Who is the best YouTuber ?',
        answers : [
            { text: 'DEV ED', correct: true },
            { text: 'TRAVERSY MEDIA', correct: true},
            { text: 'FLORIN POP', correct: true},
            { text: 'WEB DEV SIMPLIFIED', correct: true}
        ]
    },
]
