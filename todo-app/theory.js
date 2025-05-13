// Object Theory

const Person = {
    firstName: 'Ivan',
    lastName: 'Kalinin',
    year: 2006,
    hasGirlfriend: false,
    languages: ['ru', 'en'],

    getFullName: function () { 
        console.log(Person.firstName + ' ' + Person.lastName)
    }
}
console.log(Person.year)
console.log(Person['languages'])
const key = 'hasGirlfriend'
console.log(Person[key])
Person[key] = true
console.log(Person[key])


const names = ['Владилен', 'Елена', 'Игорь', 'Ксения']
names.push('Алена') // В конец
names.unshift('Иван') // Вставка в начало * ТЯЖЕЛАЯ ОПЕРАЦИЯ
names.shift() // Удаление первого элемента в массиве и возвращает его
names.pop() // Удаление последнего элемента и возвращает его
names.reverse() // Разворачивает массив, но мутирует его
names.toReversed() // Возвращает новый масссив без его изменения * НОВЫЙ МЕТОД
console.log("Names: ", names) 

const letters = ['d', 'f', 'c', 'b', 'g', 'a', 'd']
// console.log(letters.sort(
//     function (a, b) {
//         return b.charCodeAt(0) - a.charCodeAt(0)
//     })
// ) // Сортировка по правилу * по убыванию

// Мутирует массив
console.log(letters.sort())
console.log(letters)

// Не мутирует
console.log(letters.toSorted())

// Мутирует массив
console.log(names.splice(1, 1))

// Не мутирует (не изменяет изначальный)
console.log(names.toSpliced(1, 2))

// Поиск индекса по ключу
const greatWoman = 'Ксения'
console.log(names.indexOf(greatWoman))

// Изменение элемента по копии
newNames = names.with(1, 'Елена Великая!')
console.log(names + "\n" + newNames)

// метод MAP - БАЗАААА
// Применяем для каждого элемента функцию
const capitalNames = names.map(function
(name) {
    const newName = name.toUpperCase() + '_UwU'
    return newName
})

console.log(capitalNames)

// Замена метода with
const laskaNames = names.map(function
    (name, index) {
        if (index == 1) {
            const laskovoName = name.toLowerCase() + 'чка'
            return laskovoName
        } else {
            return name
        }
    })

console.log(laskaNames)
console.log(laskaNames.includes('Елена')) // Проверка наличия элемента
console.log(laskaNames.indexOf('Елена') == -1) // Замена includes

const address = [
    { country: 'Россия', city: 'Евпатория', street: 'Партизанская', home: 9 },
    { country: 'Россия', city: 'Екатеринбург', street: '3 Марта', home: 15 },
    { country: 'Россия', city: 'Одинцово', street: 'Светлая', home: 19 },
]

// Поиск по полям
address.find(function
    (addr) {
    if (addr.city == "Одинцово") {
        return true;
    }
})

const employees = [
    { name: 'Иван', budget: 7400 },
    { name: 'Мария', budget: 5200 },
    { name: 'Глеб', budget: 6800 },
    { name: 'Владислав', budget: 5700 },
]

// Поиск по полям, но лучше)) * Функциональное программиование
const finded = employees.find((employee) => employee.budget === 7400)

// Возвращает index
const findedIndex = employees.findIndex((employee) => employee.budget === 7400) 
console.log(finded)

// Фильтрация массива по условию
const filtered = employees.filter(function (employee) {
    return employee.budget > 6000
})
console.log(filtered)
let sumBudget = 0
filtered.forEach(function(p) {
    sumBudget += p.budget
})

console.log(sumBudget)

// Более лаконичное решение     
const sumBudgetNew = employees
    .filter((p) => p.budget > 6000)
    .map((p) => p.budget)
    .reduce((acc, p) => acc + p, 0)

console.log(sumBudgetNew)

// Reverse string 
const string = 'Привет, как дела?'
const reversedString = string
    .split('')
    .toReversed()
    .join('')   

console.log(reversedString)