let carName = 'Ford'
let carYear = 2010
let personYear = 1990

function calculateAge(year) {
    let currentYear = 2018
    let result = currentYear - year
    return result  
}

function checkAngLogAge(year, name, compareTo) {
    if (calculateAge(year) < 10) {
        console.log('возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }
}

checkAngLogAge(carYear, 'car', 8)
checkAngLogAge(personYear, 'human', 30)
