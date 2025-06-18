import cssExample from '../assets/css-example.png';
import variableDiagram from '../assets/variable-diagram.png';
import apiDiagram from '../assets/api-diagram.png';

export const flashcards = [
    {
        question: "What is a function in Javascript?",
        answer: "A function is a reusable block of code that performs a specific task.",
        difficulty: "easy"
    },
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        difficulty: "medium"
    },
    {
        question: "What is the purpose of CSS in web development?",
        answer: `CSS is used to style HTML elements, including layout, colors, fonts, and spacing.<br/><br/>
        <img src="${cssExample}" alt="CSS Example" width="400"/>`,
        difficulty: "hard"
    },
    {
        question: "What is a loop in programming?",
        answer: "A loop is a control structure that repeats a block of code while a condition is true.",
        difficulty: "easy"
    },
    {
        question: "What is a variable?",
        answer: `A variable stores data that can be changed and reused in a program.<br/><br/>
        <img src="${variableDiagram}" alt="Variable Diagram" width="400"/>`,
        difficulty: "medium"
    },
    {
        question: "What is the DOM?",
        answer: "The Document Object Model is a tree-like structure representing HTML elements.",
        difficulty: "hard"
    },
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces with components.",
        difficulty: "easy"
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        answer: "`==` compares values with type coercion, while `===` compares value and type.",
        difficulty: "medium"
    },
    {
        question: "What is an API?",
        answer: `An API is a set of rules that allows different software applications to communicate.<br/><br/>
        <img src="${apiDiagram}" alt="API Diagram" width="400"/>`,
        difficulty: "hard"
    },
    {
        question: "What is a component in React?",
        answer: "A component is a reusable piece of UI that can manage its own state and logic.",
        difficulty: "easy"
    }
];
