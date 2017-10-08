let SecretHandshake = function(decimal) {
  if (Number.isInteger(decimal) === false) {
    throw Error('Handshake must be a number');
  }
  this.decimal = decimal;
  this.binary = 0;
  this.operations = [];

  let operationsDictionary = {
    0: 'wink',
    1: 'double blink',
    2: 'close your eyes',
    3: 'jump'
  }

  this.reverse = 0;

  let n = Math.ceil(Math.log(decimal) / Math.log(2));
  for (let i = n; i >= 0; i--) {
    if (decimal - Math.pow(2, i) >= 0) {
      if (i <= 3) {
        this.operations.push(operationsDictionary[i]);
      }
      this.binary += Math.pow(10, i);
      decimal -= Math.pow(2, i);
    }
  }

  this.commands = function() {
    if (this.binary.toString()[3] === '1') {
      return this.operations;
    } else {
      return this.operations.reverse();
    }
  }
}

module.exports = SecretHandshake;
