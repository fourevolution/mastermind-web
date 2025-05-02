const firstName = 'Ivan'
const lastName = 'Kalinin'
const age = 19

function getAge() { return age }

// Шаблонизация, мультистрока
const multiString = `
    Hello, my name is ${firstName}! 
    My age is ${getAge()}. ${getAge() > 18 ? 'Я совершеннолетний!' : 
        'Я несовершеннолетний :\'('
    }
`
console.log(multiString)

// Методы строк
console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase()) 
console.log(firstName.charAt(0)) // n-я буква строки
console.log(firstName.indexOf('a'))

console.log(firstName.toLowerCase().startsWith('iva'))
console.log(lastName.toUpperCase().endsWith('ININ'))

console.log('Bombardiro Crocodillo\n'.repeat(7))

const password = '    my password      '
console.log(password.trim())