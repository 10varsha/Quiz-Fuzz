const questions = [
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who wrote 'Harry Potter' series?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "Stephen King", correct: false },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Pt", correct: false }
        ]
    },
    {
        question: "Which continent is the largest by land area?",
        answers: [
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "North America", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Gregor Mendel", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Ir", correct: false },
            { text: "Fe", correct: true },
            { text: "Au", correct: false },
            { text: "Ag", correct: false }
        ]
    },
    {
        question: "Who was the first person to step on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "John Glenn", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "São Paulo", correct: false },
            { text: "Brasília", correct: true },
            { text: "Rio de Janeiro", correct: false },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Who painted the 'Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "S", correct: false },
            { text: "So", correct: false },
            { text: "Sn", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Faulkner", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Modern Physics'?",
        answers: [
            { text: "Albert Einstein", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "John Steinbeck", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "O", correct: true },
            { text: "Ox", correct: false },
            { text: "Om", correct: false },
            { text: "On", correct: false }
        ]
    },
    {
        question: "Who is the author of '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Aldous Huxley", correct: false },
            { text: "Ray Bradbury", correct: false },
            { text: "J.R.R. Tolkien", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "Who discovered the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Melbourne", correct: false },
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        answers: [
            { text: "J.D. Salinger", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Carbon Dioxide (CO2)", correct: false },
            { text: "Nitrogen (N2)", correct: true },
            { text: "Oxygen (O2)", correct: false },
            { text: "Methane (CH4)", correct: false }
        ]
    },
    {
        question: "Who painted 'The Scream'?",
        answers: [
            { text: "Edvard Munch", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Si", correct: false },
            { text: "Ag", correct: true },
            { text: "Au", correct: false },
            { text: "Al", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        answers: [
            { text: "Charles Darwin", correct: true },
            { text: "Gregor Mendel", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { text: "Stapes (in the ear)", correct: true },
            { text: "Femur", correct: false },
            { text: "Tibia", correct: false },
            { text: "Radius", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Odyssey'?",
        answers: [
            { text: "Homer", correct: true },
            { text: "Plato", correct: false },
            { text: "Aristotle", correct: false },
            { text: "Sophocles", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false }
        ]
    },
    {
        question: "Who discovered electricity?",
        answers: [
            { text: "Benjamin Franklin", correct: false },
            { text: "Michael Faraday", correct: false },
            { text: "Thomas Edison", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: [
            { text: "C", correct: true },
            { text: "Co", correct: false },
            { text: "Ca", correct: false },
            { text: "Cr", correct: false }
        ]
    },
    {
        question: "Who painted 'The Last Supper'?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: "Donatello", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for helium?",
        answers: [
            { text: "He", correct: true },
            { text: "H", correct: false },
            { text: "Hy", correct: false },
            { text: "Hm", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Iliad'?",
        answers: [
            { text: "Homer", correct: true },
            { text: "Virgil", correct: false },
            { text: "Ovid", correct: false },
            { text: "Sappho", correct: false }
        ]
    },
    {
        question: "Which organ is responsible for filtering blood?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Kidney", correct: true },
            { text: "Heart", correct: false },
            { text: "Lung", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();