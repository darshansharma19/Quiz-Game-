const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language", 
            "Hyper Transfer Markup Language", 
            "Hypertext-Machine-Language", 
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "What is the JavaScript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheet", 
            "Computer Style Sheet", 
            "Creative Style Sheet", 
            "Coded Style Sheet",
        ],
        correct: 0,
    },
    {
        question: "Which programming language is often used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2,
    }
];

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const[questionElm, option1,option2,option3,option4] = 
document.querySelectorAll(
    "#question , .option1, .option2, .option3 , .option4 "
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;

let  score = 0;


const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(question);
    questionElm.innerText = `${currentQuiz + 1 } : ${question}`;

    options.forEach( 
        (curOption, index) => (window[`option${index + 1 }`].innerText = curOption)
    );
};

loadQuiz();


const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if(curOption.checked){
            ans_index = index;
        }
    });
    return ans_index;
};

const deselectedAnswer = () => {
   return answerElm.forEach((curElem) => curElem.checked = false);       
};



submitBtn.addEventListener("click" , () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    }

    currentQuiz++;


    if(currentQuiz < quizData.length){
        deselectedAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class = "result"> 
        <h2> 🏆 Your Score : ${score}/${quizData.length} CORRECT ANSWERS </h2>
        <p> Congratulations on Completing the quiz ! 🎉🎊 </P>
        <button class = "reload-button" onclick="location.reload()"> Play Again </button>
        </div>
        `;
    }
});