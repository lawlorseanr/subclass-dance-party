// pseudoclassical instantiation
var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  this.color = this.colorArray[0];

  // makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  this.randomColor();
};
makeColorDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;
makeColorDancer.prototype.setColor = function(index) {
  this.color = this.colorArray[index % this.colorArray.length];
  var styleSyntax = {
    'border-color': this.color
  };
  this.$node.css(styleSyntax);
};
makeColorDancer.prototype.randomColor = function() {
  this.setColor( Math.floor((this.colorArray.length) * Math.random()) );
};
