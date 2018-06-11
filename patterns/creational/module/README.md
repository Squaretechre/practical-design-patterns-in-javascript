
# Module Pattern

- Simple way to encapsulate methods.
- Useful for services.
- An object literal.
- Wrap it in a function for private state.
- Used when you need 1 of something.

## Object Literal

```js
let module = {
  method: function() {...},
  nextMethod: function() {...}
}
```

## Wrapped in a Function

```js
let Module = function() {
  let privateVar = 'I am private...'
  return {
    method: function() {...},
    nextMethod: function() {...}
  }
}
```