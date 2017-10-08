let usedNames = {};

let Robot = function() {
  this.name = '';
  let breakCondition = false;

  this.reset = function() {
    this.name = '';
    let breakCondition = false;

    while (breakCondition === false) {
      this.name = '';
      for (let i = 0; i < 5; i++) {
        if (i < 2) {
          this.name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.ceil(Math.random() * 25) - 1];
        } else if (i < 5) {
          this.name += (Math.ceil(Math.random() * 8 + 1) - 1);
        }
      }

      if (usedNames[this.name] !== true) {
        breakCondition = true;
      }
    }

    usedNames[this.name] = true;
  }

  this.reset();
}

module.exports = Robot;
