//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400

var Year = function (input) {
  this.value = input;
};

Year.prototype.isLeap = function () {
  if (this.value % 4 === 0 && ( this.value % 100 !== 0 || (this.value % 100 === 0 && this.value % 400 === 0))) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
