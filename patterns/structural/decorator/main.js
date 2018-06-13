const UrgentTask = require('./urgentTask')
const Task = require('./task')
const Employee = require('./employee')
const BurnedOutEmployee = require('./burnedOutEmployee')

let task = new Task('Non-urgent task')
task.complete()
task.save()
console.log(task)

let urgentTask = new UrgentTask('This is urgent', 1)
urgentTask.complete()
urgentTask.save()
console.log(urgentTask)

let jane = new Employee('Jane')
jane.doWork()
jane.submitHoursWorked(35)

let john = new BurnedOutEmployee('John', jane, 40)
john.doWork()
john.submitHoursWorked(45)

let foo = new BurnedOutEmployee('Foo', jane, 40)
foo.doWork()
foo.submitHoursWorked(30)

