// revealing module pattern

let taskRepository = function() {

  // private database
  // still visible to exported api due to how js closures work
  const db = {}

  const get = function(id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'new task from db'
    }
  }

  const save = function(task) {
    console.log(`Saving ${task.name} to the db`)
  }

  // API of the module
  return {
    get,
    save,
  }
}

module.exports = taskRepository()
