document.querySelector('button').addEventListener('click', function(event) {

    var value = document.querySelector('input').value

    var obj = {
        text: value
    }
    
    localStorage.setItem('headerText', value)

})

document.addEventListener('DOMContentLoaded', function() {
   
    var obj = JSON.parse(localStorage.getItem('headerText'))

    if (obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }
})