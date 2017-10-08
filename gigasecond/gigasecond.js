function Gigasecond(dateInput) {
  this.dateInput = dateInput;
}

Gigasecond.prototype.date = function() {
  return new Date(this.dateInput.getTime() + 1000000000000);
}

module.exports = Gigasecond;


// test

var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
console.log(gs);
var expectedDate = new Date(Date.UTC(2047, 4, 23, 1, 46, 40));
console.log(expectedDate);

// console.log(new Date(Date.UTC(2015, 8, 14)) - new Date(Date.UTC(2047, 4, 23, 1, 46, 40)));
