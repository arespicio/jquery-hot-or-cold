

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

  initalNum();
}

function message(text) {
  $('#feedback').replaceWith(text);
}

function guessComp(text) {
  var diff = Math.abs(guess - target);
  if( guess > target || guess < target){
	   if( diff >= 50 ){
  		 		message("You are an ice cold....brrrrrr!");
  		} 
      else if( diff >= 30){
  				message("It's feeling chilly in here!");
  		} 
      else if( diff >= 20){
  				message("You are lukewarm!");
  		} 
      else if( diff >= 10){
  				message("Feeling warm!");
  		} 
      else( diff > 0){
  				message("Wow, it's burning up in here!");
  		};
  } 
  else{
          message("YOU WIN!");
      };
  }
}








