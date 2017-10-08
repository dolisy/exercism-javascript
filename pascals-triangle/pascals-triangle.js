let Triangle = function(n) {
  this.rows = [[1]];
  let row = [];

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      row.push(0);
    }
    this.rows.push(row);
    row = [];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (i > 0 && j < i) {
        this.rows[i][j] += this.rows[i - 1][j];
      }
      if (i > 0 && j > 0) {
        this.rows[i][j] += this.rows[i - 1][j - 1];
      }
    }
  }

  this.lastRow = this.rows[n - 1];
}

module.exports = Triangle;

