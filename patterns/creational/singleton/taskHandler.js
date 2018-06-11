const repository = require('./repository')

let taskHandler = function() {
  return {
    save: function() {
      repository.save('Hi from taskHandler')
    }
  }
}

module.exports = taskHandler()
