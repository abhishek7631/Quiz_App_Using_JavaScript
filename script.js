const question = [
  {
    question: "Which type of JavaScript language is ___",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Object-Based", correct: true },
      { text: "Assembly-language", correct: false },
      { text: "High-level", correct: false },
    ],
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    answers: [
      { text: "Alternative to if-else", correct: false },
      { text: "Switch statement", correct: false },
      { text: "If-then-else statement", correct: false },
      { text: "immediate if", correct: true },
    ],
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do:",
    answers: [
      { text: "Shows a warning", correct: false },
      { text: "Prompts to complete the statement", correct: false },
      { text: "Throws an error", correct: false },
      { text: "Ignores the statements", correct: true },
    ],
  },
  {
    question: "The function and var are known as:",
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: "Declaration statements", correct: true },
      { text: "Prototypes", correct: false },
    ],
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "Global variable", correct: false },
      { text: "The local element", correct: true },
      { text: "The two of the above", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    answers: [
      { text: "Preprocessor", correct: false },
      { text: "Triggering Event", correct: false },
      { text: "RMI", correct: false },
      { text: "Function/Method", correct: true },
    ],
  },
  {
    question: "Which of the following type of a variable is volatile?",
    answers: [
      { text: "Mutable variable", correct: true },
      { text: "Dynamic variable", correct: false },
      { text: "Volatile variable", correct: false },
      { text: "Immutable variable", correct: false },
    ],
  },
  {
    question:
      "In the JavaScript, which one of the following is not considered as an error:",
    answers: [
      { text: "Syntax error", correct: false },
      { text: "Missing of semicolons", correct: false },
      { text: "Division by zero", correct: true },
      { text: "Missing of Bracket", correct: false },
    ],
  },
  {
    question:
      "Which of the following number object function returns the value of the number?",
    answers: [
      { text: "toString()", correct: false },
      { text: "valueOf()", correct: true },
      { text: "toLocaleString()", correct: false },
      { text: "toPrecision()", correct: false },
    ],
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    answers: [
      {
        text: "Both x and y are equal in value, type and reference address as well.",
        correct: false,
      },
      { text: "Both are x and y are equal in value only.", correct: false },
      { text: "Both are equal in the value and data type.", correct: true },
      { text: "Both are not same at all.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currQuestionIndex = 0;
let score = 0;

function quiz() {
  currQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currQuestion = question[currQuestionIndex];
  let questionNo = currQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currQuestion.question;

  currQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currQuestionIndex++;
  if (currQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currQuestionIndex < question.length) {
    handleNextButton();
  } else {
    quiz();
  }
});

quiz();

//  ********************

nextButton.addEventListener("click", () => {
  if (currQuestionIndex < question.length) {
    handleNextButton();
  } else {
    quiz();
  }
});

quiz();

nextButton.addEventListener("click", () => {
  if (currQuestionIndex < question.length) {
    handleNextButton();
  } else {
    quiz();
  }
});

quiz();
