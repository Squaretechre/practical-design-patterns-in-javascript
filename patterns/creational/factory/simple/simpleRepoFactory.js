let repoFactory = function() {
  this.getRepo = function(repoType) {
    if(repoType === 'task') {
      if (this.taskRepo) {
        console.log('retrieving from cache')
        return this.taskRepo
      } else {
        // add config ...
        this.taskRepo = require('./taskRepository')()
        return this.taskRepo
      }
    }
    if(repoType === 'user') {
      return require('./userRepository')()
    }
    if(repoType === 'project') {
      return require('./projectRepository')()
    }
  }
}

module.exports = new repoFactory