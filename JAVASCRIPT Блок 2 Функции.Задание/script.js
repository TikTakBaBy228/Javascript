var carName = 'Ford'
var carYear = 2008
var personYear = 1990

function calculateAge(year) {
    var currentYear = 2023
    var result = currentYear - year
    return result
}

function checkAngLogAge(year) {
    if (calculateAge(year) < 10) {
        console.log('Возраст машины меньше 10 лет')
    } else {
        console.log('Возраст машины больше 10 лет')
    }
}

checkAngLogAge(carYear)
checkAngLogAge(personYear)