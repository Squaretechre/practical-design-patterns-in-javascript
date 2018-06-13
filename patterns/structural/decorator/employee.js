let Employee = function(name) {
  this.name = name
}

Employee.prototype.submitHoursWorked = function(hoursWorked) {
  console.log(`Saving ${hoursWorked} hours for ${this.name}`)
}

Employee.prototype.doWork = function() {
  console.log(`${this.name} is working away`)
}

Employee.prototype.notify = function(message) {
  console.log(`${this.name} received a notification: ${message}`)
}

module.exports = Employee