const Task = require('./task')

// create 4 copies of the Task object
let task1 = new Task('create a demo for constructors')
let task2 = new Task('create a demo for constructors')
let task3 = new Task('create a demo for constructors')
let task4 = new Task('create a demo for constructors')

task1.complete()
task2.save()
task3.save()
task4.save()