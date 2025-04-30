const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const sumbitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const mulBtn = document.getElementById('mul')
const divBtn = document.getElementById('div')

let action = '+'

plusBtn.onclick = function () { action = '+' }
minusBtn.onclick = function () { action = '-' }
mulBtn.onclick = function () { action = '*' }
divBtn.onclick = function () { action = '/' }


function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function calculate(inp1, inp2, action) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2
    } else if (action == '*') {
        return num1 * num2
    } else if (action == '/') {
        return num1 / num2
    }
    else {
        return console.error('Underfined Action');
    }
}

sumbitBtn.onclick = function () {
    const result = calculate(input1, input2, action)
    printResult(result)
}