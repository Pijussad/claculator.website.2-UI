// calculator.js


function buttonClicked(value) {
    // Handle button click logic here
    // For now, we'll just play/pause the video
    var video = document.getElementById('video-bg');
    
    if (video.paused) {
        video.play();
    }
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
        const result = eval(expression);
        document.getElementById('previousEntry').value = expression;
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        document.getElementById('previousEntry').value = '';
        document.getElementById('currentEntry').value = 'Error';
    }
}

function calculateSquare() {
    try {
        const expression = document.getElementById('currentEntry').value;
        const result = Math.pow(eval(expression), 2);
        document.getElementById('previousEntry').value = expression;
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        document.getElementById('previousEntry').value = '';
        document.getElementById('currentEntry').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        const expression = document.getElementById('currentEntry').value;
        const result = Math.sqrt(eval(expression));
        document.getElementById('previousEntry').value = expression;
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        document.getElementById('previousEntry').value = '';
        document.getElementById('currentEntry').value = 'Error';
    }
}

function calculatePower() {
    let base = prompt('Enter the base:');
    let exponent = prompt('Enter the exponent:');
    
    try {
        const result = Math.pow(parseFloat(base), parseFloat(exponent));
        document.getElementById('previousEntry').value = `${base}^${exponent}`;
        document.getElementById('currentEntry').value = result;
    } catch (error) {
        document.getElementById('previousEntry').value = '';
        document.getElementById('currentEntry').value = 'Error';
    }
}
