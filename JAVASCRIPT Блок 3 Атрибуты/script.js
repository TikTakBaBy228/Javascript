var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'http://ya.ru')
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'

console.log(a.attributes)

