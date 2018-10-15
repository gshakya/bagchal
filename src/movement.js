var isTigerTurn = false;
var goatCount =20;
var goatDropCount = 1;


window.onload = function(){
  var squares = document.getElementsByClassName('Square');
  for(var i = 0; i < squares.length; i++) {
      var square = squares[i];
      if(isEmpty(square)){
        square.onclick = function (e){
          var goat = goatElement();
          e.target.appendChild(goat)
        }
      }       
  }  ;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function goatElement(){
  var elem = document.createElement("img");
  elem.setAttribute("src", "img/goat.png");
  elem.setAttribute("class", "goat");
  elem.setAttribute("id", "goat"+ goatDropCount);
  return elem;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var selectedDiv = ev.currentTarget.parentNode;
  console.log(selectedDiv.id + " square selected")
  enableTravelableSquareOf(selectedDiv.id)
}

function enableTravelableSquareOf(squareId) {
  activateDroppableSquare(+squareId + +1)
  activateDroppableSquare(+squareId + +10)
  activateDroppableSquare(squareId - 1)
  activateDroppableSquare(squareId - 10)
  var omniDirectionPostitons = ["11", "13", "15", "22", "24", "31", "33", "35", "42", "44", "51", "53", "55"]
  if (omniDirectionPostitons.includes(squareId)) {
    activateDroppableSquare(+squareId + +11)
    activateDroppableSquare(squareId - 11)
    activateDroppableSquare(+squareId + +9)
    activateDroppableSquare(squareId - 9)
  }
}

function activateDroppableSquare(squareId) {

  var square = document.getElementById(squareId)
  console.log("checking: " + squareId + "=" + square)
  if (square) {
    console.log(squareId + " occupied : " + isEmpty(square))
    if (isEmpty(square)) {

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

function isEmpty(square) {
  return square.innerHTML.trim() === ""
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  deactivateAllDroppable()
}