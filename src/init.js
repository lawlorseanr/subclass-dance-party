$(document).ready(function() {
  window.dancers = [];
  var newMoney, mouseTop, mouseLeft;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var timeBetweenSteps = 150;
    if (dancerMakerFunction === ChaseDancer) {
      timeBetweenSteps = 25;
    }
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      50 + Math.random() * timeBetweenSteps
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.step();
  });

  $('.lineupButton').on('click', function(event) {
    var minTop = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(minTop);
      minTop += 20;
    }
  });

  $(document).mousemove(function(e) {
    mouseTop = e.pageY + 20;
    mouseLeft = e.pageX + 20;
    if (newMoney !== undefined) {
      newMoney.setPosition(mouseTop, mouseLeft);
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i] instanceof ChaseDancer) {
          window.dancers[i].updateTarget(mouseTop, mouseLeft);
        }
      }
    }
    //console.log(mouseTop, mouseLeft);
  }).mouseover();

  var newMoney = new Money(100, 100);
  $('body').append(newMoney.$node);

});

