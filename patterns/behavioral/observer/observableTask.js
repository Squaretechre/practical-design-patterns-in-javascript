const ObserverList = require('./observerList')
const Task = require('./task')

let ObservableTask = function(data) {
  Task.call(this, data)
  this.observers = new ObserverList()
}

ObservableTask.prototype.addObserver = function(observer) {
  this.observers.add(observer)
}

ObservableTask.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0))
}

ObservableTask.prototype.notify = function(context) {
  let observerCount = this.observers.count()
  for(let i=0; i < observerCount; i++) {
    this.observers.get(i)(context)
  }
}

ObservableTask.prototype.save = function() {
  this.notify(this)
  Task.prototype.save.call(this)
}

module.exports = ObservableTask