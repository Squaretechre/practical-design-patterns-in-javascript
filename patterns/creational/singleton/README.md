
# Singleton Pattern

## Used to restrict an object to once instance of that object across the application

- Create new instance on first call.
- Returns same instance for subsequent calls.
- Leverage CommonJS to create singletons in Node.
  - See docs on [module caching](https://nodejs.org/api/modules.html#modules_caching)

```js
let TaskRepo = (function () {
  let taskRepo
  function createRepo() {
    let taskRepo = new Object('Task')
    return taskRepo
  }
  return {
    getInstance: function () {
      if (!taskRepo) {
        taskRepo = createRepo()
      }
      return taskRepo
    }
  }
})()

let repo1 = TaskRepo.getInstance()
let repo2 = TaskRepo.getInstance()

if (repo1 === repo2) {
  console.log('Same TaskRepo')
}
```