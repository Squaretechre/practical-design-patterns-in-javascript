// name is the only property unique to a task
// move everything else out to a flyweight
let Task = function(data) {
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed)
  this.name = data.name
}

Task.prototype.getPriority = function() {
  return this.flyweight.priority
}

function Flyweight(project, priority, user, completed) {
  this.priority = priority
  this.project = project
  this.user = user
  this.completed = completed
}

let FlyweightFactory = function() {
  let flyweights = {}

  let get = function(project, priority, user, completed) {
    let flyweightId = `${project}${priority}${user}${completed}`
    let flyweightExists = flyweights[flyweightId]
    if (flyweightExists) return flyweights[flyweightId]
    flyweights[flyweightId] = new Flyweight(project, priority, user, completed)
    return flyweights[flyweightId]
  }

  let getCount = function() {
    let count = 0
    for (let flyweight in flyweights) count++
    return count
  }

  return {
    get,
    getCount,
  }
}()

function TaskCollection() {
  let tasks = {}
  let count = 0
  let add = function(data) {
    tasks[data.name] = new Task(data)
    count++
  }
  let get = function(name) {
    return tasks[name]
  }
  let getCount = function() {
    return count
  }
  return {
    add,
    get,
    getCount,
  }
}

let tasks = new TaskCollection()

let projects = ['none', 'courses', 'training', 'project']
let priorities = [1, 2, 3, 4, 5]
let users = ['John', 'Erica', 'Amanda', 'Nathan']
let completed = [true, false]

let initialMemory = process.memoryUsage().heapUsed

for (let i = 0; i < 1000000; i++) {
  tasks.add({
    name: `task ${i}`,
    priority: priorities[Math.floor((Math.random() * 5))],
    project: projects[Math.floor((Math.random() * 4))],
    user: users[Math.floor((Math.random() * 4))],
    completed: completed[Math.floor((Math.random() * 2))],
  })
}

let afterMemory = process.memoryUsage().heapUsed

console.log(`used memory: ${(afterMemory - initialMemory) / 1000000} MB`)
console.log(`tasks: ${tasks.getCount()}`)
console.log(`flyweights: ${FlyweightFactory.getCount()}`)