var person = {
   age: 28,
   name: 'Max',
   job: 'Frontend',
   displayInfo: function(ms) {
      var self = this

      setTimeout(function(){
         console.log('Name: ', self.name)
         console.log('Job: ', self.job)
         console.log('Age: ', self.age)
      }, ms)
   }
}

person.displayInfo(5000)