/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;
const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subTotalValue = parseFloat(document.getElementById('subtotal').value);

    const membershipCheckbox = document.getElementById('member');
    const applyDiscount = membershipCheckbox.checked;

    if (applyDiscount) {
        subTotalValue *= 0.8;
    }

    const totalDue = subTotalValue.toFixed(2);
    document.getElementById('total').textContent = `$${totalDue}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;/* Output Sum of Org. Array */


let sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;