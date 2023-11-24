function buttonClicked(value) {
    var video = document.getElementById('video-bg');
    
    if (video.paused) video.play();

    if (!isNaN(value) || value === '.') appendToResult(value);
    else handleOperator(value);
}

function appendToResult(value) {
    document.getElementById('currentEntry').value += value;
}

function clearResult() {
    document.getElementById('previousEntry').value = '';
    document.getElementById('currentEntry').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('currentEntry').value;
        let result;

        if (expression.includes('√')) result = Math.sqrt(parseFloat(expression.replace(/[^\d.]/g, '')));
        else if (expression.includes('^')) result = calculateExponentiation(expression);
        else {
            result = eval(expression);
            if (!isFinite(result)) throw new Error("Division by zero");
        }

        document.getElementById('previousEntry').value = expression;
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        handleError();
    }
}

function calculateExponentiation(expression) {
    const [base, exponent] = expression.split('^').map(parseFloat);

    if (isNaN(base) || isNaN(exponent)) throw new Error('Invalid expression for exponentiation');

    return Math.pow(base, exponent);
}

function handleOperator(operator) {
    appendToResult(operator);
}

function calculatePercentage() {
    try {
        const expression = document.getElementById('currentEntry').value;
        const result = expression.endsWith('%') ? parseFloat(expression.slice(0, -1)) / 100 : eval(expression) / 100;

        document.getElementById('previousEntry').value = expression.endsWith('%') ? expression : expression + '%';
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        handleError();
    }
}

function calculateFactorial() {
    try {
        const num = parseFloat(document.getElementById('currentEntry').value);
        if (isNaN(num) || num < 0 || num % 1 !== 0) throw new Error('Invalid input for factorial');
        const result = factorial(num);
        setResultAndPreviousEntry(result, num + '!');
    } catch (error) {
        handleError();
    }
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function calculateSquareRoot() {
    try {
        const expression = document.getElementById('currentEntry').value;
        const result = Math.sqrt(eval(expression));
        setResultAndPreviousEntry(result, expression);
    } catch (error) {
        handleError();
    }
}

function setResultAndPreviousEntry(result, expression) {
    document.getElementById('previousEntry').value = expression;
    document.getElementById('currentEntry').value = result;
}

function handleError() {
    setResultAndPreviousEntry('Error', '');
    setTimeout(clearResult, 2000);
}
