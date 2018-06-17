const ObservableTask = require('./observableTask')

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

let task1 = new ObservableTask({ name: 'create a demo for constructors', user: 'JohnDoe'})

let notificationService = new NotificationService()
let loggingService = new LoggingService()
let auditingService = new AuditingService()

task1.addObserver(notificationService.update)
task1.addObserver(loggingService.update)
task1.addObserver(auditingService.update)
task1.save()

task1.removeObserver(auditingService.update)
task1.save()