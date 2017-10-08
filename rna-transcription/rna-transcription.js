var DnaTranscriber = function () {
};

DnaTranscriber.prototype.toRna = function (code) {
  let rna = '';
  let transcription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }

  for (let i = 0; i < code.length; i++) {
    if (code[i] in transcription) {
      rna += transcription[code[i]];
    } else {
      throw new Error("Invalid input");
    }
  }
  return rna;
};



module.exports = DnaTranscriber;


// test

var dnaTranscriber = new DnaTranscriber();

console.log(dnaTranscriber.toRna('ACGTGGTCTTAA')); // UGCACCAGAAUU
