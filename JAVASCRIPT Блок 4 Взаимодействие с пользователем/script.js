document.querySelector('#alert').addEventListener('click', function() {
    alert('Вы успешно кликнули по кнопке!')
})

document.querySelector('#confirm').addEventListener('click', function() {
    var decision = confirm('Вы уверены в том что хотите нажать на кнопку?')
    
    if (decision) {
        alert('Вы успешно кликнули по кнопке!')
    }
})

document.querySelector('#prompt').addEventListener('click', function() {
    var age = prompt('Введите свой возраст', 18)

    if (age >= 18) {
        alert('Вы можете пройти')
    } else {
        alert('Вы еще слишком молоды')
    }
})

console.log('console.log') // вывод в консоль
console.warn('console.warn') // вывод предупреждений в консоль
console.info('console.info') // определенная информация
console.error('console.error') // вывод ошибок
