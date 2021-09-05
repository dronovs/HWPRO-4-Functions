let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let resultsArr = [];
let operator = 0;

function askFirstOperand (operand) {
    firstOperand = +prompt('Please enter the first operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('Please enter a NUMBER!');
        }
    }
    return firstOperand;
}

function askSecondOperand (operand) {
    secondOperand = +prompt('Please enter second operand');
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('Please enter a NUMBER!');
        }
    }
    return secondOperand;
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

function showsHistory (arr) {
    alert(arr);
}
do {
    operator = prompt(`Choose one of operations: +, -, *, /, sin or history`, `+`);
    if (operator === `+`) {
        alert(`Operation sum finished with result ${sums(askFirstOperand(), askSecondOperand())}`);
        result = `\nOperation sum finished with result ${result}`;
    } else if (operator === `-`) {
        alert(`Operation diff finished with result ${difference(askFirstOperand(), askSecondOperand())}`);
        result = `\nOperation diff finished with result ${result}`;
    } else if (operator === `*`) {
        alert(`Operation mult finished with result ${multiplies(askFirstOperand(), askSecondOperand())}`);
        result = `\nOperation mult finished with result ${result}`;
    } else if (operator === `/`) {
        alert(`Operation div finished with result ${divides(askFirstOperand(), askSecondOperand())}`);
        result = `\nOperation div finished with result ${result}`;
    } else if (operator === `sin`) {
        alert(`Operation sin finished with result ${sinus(askFirstOperand())}`);
        result = `\nOperation sin finished with result ${result}`;
    } else if (operator === `history`) {
        showsHistory(resultsArr);
    }
    resultsArr.push(result);
} while (confirm('Any more calculations?'));
