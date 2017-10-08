let SpaceAge = function (seconds) {
  this.seconds = seconds;
}

module.exports = SpaceAge;

SpaceAge.prototype.onEarth = function() {
  return Math.floor(this.seconds * 31.69 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onMercury = function() {
  return Math.floor(this.seconds * 31.69 / 0.2408467 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onVenus = function() {
  return Math.floor(this.seconds * 31.69 / 0.61519726 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onMars = function() {
  return Math.floor(this.seconds * 31.69 / 1.8808158 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onJupiter = function() {
  return Math.floor(this.seconds * 31.69 / 11.862615 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onSaturn = function() {
  return Math.floor(this.seconds * 31.69 / 29.447498 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onUranus = function() {
  return Math.floor(this.seconds * 31.69 / 84.016846 / 1000000000 * 100) / 100;
}

SpaceAge.prototype.onNeptune = function() {
  return Math.floor(this.seconds * 31.69 / 164.79132 / 1000000000 * 100) / 100;
}

// // test

// var age = new SpaceAge(1000000);
// console.log(age.seconds) //1000000

// var age = new SpaceAge(1000000000);
// console.log(age.onEarth()); //31.69

// var age = new SpaceAge(2134835688);
// console.log(age.onEarth()); //67.65
// console.log(age.onMercury()); //280.88

// var age = new SpaceAge(189839836);
// console.log(age.onEarth()); //6.02
// console.log(age.onVenus()); //9.78

// var age = new SpaceAge(2329871239);
// console.log(age.onEarth()); //73.83
// console.log(age.onMars()); //39.25

// var age = new SpaceAge(901876382);
// console.log(age.onEarth()); //28.58
// console.log(age.onJupiter()); //2.41

// var age = new SpaceAge(3000000000);
// console.log(age.onEarth()); //95.06
// console.log(age.onSaturn()); //3.23


// var age = new SpaceAge(3210123456);
// console.log(age.onEarth()); //101.72
// console.log(age.onUranus()); //1.21

// var age = new SpaceAge(8210123456);
// console.log(age.onEarth()); //260.16
// console.log(age.onNeptune()); //1.58






















