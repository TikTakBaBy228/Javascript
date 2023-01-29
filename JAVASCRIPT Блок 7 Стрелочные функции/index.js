// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => {
    // return new Date().getFullYear() - year        
// }

const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout: () => {
        window.setTimeout(function() {
            console.log(this.firstName)
        }.bind(this), 1000)
    }
}
