class ArgumentError extends Error {}

class WordProblem {
  constructor(frage) {
    this.frage = frage;

    this.frage = frage.replace("What is ", "");
    this.frage = frage.replace("?", "");
    this.frage = frage.replace(/plus/g, "+");
    this.frage = frage.replace(/minus/g, "-");
    this.frage = frage.replace(/multiplied by/g, "*");
    this.frage = frage.replace(/divided by/g, "/");
  }

  answer() {
    return eval(this.frage);
  }
}

// module.exports.ArgumentError = ArgumentError;
module.exports.WordProblem = WordProblem
