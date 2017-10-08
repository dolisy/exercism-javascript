let Bob = function () {
};

module.exports = Bob;

Bob.prototype.hey = function (string) {
  string = string.trim();
  if (string === '') {
    return 'Fine. Be that way!';
  } else if (string === string.toUpperCase() && /[a-z]/i.test(string) !== false) {
    return 'Whoa, chill out!';
  } else if (string[string.length - 1] === '?') {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
}
