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