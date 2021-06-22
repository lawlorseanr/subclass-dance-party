// pseudoclassical implementation
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};
makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  var styleSettings = {};
  styleSettings.top = top;
  styleSettings.left = left;

  this.$node.css(styleSettings);
};