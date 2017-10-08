let List = function(values) {
  this.values = values;

  this.append = function(list) {
    return [];
  }

  this.concat = function(list) {
    return [];
  }

  // this.filter = function() {
  //   return [];
  // }

  this.length = function() {
    return [];
  }

  // this.map = function() {
  //   return [];
  // }

  // this.foldl = function() {
  //   return [];
  // }

  this.reverse = function() {
    return [];
  }
}

module.exports = List;


// test
var isOdd = function (x) {
  return x % 2 === 1;
};

var plusOne = function (x) {
  return x + 1;
};

var divide = function (x, acc) {
  return x / acc;
};

var emptyList = new List();
console.log(emptyList.append(emptyList).values); //[]

var emptyList = new List();
var nonEmptyList = new List([1, 2, 3, 4]);
console.log(emptyList.append(nonEmptyList).values); //[1, 2, 3, 4]

var list1 = new List([1, 2]);
var list2 = new List([2, 3, 4, 5]);
console.log(list1.append(list2).values); //[1, 2, 2, 3, 4, 5]

var emptyList = new List();
console.log(emptyList.concat(emptyList).values); //[]

var list1 = new List([1, 2]);
var list2 = new List([3]);
var list3 = new List([]);
var list4 = new List([4, 5, 6]);
console.log(list1
  .concat(list2)
  .concat(list3)
  .concat(list4).values
)
// [1, 2, 3, 4, 5, 6]

// var list = new List();
// console.log(list.filter(isOdd).values); //[]

// var list = new List([1, 2, 3, 5]);
// console.log(list.filter(isOdd).values); //[1, 3, 5]

var list = new List();
console.log(list.length()); //0

var list = new List([1, 2, 3, 4]);
console.log(list.length()) //4

// var list = new List([]);
// console.log(list.map(plusOne).values); //[]

// var list = new List([1, 3, 5, 7]);
// console.log(list.map(plusOne).values); //[2, 4, 6, 8]

// var list = new List([]);
// console.log(list.foldl(divide, 2)); //2

// var list = new List([1, 2, 3, 4]);
// console.log(list.foldl(divide, 24)); //64

// var list = new List([]);
// console.log(list.foldr(divide, 2)); //2

// var list = new List([1, 2, 3, 4]);
// console.log(list.foldr(divide, 24)); //9

var list = new List([]);
console.log(list.reverse().values); //[]

var list = new List([1, 3, 5, 7]);
console.log(list.reverse().values); //[7, 5, 3, 1]



















