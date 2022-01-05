/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет) - инвертирует true или false
*/

var currentYear = 2018
var carName = 'Ford'
var carYear = 2014
var carAge = currentYear - carYear

// если в.м. меньше 5 лет ...
// если в.м. больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщение

if (carAge < 5) {
  console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
  console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
} else {
  console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

// 0 null undefined '' NaN

var str = 'Hello'

if (4) {
  console.log('Значение true')
} else {
  console.log('Значение false')
}