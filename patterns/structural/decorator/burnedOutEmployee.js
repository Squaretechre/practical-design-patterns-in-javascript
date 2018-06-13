const Employee = require('./employee')

let BurnedOutEmployee = function(name, manager, averageHoursBeforeBurnout) {
  this.name = name
  this.manager = manager
  this.averageHoursBeforeBurnout = averageHoursBeforeBurnout
}

BurnedOutEmployee.prototype = Object.create(Employee.prototype)

BurnedOutEmployee.prototype.submitHoursWorked = function(hoursWorked) {
  let employeeIsBurnedOut = hoursWorked >= this.averageHoursBeforeBurnout
  if(employeeIsBurnedOut) {
    this.manager.notify(`Burnout notice for ${this.name}`)
  }
  Employee.prototype.submitHoursWorked.call(this, hoursWorked)
}

module.exports = BurnedOutEmployee