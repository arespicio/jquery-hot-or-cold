
$(document).ready(function(){
<<<<<<< HEAD

=======
	
>>>>>>> 209c990e47738728b5a7e870f496e9ac69125bf2
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

<<<<<<< HEAD
    $("#guessButton").click(function() {
      handleGuessButtonClick();
    });

    $('form').submit(function(event) {
      event.preventDefault();
    });

    $(".new").click(function() {
      newGame();
    });

});

function handleGuessButtonClick() {
  var number = $('#userGuess').val();
  var guess = + number;
  $('#guessList').append("<li>" + guess + "</li>");
  $('#userGuess').val('');
}

function newGame() {
  var target = Math.floor((Math.random() * 100) + 1);
  $('#userGuess').val('');
  $('#guessList').empty();
}

function guess() {
  var diff = (target - guess);

	if( diff >= 50){
  		 	$('#feedback').replaceWith(function() {
  		 		return "<h2>You are an ice cube!</h2>";
  		 	});
  		} else if( diff <= 30){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are slowly melting!</h2>";
  			});
  		} else if( diff > 20){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are slowly melting!</h2>";
  			});
		} else if( diff <= 20){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are a puddle of water!</h2>";
  			});
  		} else if( diff > 10){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are a puddle of water!</h2>";
  			});
  		} else if( diff <= 10){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are boiling water!</h2>";
  			});
  		} else if( diff >= 1){
  			$('#feedback').replaceWith(function() {
  				return "<h2>You are boiling water!</h2>";
  			});
  		} else if (guess === target){
  			$('#feedback').replaceWith("YOU WIN!");
  		}
}







=======
});

>>>>>>> 209c990e47738728b5a7e870f496e9ac69125bf2

