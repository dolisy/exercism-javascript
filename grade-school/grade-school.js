let School = function() {
  this.hash = {};
  this.add = function(student, value) {
    if (this.hash[parseInt(value)] !== undefined) {
      this.hash[parseInt(value)].push(student);
    } else {
      this.hash[parseInt(value)] = [student];
    }
    this.hash[parseInt(value)].sort();
  }

  this.roster = function() {
    return this.hash;
  }

  this.grade = function(value) {
    if (this.hash[parseInt(value)] !== undefined) {
      return this.hash[parseInt(value)];
    } else {
      return [];
    }
  }
}

module.exports = School;
