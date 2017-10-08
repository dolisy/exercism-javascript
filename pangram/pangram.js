let Pangram = function (string) {
  this.string = string;
  // if (!string.match(/^[a-z]+$/)) {
  //   throw new Error("Bad string");
  // };
};

module.exports = Pangram;

Pangram.prototype.isPangram = function () {
  let string = this.string;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let check = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase()) && check[alphabet.indexOf(string[i].toLowerCase())] === 0) {
      check[alphabet.indexOf(string[i].toLowerCase())] = 1;
    }
  }

  let sum = check.reduce(function(a, b) { return a + b; }, 0);
  return sum === 26;
};
