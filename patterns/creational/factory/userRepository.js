let userRepository = function() {
  const get = function(id) {
    console.log(`Getting user ${id}`)
    return {
      name: 'Dan'
    }
  }
  return {
    get,
  }
}

module.exports = userRepository
