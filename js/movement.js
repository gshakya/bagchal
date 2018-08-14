function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var selectedDiv = ev.currentTarget.parentNode;
  console.log(selectedDiv.id + " square selected")
  enableTravelableSquareOf(selectedDiv.id)
}

function enableTravelableSquareOf(squareId) {
  activateDroppablesquare(+squareId + +1)
  activateDroppablesquare(+squareId + +10)
  activateDroppablesquare(squareId - 1)
  activateDroppablesquare(squareId - 10)
  var omniDirectionPostitons = ["11", "13", "15", "22", "24", "31", "33", "35", "42", "44", "51", "53", "55"]
  if (omniDirectionPostitons.includes(squareId)) {
    activateDroppablesquare(+squareId + +11)
    activateDroppablesquare(squareId - 11)
    activateDroppablesquare(+squareId + +9)
    activateDroppablesquare(squareId - 9)
  }
}

function activateDroppablesquare(squareId) {

  var square = document.getElementById(squareId)
  console.log("checking: " +squareId +"="+square )
  if (square) {
    console.log(squareId +" occupied : "+ isSquareOccupied(square))
    if (!isSquareOccupied(square)) {

      console.log(squareId + ': valid')
      square.setAttribute("ondrop", "drop(event)")
      square.setAttribute("ondragover", "allowDrop(event)")
    }

  }
}

function deactivateAllDroppable() {
  var allSquares = document.getElementsByClassName("Square")
  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].removeAttribute("ondrop")
    allSquares[i].removeAttribute("ondragover")
  }
}

function isSquareOccupied(square) {
  return square.hasChildNodes()
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  deactivateAllDroppable()
}