const solutionInput = document.getElementById('solution');
const answerInput = document.getElementById('answer');
const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear_all');


function addToScreen(value) {
    solutionInput.value += value;
}
function clearScreen() {
    solutionInput.value = "";
    answerInput.value = "";
}
// Query elements and wire handlers after DOM is ready so this script works
// whether it's placed in <head> or at the end of <body>.
// document.addEventListener('DOMContentLoaded', () => {
//     solutionInput = document.getElementById('solution');
//     answerInput = document.getElementById('answer');
//     clear = document.getElementById('clear');
//     clearAll = document.getElementById('clear_all');

//     if (clear) clear.addEventListener('click', clearScreen);
//     if (clearAll) clearAll.addEventListener('click', clearScreen);
// });

const percentButton = document.getElementById('percent');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const decimalPoint = document.getElementById('decimal');

// function calculate() {
//     try {
//         solutionInput.value = eval(solutionInput.value);
//         answerInput.value = "";
//     }
//     catch (error) {
//         solutionInput.value = "Error";
//     }
// }

// // The HTML calls `showResult('=')` for the equals button. Provide a thin
// // wrapper so the existing HTML works and routes to our `calculate()`.
// function showResult(token) {
//     if (token === '=') {
//         calculate();
//     }
// }
