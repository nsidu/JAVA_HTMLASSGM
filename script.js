// Declare variables of different data types
let userName = "Okon Akpan"; // string
let userAge = 75; // number
let isEntry = true; // boolean

// Define functions to perform simple operations
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

// Add event listeners for buttons
document.getElementById('addButton').addEventListener('click', () => {
    performOperation(addNumbers);
});

document.getElementById('subtractButton').addEventListener('click', () => {
    performOperation(subtractNumbers);
});

document.getElementById('divideButton').addEventListener('click', () => {
    performOperation(divideNumbers);
});

document.getElementById('multiplyButton').addEventListener('click', () => {
    performOperation(multiplyNumbers);
});

function performOperation(operationFunction) {
    const number1 = parseFloat(document.getElementById('numberOne').value);
    const number2 = parseFloat(document.getElementById('numberTwo').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = "Please enter valid numbers";
        resultDiv.classList.remove('hidden');
        return;
    }

    const result = operationFunction(number1, number2);
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.remove('hidden');
}

// Toggle text visibility
document.getElementById('toggleTextButton').addEventListener('click', () => {
    const toggleText = document.getElementById('toggleText');
    toggleText.classList.toggle('hidden');
});

// Change background color
document.getElementById('changeColorButton').addEventListener('click', () => {
    const colorInputValue = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorInputValue;
});

// Chart.js example
document.addEventListener('DOMContentLoaded', () => {
    const chartContext = document.getElementById('chartCanvas').getContext('2d');
    const exampleChart = new Chart(chartContext, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Sales',
                data: [10, 15, 20, 25, 30, 35],
                backgroundColor: [
'rgba(75, 192, 192, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
'rgba(75, 192, 192, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)',
'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Call the functions and use console.log() to print output and debug code
console.log("Addition of 100 and 20: ", addNumbers(100, 20));
console.log("Subtraction of 100 from 20: ", subtractNumbers(100, 20));
console.log("Division of 100 by 20: ", divideNumbers(100, 20));
console.log("Multiplication of 100 and 20: ", multiplyNumbers(100, 20));

// Printing variable values to the console
console.log("Name: ", userName);
console.log("Age: ", userAge);
console.log("Is Entry: ", isEntry);

