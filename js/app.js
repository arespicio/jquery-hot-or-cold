
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

    $('#guessButton').keyup(function(event){
    if(event.keyCode == 13) {
      $('#guessButton').click();
    };
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
var prevdiff = -1;

function handleGuessButtonClick() {
  var guess = +$('#userGuess').val();
    if (guess==null || guess=="") {
      alert("Please Fill Required Field with a Whole Number");
      return false;
      } else if (isNaN(guess)){
        alert("Please Fill Required Field with a Whole Number");
        $('#userGuess').val('');
        return false;
      }
    
  $('#guessList').append("<li>" + guess + "</li>");
  $('#userGuess').val('');
  $('#count').html(function(i, val) { return val*1+1 });
    
  guessComp(guess);
}


//generating the number
function initalNum(){
  target = Math.floor((Math.random() * 100) + 1);
}


function newGame() {
  $('#userGuess').val('');
  $('#guessList').empty();
  $('#count').html('0');
  $('#feedback').html('Make your Guess!');
  prevdiff = -1;

  initalNum();
}

function guessComp(aGuess) {
  var diff = Math.abs(aGuess - target);

      //determine whether current guess is warmer or colder
  var hint = '';
      if (diff != 0 && prevdiff != -1) {
        if (prevdiff < diff) {
          hint = " You're getting colder!";
        } else if (prevdiff > diff) {
          hint = " You're getting warmer!";
        }
      }

  prevdiff = diff;
  	   if (diff >= 50){
    		 		$('#feedback').text("You are ice cold....brrrrrr!" + hint);
    		} else if (diff >= 30) {
    				$('#feedback').text("It's feeling chilly in here!" + hint);
    		} else if(diff >= 20) {
    				$('#feedback').text("You are lukewarm!" + hint);
    		} else if(diff >= 10) {
    				$('#feedback').text("Feeling warm!" + hint);
        } else if (diff >= 1) {
            $('#feedback').text("Wow, it's burning up in here!" + hint);
    		} else {
            $('#feedback').text("YOU WIN!");
    		};
  }




