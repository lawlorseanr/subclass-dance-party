// pseudoclassical implementation
var Money = function(top, left) {
  this.top = top;
  this.left = left;

  var styleSettings = {};
  styleSettings.top = top;
  styleSettings.left = left;
  /*styleSettings.opacity = 1;*/

  this.$node = $('<span class="money"></span>');
  this.$node.css(styleSettings);
  this.setPosition(top, left);
};
Money.prototype.step = function() {
  setTimeout(this.step.bind(this), 5);
};
Money.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  var styleSettings = {};
  styleSettings.top = top;
  styleSettings.left = left;

  this.$node.css(styleSettings);
};