let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
let out_arr = document.getElementById('out_arr');
let str = ' ';
for (let i = 0; i< worker.length; i++  ) {
if (worker[i]!==undefined) str +=i+' - '+worker[i]+'<br>';
}
out_arr.innerHTML = str;

var cars = ['Ford', 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

// добавит в конец
cars.push('Audi')
console.log(cars)

// удаляет и возвращает последний элемент
var audi = cars.pop()
console.log(cars, audi)

// удалять и возвращать первый элемент 
var ford = cars.shift()
console.log(cars, ford)

// добавляет в начало 
cars.unshift(audi)
console.log(cars)

var index = cars.indexOf('Kia')
var kia = cars[index]

console.log(kia)