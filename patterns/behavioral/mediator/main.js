const Task = require('./task')
const mediator = require('./mediator')

let NotificationService = function() {
  this.update = function(task) {
    console.log(`Notifying ${task.user} for task ${task.name}`)
  }
}

let LoggingService = function() {
  this.update = function(task) {
    console.log(`Logging ${task.user} for task ${task.name}`)
  }
}

let AuditingService = function() {
  this.update = function(task) {
    console.log(`Auditing ${task.user} for task ${task.name}`)
  }
}

let task1 = new Task({ name: 'create a demo for constructors', user: 'JohnDoe'})

let notificationService = new NotificationService()
let loggingService = new LoggingService()
let auditingService = new AuditingService()

mediator.subscribe('complete', notificationService, notificationService.update)
mediator.subscribe('complete', loggingService, loggingService.update)
mediator.subscribe('complete', auditingService, auditingService.update)

task1.complete = function() {
  mediator.publish('complete', this)
  Task.prototype.complete.call(this)
}
task1.complete()