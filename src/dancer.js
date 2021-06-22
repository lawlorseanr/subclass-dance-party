// pseudoclassical implementation
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  this.topSpeed = 0;
  this.leftSpeed = 0;

  this.line = 0;

  this.minTop = 0;
  this.maxTop = $('body').height() - 150;

  //this.step();
  this.setPosition(top, left);
};
makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.movePosition();
};

makeDancer.prototype.movePosition = function() {
  var newTop = this.top + this.topSpeed;
  var newRight = this.left + this.leftSpeed;

  this.setPosition(newTop, newRight);
};

makeDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  if (this.top > (this.maxTop)) {
    this.top = this.maxTop;
  } else if (this.top <= this.minTop) {
    this.top = this.minTop;
  }
  if (this.left > ($('body').width() - 150)) {
    this.left = $('body').width() - 150;
  } else if (this.left <= 0) {
    this.left = 0;
  }

  var styleSettings = {};
  styleSettings.top = top;
  styleSettings.left = left;

  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(targetTop) {

  if (this.top < targetTop) {
    this.topSpeed = 5;
    this.maxTop = targetTop;
  } else {
    this.topSpeed = -5;
    this.minTop = targetTop;
  }
  this.leftSpeed = -10;
};