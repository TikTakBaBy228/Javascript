var divs = document.querySelectorAll('div')

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        console.log(this.getAttribute('id'))
    })
}
// если добавить параметр false то выполнение будт на погружение. а если true то на всплытие
