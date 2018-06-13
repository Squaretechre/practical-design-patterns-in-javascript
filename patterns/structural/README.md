# Structural Design Patterns

Concerned with how objects are made up and simplify relationships between objects.

- Deal with the relationship of objects
- Extend functionality
- Simplify functionality

```js
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
```

BurnedOutEmployee assigns a copy of the Employee prototype to it's own and then decorates the `submitHoursWorked` method with it's specialisation of sending a notification, then delegates to the original implementation on the Employee prototype: 

```js
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
```