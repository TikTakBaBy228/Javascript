var cars = ['Ford','Mazda','Kia','BMW']
//            0      1       2     3
console.log(cars)
console.log(cars[2])

console.log(cars.length) // длина массива

cars.push('Audi') // добавляет в конец
console.log(cars)

var audi = cars.pop() //Удаляет и возвращает последний эллемент
console.log(cars, audi)

var ford = cars.shift() //Удаляет и возвращает первый элемент
console.log(cars, ford)

cars.unshift(audi) //Добавляет в начало
console.log(cars)

var index = cars.indexOf('Kia')
var kia = cars[index]

console.log(kia)
