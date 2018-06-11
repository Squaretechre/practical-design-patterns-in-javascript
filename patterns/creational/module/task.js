'use strict'
const TaskRepository = require('./taskRepository')

let Task = function(data) {
	this.name = data.name
	this.completed = false
}

Task.prototype.complete = function() {
	console.log('completing task: ' + this.name)
	this.completed = true;
}

Task.prototype.save = function() {
  console.log('saving task: ' + this.name)
  TaskRepository.save(this)
}

module.exports = Task