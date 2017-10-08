let Cipher = function (key = 'aaaaaaaaaa') {
  this.key = key;
  if (!key.match(/^[a-z]+$/)) {
    throw new Error("Bad key");
  };
};

module.exports = Cipher;

Cipher.prototype.encode = function (code) {
  let key = this.key;
  if (key.length < code.length) {
    while (key.length < code.length) {
      key += key;
    }
    key = key.slice(0, code.length);
  }

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let string = '';
  let j = 0;
  let k = 0;

  for (let i = 0; i < code.length; i++) {
    j = alphabet.indexOf(key[i]) + alphabet.indexOf(code[i]);
    if (j > 25) {
      string += alphabet[j - 26];
    } else {
      string += alphabet[j];
    }
  }

  return string;
};

Cipher.prototype.decode = function (code) {
  let key = this.key;
  if (key.length < code.length) {
    while (key.length < code.length) {
      key += key;
    }
    key = key.slice(0, code.length);
  }

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let string = '';
  let j = 0;
  let k = 0;

  for (let i = 0; i < code.length; i++) {
    j = alphabet.indexOf(code[i]) - alphabet.indexOf(key[i]);
    if (j > 25) {
      string += alphabet[j - 26];
    } else if (j < 0) {
      string += alphabet[26 + j];
    } else {
      string += alphabet[j];
    }
  }

  return string;
};








