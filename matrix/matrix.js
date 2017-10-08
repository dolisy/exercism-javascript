function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

let Matrix = function(string) {
  this.string = string;
  this.rows = [];
  this.columns = [];

  let xMatches = string.match(/\d+/g).map(n => parseInt(n, 10));
  let nMatches = string.match(/[\n]/g);
  let chunk = xMatches.length / (nMatches.length + 1);

  for (let i = 0; i < xMatches.length; i += chunk) {
    this.rows.push(xMatches.slice(i, i + chunk));
    this.columns.push(xMatches.slice(i, i + chunk));
  }

  this.columns = transpose(this.columns);
};

module.exports = Matrix;
