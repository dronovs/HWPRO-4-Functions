let firstOperand = 0;
let secondOperand = 0;
let result = 0;

function askFirstOperand (operand) {
    return firstOperand = +prompt('Please enter the first operand');
}

function askSecondOperand (operand) {
    return secondOperand = +prompt('Please enter second operand');
}

function sums (operand1, operand2) {
    return result = operand1 + operand2;
}

function difference (operand1, operand2) {
    return result = operand1 - operand2;
}

function multiplies (operand1, operand2) {
    return result = operand1 * operand2;
}

function divides (operand1, operand2) {
    return result = operand1 / operand2;
}

function sinus (operand) {
    return result = Math.sin(operand);
}
do {
    let operator = prompt(`Choose one of operations: +, -, *, /, sin`);
    if (operator === `+`) {
        console.log(`Operation sum finished with result ${sums(askFirstOperand(), askSecondOperand())}`)
        console.log(result);
    } else if (operator === `-`) {
        console.log(difference(askFirstOperand(), askSecondOperand()));
    } else if (operator === `*`) {
        console.log(multiplies(askFirstOperand(), askSecondOperand()));
    } else if (operator === `/`) {
        console.log(divides(askFirstOperand(), askSecondOperand()));
    } else if (operator === `sin`) {
        console.log(sinus(askFirstOperand()));
    }
} while (confirm('Any more calculations?'));