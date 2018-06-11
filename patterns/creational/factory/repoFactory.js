let repoFactory = function() {
  // this refers back to object scope for repoFactory
  let repos = this
  var repoList = [
    { name: 'task', source: './taskRepository' },
    { name: 'user', source: './userRepository' },
    { name: 'project', source: './projectRepository' },
  ]

  repoList.forEach(repo => {
    repos[repo.name] = require(repo.source)()
  })
}

module.exports = new repoFactory