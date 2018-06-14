
# Facade Pattern

## Used to provide a simplified interface to a complicated system.

- Consolidate an existing API to a simplified call.
- Not adding functionality.

```js
let APIWeDontOwn = function() {
  let doSomethingWithThing1 = function(thing) { }
  let doSomethingWithThing2 = function(thing) { }
  let doSomethingWithThing3 = function(thing) { }
  return {
    doSomethingWithThing1,
    doSomethingWithThing2,
    doSomethingWithThing3,
  }
}()
```

```js
let APIWeDoOwn = function() {
  let doAllTheThingsWithThing = function(thing) {
    APIWeDontOwn.doSomethingWithThing1(thing)
    APIWeDontOwn.doSomethingWithThing2(thing)
    APIWeDontOwn.doSomethingWithThing3(thing)
  }
  return {
    doAllTheThingsWithThing
  }
}
```