'use strict'

// let task = {}
// task.title = 'My task'
// task.description = 'My description'
// let task = Object.create(Object.prototype)
// let task = new Object()

let task = {
	title: 'My title',
	description: 'My description'
}

task.toString = function toString() {
	return this.title + ' ' + this.description	
}

// hide toSlug when task if logged by setting enumerable false
// prevent toSlug being reassigned using writable false
// prevent these settings from being updated in future using by setting configurable to false
Object.defineProperty(task, 'toSlug', {
	value: function toSlug() {
		return this.title.toLowerCase().replace(' ', '-')
	},
	writable: false,
	enumerable: false,
	configurable: false
})

// enumerable will still be false as toSlug is no longer configurable
// cannot redefine property: toSlug
Object.defineProperty(task, 'toSlug', {
	enumerable: true
})

// can't be reassigned as toSlug is not writable
// receive TypeError cannot assign to read only property
task.toSlug = 'hi'

console.log(task)
console.log(task.toString())
console.log(task.toSlug())