const Task = require('./task')
const repoFactory = require('./repoFactory')

const task = new Task(repoFactory.task.get(2))
const user = repoFactory.user.get(2)
const project = repoFactory.project.get(2)

task.user = user
task.project = project

console.log(task)
task.save()