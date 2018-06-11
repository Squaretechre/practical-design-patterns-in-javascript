const Task = require('./task')
const simpleRepoFactory = require('./simpleRepoFactory')

// simple factory
// --------------
const task2 = new Task(simpleRepoFactory.getRepo('task').get(2))
const user2 = simpleRepoFactory.getRepo('user').get(2)
const project2 = simpleRepoFactory.getRepo('project').get(2)

task2.user = user2
task2.project = project2

console.log(task2)
task2.save()