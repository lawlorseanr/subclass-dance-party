// pseudoclassical instantiation
var ChaseDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};
ChaseDancer.prototype = Object.create(makeDancer.prototype);
ChaseDancer.prototype.constructor = makeBlinkyDancer;
ChaseDancer.prototype.step = function() {
  // call oldStep
  makeDancer.prototype.step.call(this);
};