function takeElement(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('snare.mp3');
      crash.play();
      break;
    case "l":
      var snare = new Audio('crash.mp3');
      snare.play();
      break;
    case "k":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log("not a valid key");
      break;
  }
}

function addAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonBoard = this.innerHTML;
    takeElement(buttonBoard);
    addAnimation(buttonBoard);
  });
}
document.addEventListener("keydown", function(event) {
  takeElement(event.key);
  addAnimation(event.key);
});
