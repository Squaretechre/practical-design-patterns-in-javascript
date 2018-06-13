const Task = require('./task')

let myTask = new Task('Legacy Task')
myTask.complete()
myTask.save()


let urgentTask = new Task('Urgent Task')
urgentTask.priority = 2
urgentTask.notify = function() {
  console.log('notifying important people')
}
urgentTask.complete()
urgentTask.save = function() {
  this.notify()
  Task.prototype.save.call(this)
}

urgentTask.save()