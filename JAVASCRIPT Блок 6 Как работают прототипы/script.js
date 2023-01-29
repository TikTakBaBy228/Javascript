function Car(name, year) {
   this.name = name
   this.year = year
}

Car.prototype.getAge = function() {
   return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

var ford = new Car('Ford', 2015)
ford.color = 'red'
var bmw = new Car('BMW', 2017)
console.log(ford)
console.log(bmw)
