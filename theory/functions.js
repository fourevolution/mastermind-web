//  **** Function declaration

function greet(name) {
    console.log('1. Hello,', name, '!')
}

//  **** Function Expression
const greet2 = function (name) {
    console.log('2. Hello,', name, '!')
}

greet('Petya')
greet2('Petya')

//  ****  Function declaration поддерживает Hoisting
// хоистинг - выполнение функции до ее инициализации
// Function expression - не поддерживает

/*
    MDN web docs: 

    Поднятие (hoisting) — термин, который вы не встретите в документации JavaScript.
    Поднятие задумывалось как общий способ мышления о том, как контекст исполнения
    (в частности, фазы создания и исполнения) работает в JavaScript.
    Однако, hoisting может привести и к недоразумениям. Например, hoisting учит,
    что объявление переменной или функции физически перемещается в начало вашего кода,
    хотя в действительности этого не происходит.
    На самом же деле, объявления переменных и функций попадают в память
    в процессе фазы компиляции, но остаются в коде на том месте, где вы их объявили.
*/

// console.dir(greet)

// Анонимная функция таймаут
setTimeout(function() {
    greet('Gregory')
}
, 1500)

// Reload page every second =)) STUPID!!!
let counter = 0
const interval = setInterval(function() {
    if (counter < 5) {
        window.location.reload()
    } else {
        clearInterval(interval)
    }
}, 10e3)

// **** Arrow Functions
// Comparison funcdec 7 arrow functions

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// Default Parameters
const sum = (a = 5, b = a / 10) => a + b
console.log(sum(40, 53), sum(24), sum())

// Множественные значения - REST operator
const sumAll = (...numbers) => numbers.reduce((acc, cur) => acc += cur, 0)
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9))

// **** Closures (Замыкания) 

function createPerson(name) {
    return function (lastName) {
        console.log(name + ' ' + lastName)
    }
}

// Замыкание в данном случае позволяет нам изменять поведение функции через
// Оборачивание ее в другую функцию (Похоже на декоратор)

const addLastName = createPerson('Владилен')
lastNames = ['Брусникин', 'Гаврилин', 'Минин', 'Пожарский']
for (let i = 0; i < lastNames.length; i++) {
    addLastName(lastNames[i])
}