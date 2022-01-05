console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3)
console.log(0xAB)
console.log(2e3)
console.log(NaN)
console.log(123 / 0)

let fortyTwo = 42
let delta = 8 / 3

console.log(fortyTwo.toString()) // перевод числа в строку
console.log((8 / 3).toFixed(3)) // округление до трех знаков после точки
console.log(+delta.toFixed(1)) // + превращает строку в число
console.log(parseFloat(delta.toFixed(2))) // 2.67 работает с дробными числами 
console.log(parseInt(delta.toFixed(2))) // работает с целыми числами 