// pseudoclassical instantiation
var makeColorChangeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.colorCounter = 0;
  this.colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  this.color = this.colorArray[this.colorCounter];

  makeDancer.call(this, top, left, timeBetweenSteps);
};
makeColorChangeDancer.prototype = Object.create(makeDancer.prototype);
makeColorChangeDancer.prototype.constructor = makeColorChangeDancer;
makeColorChangeDancer.prototype.step = function() {
  // call oldStep
  makeDancer.prototype.step.call(this);

  var styleSyntax = {
    'border-color': this.color
  };
  this.$node.css(styleSyntax);
  this.color = this.colorArray[this.colorCounter % this.colorArray.length];
  this.colorCounter++;
};