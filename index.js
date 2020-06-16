var buttonColours = ["red", "blue", "yellow", "green"];
var gamePatten = [];
var userClickedPattern = [];

//Start the game
function firstPress() {
    $("body").one('keypress', function() {
        level = 0;
        gamePatten = [];
        nextSequence();
  });
}
  
  $(document).ready(function () {
    firstPress();
  });


//Random number by computer
function nextSequence() {

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    var name = randomChosenColour;

    gamePatten.push(randomChosenColour);
    
    playSound(randomChosenColour);

    countLevel(); 
}

//User button click
$(".btn").unbind().click(function(event) {
    var userChosenColour = event.target.id;
    name = userChosenColour;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(event.name);

    checkAnswer(userClickedPattern.length-1);

  });

//Play-sound function
function playSound(name) {  
    if  ("red" == name) {
        $("#red").fadeOut(100).fadeIn(100);
        var red = new Audio('sounds/red.mp3');
        red.play();
    } else if
        ("blue" == name) {
        $("#blue").fadeOut(100).fadeIn(100);
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    } else if
        ("yellow" == name) {
        $("#yellow").fadeOut(100).fadeIn(100);
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    } else {
        $("#green").fadeOut(100).fadeIn(100);
        var green = new Audio('sounds/green.mp3');
        green.play();
    }
}

//Add animation when the button is clicked
function animatePress(currentColour) {
    var currentColour = name;
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
    }, 100);
}

//Level increased by 1
function countLevel() {
    level++;
    $("#level-title").text("Level " + level);
}

//Compare answers
function checkAnswer(currentLevel) {

    if (gamePatten[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePatten.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        var wrong = new Audio('sounds/wrong.mp3');
        wrong.play();

        $("body").addClass("game-over");

        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        firstPress(); 
    }
}