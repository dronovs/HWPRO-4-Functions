function askOperand () {
    let operand = +prompt('Please enter operand');
        while (isNaN(operand)) {
            operand = +prompt('Please enter a NUMBER!');
        }
    return operand;
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

function main () {
    let result;
    let resultsArr = [];

    do {
        let operator = 0;
        operator = prompt(`Choose one of operations: +, -, *, /, sin or history`, `+`);
        if (operator === `+`) {
            result = `\nOperation sum finished with result ${sums(askOperand(), askOperand())}`;
            alert(result);
        } else if (operator === `-`) {
            result = `\nOperation diff finished with result ${difference(askOperand(), askOperand())}`;
            alert(result);
        } else if (operator === `*`) {
            result = `\nOperation mult finished with result ${multiplies(askOperand(), askOperand())}`;
            alert(result);
        } else if (operator === `/`) {
            result = `\nOperation div finished with result ${divides(askOperand(), askOperand())}`;
            alert(result);
        } else if (operator === `sin`) {
            result = `\nOperation sin finished with result ${sinus(askOperand())}`;
            alert(result);
        } else if (operator === `history`) {
            showsHistory(resultsArr);
        }

        resultsArr.push(result);
    } while (confirm('Any more calculations?'));
}
main();