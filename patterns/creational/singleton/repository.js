let repository = function() {
  let called = 0

  let save = function(task) {
      called++
      console.log(`Saving ${task}, called ${called} times`)
  }

  console.log('newing up a task repo')
  return {
    save,
  }
}

// node module caching
// invoke a function in module exports to create a singleton.
// the instance created when the function is invoked is cached.

// if you want to have a module execute code multiple times,
// then export a function, and call that function.
module.exports = new repository

// or
// module.exports = repository()