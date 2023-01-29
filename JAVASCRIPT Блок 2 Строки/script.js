var str1 = 'Hello world'
var str2 = "Hello world 2"

var personName = 'Виктор'

var message = 'Человека зовут "' + personName + '"'
var message2 = "Человека зовут '" + personName + "'"
var message3 = 'Человека зовут \'' + personName + '\''

console.log(str1)
console.log(message)
console.log(message2)
console.log(message3)

var newMessage = 'Hello world!!!'

console.log(newMessage.length) // .length показывает колличество символов
console.log(newMessage.toUpperCase()) // .toUpperCase() переводит строку к верхнему регистру
console.log(newMessage.toLowerCase()) // .toLowerCase() переводит строку к нижнему регистру
console.log(newMessage.charAt(1)) // .charAt() показывает символ по номеру
console.log(newMessage.indexOf('World')) // .indexOf() находит в строке нужную строку по порядку символа
console.log(newMessage.substr(1, 4)) // .substr() забирает подстроки у определенных строк
console.log(newMessage.substring(1, 3)) // .substring() получаем подстроку до финишного значения
