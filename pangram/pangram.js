let Pangram = function (string) {
  this.string = string;
};

module.exports = Pangram;

Pangram.prototype.isPangram = function () {
  let string = this.string;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let sum = 0;

  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().includes(alphabet[i])) {
      sum += 1;
    }
  }

  return sum === alphabet.length;

  // let check = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  // for (let i = 0; i < string.length; i++) {
  //   if (alphabet.includes(string[i].toLowerCase()) && check[alphabet.indexOf(string[i].toLowerCase())] === 0) {
  //     check[alphabet.indexOf(string[i].toLowerCase())] = 1;
  //   }
  // }

  // let sum = check.reduce(function(a, b) { return a + b; }, 0);
  // return sum === 26;
};
