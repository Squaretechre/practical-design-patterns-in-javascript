const Task = require('./task')

const UrgentTask = function(name, priority) {
  Task.call(this, name)
  this.priority = priority
}

// create a new object from Task.prototype
// UrgentTask.prototype = Task.protoype would assign Task's prototype to UrgentTask and any changess to UrgentTask.prototype would affect Task
UrgentTask.prototype = Object.create(Task.prototype)

UrgentTask.prototype.notify = function() {
  console.log('notifying important people')
}

UrgentTask.prototype.save = function() {
  this.notify()
  Task.prototype.save.call(this)
}

module.exports = UrgentTask