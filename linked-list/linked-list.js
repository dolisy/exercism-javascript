let LinkedList = function() {
}

LinkedList.prototype.push = function(value) {
  let n = Object.keys(this).length;

  Object.defineProperty(this, n, {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}

LinkedList.prototype.pop = function() {
  let n = Object.keys(this).length;
  let result = this[n-1];

  Object.defineProperty(this, n - 1, {
    writable: true,
    enumerable: false,
    configurable: true
  });

  return result;
}

LinkedList.prototype.shift = function() {
  let n = Object.keys(this).length;
  let result = this[0];

  for (let i = 0; i < n - 1; i++) {
    Object.defineProperty(this, i, {
      value: this[i + 1],
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  this.pop();

  return result;
}

LinkedList.prototype.unshift = function(value) {
  let n = Object.keys(this).length;
  this.push(this[n-1]);

  for (let i = n - 1; i > 0; i--) {
    Object.defineProperty(this, i, {
      value: this[i - 1],
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  this[0] = value;
}

LinkedList.prototype.count = function() {
  return Object.keys(this).length;
}

LinkedList.prototype.delete = function(value) {
  let n = Object.keys(this).length;

  for (let i = 0; i < n; i++) {
    if (this[i] === value) {
      Object.defineProperty(this, i, {
        writable: true,
        enumerable: false,
        configurable: true
      });

      for (let j = i; j < n; j++) {
        Object.defineProperty(this, j, {
          value: this[j + 1],
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
  }
  this.pop();
}

module.exports = LinkedList;















