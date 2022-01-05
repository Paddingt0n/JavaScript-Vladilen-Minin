let person = {
    name: 'Max',
    year: 1990,
    family: ['Masha', 'Dima'],
    car: {
        year: 2010,
        model: 'Ford'
    }
}

console.log(person)
console.log(person.car.year)
console.log(person['year'])

var field = 'car'
console.log(person[field].year)