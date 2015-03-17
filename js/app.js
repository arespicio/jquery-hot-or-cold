
$(document).ready(function(){

  initalNum();
  

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

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

//global variables
var target;
var guess;

function handleGuessButtonClick() {
  var guess = +$('#userGuess').val();
  $('#guessList').append("<li>" + guess + "</li>");
  $('#userGuess').val('');
  $('#count').html(function(i, val) { return val*1+1 });

  guessComp();
}

//generating the number
function initalNum(){
  target = Math.floor((Math.random() * 100) + 1);
  alert(target);
}

function newGame() {
  $('#userGuess').val('');
  $('#guessList').empty();
  $('#count').html('0');
  $('#feedback').html('Make your Guess!');

  initalNum();
}

function guessComp() {
  var guessCheck = Math.abs(guess - target);
  var guess = +$('#userGuess').val();
  	   if (guessCheck >= 50){
    		 		$('#feedback').text("You are ice cold....brrrrrr!");
            alert("You are ice cold....brrrrrr!");
    		} else if (guessCheck >= 30) {
    				$('#feedback').text("It's feeling chilly in here!");
            alert("It's feeling chilly in here!");
    		} else if(guessCheck >= 20) {
    				$('#feedback').text("You are lukewarm!");
            alert("You are lukewarm!");
    		} else if(guessCheck >= 10) {
    				$('#feedback').text("Feeling warm!");
            alert("Feeling warm!");
        } else if (guessCheck === 0) {
            $('#feedback').text("YOU WIN!");
            alert("YOU WIN!");
    		} else {
    				$('#feedback').text("Wow, it's burning up in here!");
            alert("Wow, it's burning up in here!");
    		};
  }




