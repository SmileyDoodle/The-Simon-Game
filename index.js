var buttonColours = ["red", "blue", "yellow", "green"];
var gamePatten = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePatten.push(randomChosenColour);


    if ("red" == randomChosenColour) {
        $("#red").fadeOut(100).fadeIn(100);
        var red = new Audio('sounds/red.mp3');
        red.play();
    } else if
        ("blue" == randomChosenColour) {
        $("#blue").fadeOut(100).fadeIn(100);
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
    } else if
        ("yellow" == randomChosenColour) {
        $("#yellow").fadeOut(100).fadeIn(100);
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
    } else {
        $("#green").fadeOut(100).fadeIn(100);
        var green = new Audio('sounds/green.mp3');
        green.play();
    }

}

$(".btn").unbind().click(function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
  });
