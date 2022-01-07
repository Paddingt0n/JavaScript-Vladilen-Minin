console.error('___________Взаимодействие с пользователем______________')
document.querySelector('#alert').addEventListener('click', function() {
    alert('вы нажали на alert')
})

document.querySelector('#confirm').addEventListener('click', function() {
    let decision = confirm('вы нажали на confirm')

    console.log(decision)

    if (decision) {
        alert('вы нажали на alert')
    }
})

document.querySelector('#prompt').addEventListener('click', function(){
   let age = prompt('вы нажали prompt', 18)

   if (age >= 18 ) {
        alert('вы старше 18')
   } else {
       alert('вы младше 18')
   }
})

console.warn ('fdsdfs')
console.info('info')

console.error('_______________________Методы массивов________________')
let str = '1,2,3,4,5,6,7,8'

let array = str.split(',') // метод из строки преобразует массив

// console.log(array.join(';')) // соединить все элементы массива через join
// console.log(array.reverse()) // обратный порядок


array.splice(1, 0, '11', '22')

var newArray = array.concat([1, 2]) // метод concat клонирует новый массив

console.log(newArray)

let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Vlad', age: 20}
]

console.log(objArr)

let foundPerson = objArr.find(function(person) {
    return person.age === 20
})

console.log(foundPerson)

let oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !== 0 // если i / 2 и остаток не равен 0, то в массив записвается это число
})

console.log(oddArray)



let numArray = array.map(function(i) {
    return parseInt(i)
})
console.log(numArray)

console.error('_______________________Объект Math________________')

let num = 2.4

console.log(Math.random())
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.error('_______________________Объект JSON________________')

let presonMax = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Ford'
    },
    job: 'Frontend',
    friends: ['Elena', 'Igor']
}

let strMax = JSON.stringify(presonMax)

console.log(strMax)
console.log(JSON.parse(strMax))

console.error('_______________________Дата и время ________________')

let date = new Date()
console.log(date)

console.error('______________Хранение данных в localStorage ________________')

document.querySelector('#btn').addEventListener('click', function(event) {

    var value = document.querySelector('input').value
  
    var obj = {
      text: value
    }
  
    localStorage.setItem('headerText', JSON.stringify(obj))
  
  })
  
  document.addEventListener('DOMContentLoaded', function() {
  
    var obj = {} // undefined
  
    try {
      obj = JSON.parse(localStorage.getItem('headerText'))
    } catch(e) {}
    
    // undefined . text
    if (obj && obj.text && obj.text.trim()) {
      document.querySelector('#h2').textContent = obj.text
    }
  })