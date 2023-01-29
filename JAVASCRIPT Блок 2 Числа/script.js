console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3) //2.66666666
console.log(0xAB)
console.log(2e3) // 2000
console.log(NaN) // Not a Number
console.log(typeof NaN)
console.log(123 / 0) // infinity

var fortyTwo = 42
var delta = 8 / 3

console.log(fortyTwo.toString())
console.log(delta.toFixed(3))
console.log(+delta.toFixed(3))
console.log(+delta.toFixed(1) + 4)
console.log(parseFloat(delta.toFixed(2))) // парсит число 2.67
console.log(parseInt(delta.toFixed(2))) // получает только целые числа

console.log(isNaN(NaN))
console.log(isNaN(45))

console.log(isFinite(1 / 0)) // false
console.log(isFinite(9999999999)) // true
