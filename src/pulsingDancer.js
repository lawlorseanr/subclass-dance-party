var makePulseDancer = function(top, left, timeBetweenSteps) {
  makeColorChangeDancer.call(this, top, left, timeBetweenSteps);

  this.sizeRate = 2;
  this.sizeLimit = 40;
  this.size = Math.floor( Math.random() * this.sizeLimit );

  this.$node = $('<span class="dancer spinner"></span>');
};
makePulseDancer.prototype = Object.create(makeColorChangeDancer.prototype);
makePulseDancer.prototype.constructor = makePulseDancer;
makePulseDancer.prototype.step = function() {
  makeColorChangeDancer.prototype.step.call(this);
  this.nextSize();
};
makePulseDancer.prototype.nextSize = function() {
  var styleSettings = {};
  this.size += this.sizeRate;
  if (this.size >= this.sizeLimit) {
    this.sizeRate = -this.sizeRate;
  } else if (this.size <= 1) {
    this.sizeRate = -this.sizeRate;
  }
  styleSettings['border-width'] = (this.size) + 'px';
  styleSettings['border-height'] = 'auto';
  styleSettings['width'] = (this.size) + 'px';
  this.$node.css(styleSettings);
};