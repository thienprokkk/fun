var modal = document.getElementById("modal");
var closeModal = document.getElementById("close");
var play = document.getElementById("play-button");
var drawButton = document.getElementById("draw-button");

closeModal.onclick = function() {
  modal.style.display = "none";
  drawButton.style.visibility = "visible";
}

play.onclick = function() {
  modal.style.display = "block";
  drawButton.style.visibility = "hidden";
}