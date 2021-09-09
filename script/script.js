function askFirstOperand (operand) {
    let firstOperand = +prompt('Please enter the first operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('Please enter a NUMBER!');
        }
    }
    return firstOperand;
}

function askSecondOperand (operand) {
    let secondOperand = +prompt('Please enter second operand');
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('Please enter a NUMBER!');
        }
    }
    return secondOperand;
}

function sums (operand1, operand2) {
    return operand1 + operand2;
}

function difference (operand1, operand2) {
    return operand1 - operand2;
}

function multiplies (operand1, operand2) {
    return operand1 * operand2;
}

function divides (operand1, operand2) {
    return operand1 / operand2;
}

function sinus (operand) {
    return Math.sin(operand);
}

function showsHistory (arr) {
    alert(arr);
}

let result;
let resultsArr = [];

function main () {
    do {
        let operator = 0;
        operator = prompt(`Choose one of operations: +, -, *, /, sin or history`, `+`);
        if (operator === `+`) {
            result = `\nOperation sum finished with result ${sums(askFirstOperand(), askSecondOperand())}`;
            alert(result);
        } else if (operator === `-`) {
            result = `\nOperation diff finished with result ${difference(askFirstOperand(), askSecondOperand())}`;
            alert(result);
        } else if (operator === `*`) {
            result = `\nOperation mult finished with result ${multiplies(askFirstOperand(), askSecondOperand())}`;
            alert(result);
        } else if (operator === `/`) {
            result = `\nOperation div finished with result ${divides(askFirstOperand(), askSecondOperand())}`;
            alert(result);
        } else if (operator === `sin`) {
            result = `\nOperation sin finished with result ${sinus(askFirstOperand())}`;
            alert(result);
        } else if (operator === `history`) {
            showsHistory(resultsArr);
        }

        resultsArr.push(result);
    } while (confirm('Any more calculations?'));
}
main();