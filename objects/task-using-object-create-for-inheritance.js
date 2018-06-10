'use strict'

let task = {
	title: 'My title',
	description: 'My description'
}

Object.defineProperty(task, 'toString', {
	value: function toString() {
		return this.title + ' ' + this.description
	},
	writable: false,
	enumerable: false,
	configurable: false
})

let urgentTask = Object.create(task)

Object.defineProperty(urgentTask, 'toString', {
	value: function toString() {
		return this.title + ' is urgent'
	},
	writable: false,
	enumerable: false,
	configurable: false
})

console.log(urgentTask.toString())

