let taskRepository = {
  tasks: {},
  commands: [],

  get: function (id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'new task from db'
    }
  },

  save: function (task) {
    taskRepository.tasks[task.id] = task
    console.log(`Saving ${task.name} to the db`)
  },

  replay: function() {
    for(let i=0; i < taskRepository.commands.length; i++) {
      let command = taskRepository.commands[i]
      taskRepository.executeNoLog(command.name, command.obj)
    }
  }
}

taskRepository.executeNoLog = function(name) {
  let args = Array.prototype.slice.call(arguments, 1)

  if(taskRepository[name]) {
    return taskRepository[name].apply(taskRepository, args)
  }
  return false 
}

taskRepository.execute = function(name) {
  let args = Array.prototype.slice.call(arguments, 1)

  taskRepository.commands.push({
    name,
    obj: args[0],
  })

  if(taskRepository[name]) {
    return taskRepository[name].apply(taskRepository, args)
  }
  return false
}

taskRepository.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false,
})
taskRepository.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false,
})
taskRepository.execute('save', {
  id: 3,
  name: 'Task 3',
  completed: false,
})
taskRepository.execute('save', {
  id: 4,
  name: 'Task 4',
  completed: false,
})

console.log(taskRepository.tasks)
taskRepository.tasks = {}
console.log(taskRepository.tasks)

taskRepository.replay()
console.log(taskRepository.tasks)
