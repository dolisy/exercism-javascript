let Binary = function (binary) {
  this.binary = binary;
  for (i = 0; i < binary.length; i++) {
    if (binary[i] !== "0" && binary[i] !== "1") {
      this.binary = "0";
    }
  }
}

module.exports = Binary;

Binary.prototype.toDecimal = function() {
  let binary = this.binary;
  let decimal = 0;

  for (i = binary.length -1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * Math.pow(2, binary.length -1 - i);
  }

  return decimal;
}
