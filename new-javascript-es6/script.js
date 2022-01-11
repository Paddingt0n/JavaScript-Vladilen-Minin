// переменные LET / CONST

// let color = 'red'

// color = {color: 'yellow'}

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 500)
// }
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 500)
// }

// console.log(color)

// const HEX = '#ffaabb'

// document.querySelector('h1').style.color = HEX

// стрелочные функции

// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1993))

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(calculateAge(1990))

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1990))

// const getAge = (year) => new Date().getFullYear() - year;

// console.log(getAge(1990));

// const person = {
//   age: 25,
//   firstName: "Maxim",
//   logNameWithTimeout() {
//     window.setTimeout(() => {
//       console.log(this.firstName);
//     }, 1000);
//   },
// };

// // параметры по умолчанию

// const createPost = (title, text, date = new Date().toLocaleDateString()) => {
//   return { title, text, date };
// };

// const post = createPost("new year", "2022");
// console.log(post);

// Объекты 

const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')

console.log(ford)

const yearField = 'year'

const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,

    logFields() {
        const {name, year, model} = this
        console.log(name, model, year)
    }
}

console.log(bmw)

// операторы Rest и Spret 

// Spread
// function saveForm(data) {
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     ...data
//   }

//   console.log('Ford data:', formData)
// }

// Rest
function saveForm(...args) {
  
    const [title, text, description] = args
  
    const formData = {
      date: new Date().toLocaleDateString(),
      title, text, description
    }
  
    console.log('Ford data:', formData)
  }

  // строки 

const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
const yandex = `<li>${createLink({path: 'https://ya.ru', name: 'Yandex'})}</li>`


ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

// Классы и наследования

// RootElement <= Box <= instances

class RootElement {
    constructor(tagName = 'div') {
      this.$el = document.createElement(tagName)
      this.$el.style.marginBottom = '20px'
    }
  
    hide() {
      this.$el.style.opacity = '0'
    }
  
    show() {
      this.$el.style.opacity = '1'
    }
  
    append() {
      document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el)
    }
  }
  
  class Box extends RootElement {
    constructor(color, size = 150, tagName) {
      super(tagName)
      this.color = color
      this.size = size
    }
  
    create() {
      this.$el.style.background = this.color
      this.$el.style.width = this.$el.style.height = `${this.size}px`
  
      this.append()
  
      return this
    }
  }
  
  class Circle extends RootElement {
    constructor(color) {
      super()
  
      this.color = color
    }
  
    create() {
      this.$el.style.borderRadius = '50%'
      this.$el.style.width = this.$el.style.height = `120px`
      this.$el.style.background = this.color
  
      this.append()
  
      return this
    }
  }
  
  const redBox = new Box('white', 100, 'div').create()
  const blueBox = new Box('white').create()
  
  const circle = new Circle('white').create()
  
  circle.$el.addEventListener('mouseenter', () => {
    circle.hide()
  })
  
  circle.$el.addEventListener('mouseleave', () => {
    circle.show()
  })