const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // 10^3 
const big = 1_000_000_000 

// Максимальнео число, с которым безопасно производить операции
// Безопасно - без утечки памяти и переполнения

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)

// Максимальное число, которое можно вычислить в JS
console.log(Number.MAX_VALUE)

// Возвращает нам infinity
console.log(Number.MAX_VALUE + Number.MAX_VALUE)

// Бесконечность
console.log(Number.POSITIVE_INFINITY)
console.log(1 / 0)

console.log(Number.isFinite(Number.POSITIVE_INFINITY))

// NaN
const weird = 23 / undefined
console.log(Number.isNaN(weird))

// Парсинг
const strInt = '42'
const strFloat = '42.42'

// Стандартный метод
console.log(Number(strInt), Number(strFloat))

console.log(parseInt(strInt))
console.log(parseFloat(strFloat))

// Выводит толькол полную часть
console.log(parseInt(strFloat))

// Еще один способ приведения
console.log(+strInt, +strFloat)

// База (Погрешность в JS)
console.log(0.1 + 0.2) 
console.log(+(0.1 + 0.2).toFixed(1))

// BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) * 134325n)
console.log(-42n)
console.log(5n / 2n)

// MATH - Math
console.log("e: ", Math.E)
console.log("pi: ", Math.PI)

nums = [54, 785, 2134, 9879,34234, 6546, 87867, 2342354, 85787869,544]
console.log(Math.floor(
    Math.sqrt(
        Math.abs(
            Math.pow(4, 27) * Math.cos(73 * Math.max(num)
        )
    )
)))

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1) + min
}

// Игра с повышением вероятности (На выживание)
const randNums = []
const N = 1e2
for (let i = 0; i < N; i++ ) {
    randNums[i] = Math.trunc(getRandomNumber(i, N))
}

console.log(randNums)