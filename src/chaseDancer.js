// pseudoclassical instantiation
var ChaseDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.topTarget = 0;
  this.leftTarget = 0;
  this.totalSpeed = 10;

  this.$node = $('<span class="dancer chaser"></span>');
};
ChaseDancer.prototype = Object.create(makeDancer.prototype);
ChaseDancer.prototype.constructor = makeBlinkyDancer;
ChaseDancer.prototype.updateTarget = function(top, left) {

  if (this.topTarget !== top && this.leftTarget !== left) {
    this.topTarget = top;
    this.leftTarget = left;

    if (this.topTarget >= this.top) {
      this.topSpeed = 5;
    } else {
      this.topSpeed = -5;
    }

    if (this.leftTarget >= this.left) {
      this.leftSpeed = 5;
    } else {
      this.leftSpeed = -5;
    }

  }
};
ChaseDancer.prototype.step = function() {
  // call oldStep
  makeDancer.prototype.step.call(this);

  if (Math.abs(this.top - this.topTarget) <= 10) {
    this.topSpeed = 0;
  }
  if (Math.abs(this.left - this.leftTarget) <= 10) {
    this.leftSpeed = 0;
  }

};