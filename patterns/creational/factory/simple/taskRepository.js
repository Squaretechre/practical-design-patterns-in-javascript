let taskRepository = function() {
  const get = function(id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'new task from db'
    }
  }

  const save = function(task) {
    console.log(`Saving ${task.name} to the db`)
  }

  console.log('newing up a task repo')
  return {
    get,
    save,
  }
}

module.exports = taskRepository
