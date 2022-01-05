// let div = document.getElementById('playground')
// let p = document.getElementsByClassName('text')
// let h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)

let div = document.querySelector('#playground')
let p = document.querySelector('.text')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

div.innerHTML = '<h2 style="color: red;">from</h2>'
h1.textContent = 'change'

console.log(input.value)
console.log(div.innerHTML)
console.log(div)
console.log(p)
console.log(h1.textContent)

