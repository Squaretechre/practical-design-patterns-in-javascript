let projectRepository = function() {
  const get = function(id) {
    console.log(`Getting project ${id}`)
    return {
      name: 'New project'
    }
  }
  return {
    get,
  }
}

module.exports = projectRepository
