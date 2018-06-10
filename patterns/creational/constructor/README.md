
# Constructor Pattern

## Use to create new objects with their own scope

Create objects out of existing objects.

### The `new` keyword

Putting the `new` keyword infront of a function makes it a constructor function, which when executed does 4 things:

- Creates a new object
- Links to an object prototype
- Binds `this` to the new object scope
- Implicitly returns `this`

```js
function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function() {
    return this.param1 + ' ' this.param2;
  }
}
```

Above `this` is bound to the new objects scope. `this` is also returned implicitly which would look as follows:

```js
function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function() {
    return this.param1 + ' ' this.param2;
  }
  return this
}
```

### Drawbacks

Above the `toString` function is recreated for every copy of `ObjectName`, this is inefficient. Functions should be added to an objects prototype.

Prototypes are an encapsulation of properties that an object links to. Every copy of an object will use the same prototype which they all link back to. It is more efficient to have one copy of the functions that live on the prototype which are then linked to.