// pseudoclassical instantiation
var makeColorChangeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.colorCounter = 0;
  this.colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  this.color = this.colorArray[this.colorCounter];
};
makeColorChangeDancer.prototype = Object.create(makeDancer.prototype);
makeColorChangeDancer.prototype.constructor = makeColorChangeDancer;
makeColorChangeDancer.prototype.step = function() {
  // call oldStep
  makeDancer.prototype.step.call(this);

  var styleSyntax = {
    'border-color': this.color,
    'background-color': this.color
  };
  this.$node.css(styleSyntax);

  this.colorCounter++;
  this.color = this.colorArray[this.colorCounter % this.colorArray.length];
};