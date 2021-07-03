// pseudoclassical instantiation
var makeWanderDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeWanderDancer.prototype = Object.create(makeDancer.prototype);
makeWanderDancer.prototype.constructor = makeBlinkyDancer;
makeWanderDancer.prototype.step = function() {
  // call oldStep
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.move();
};