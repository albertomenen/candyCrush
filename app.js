document.addEventListener ("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid")
  const width=8
  const squares = []

const candyColors = [

  "red",
  "yellow",
  "orange",
  "purple",
  "green",
  "blue"
]

// Crear la tabla

function createBoard() {
  for( let i= 0; i < width*width; i++) {
    const square = document.createElement("div")
    // Esta es la función que tenemos para hacer para que los div sean deslizables
    square.setAttribute("draggable", true)
    // en esta función le damos un id al div que estamos moviendo de 0 a 63
    square.setAttribute("id", i)
    let randomColor = Math.floor (Math.random() * candyColors.length)
    square.style.backgroundColor = candyColors[randomColor]
    grid.appendChild(square)
    squares.push(square)
  }
}
createBoard()


// como mover los dulces

let colorBeingDragged

squares.forEach(square => square.addEventListener("dragstart", dragStart))
squares.forEach(square => square.addEventListener("dragend", dragEnd))
squares.forEach(square => square.addEventListener("dragover", dragOver))
squares.forEach(square => square.addEventListener("dragenter", dragEnter))
squares.forEach(square => square.addEventListener("dragleave", dragLeave))
squares.forEach(square => square.addEventListener("drop", dragDrop))

function dragStart () {
  colorBeingDragged = this.style.backgroundColor
  console.log(colorBeingDragged)
  console.log (this.id, "dragstart")

}

function dragEnd () {
console.log (this.id, "dragEnd")
}

function dragOver() {
console.log (this.id, "dragover")
}

function dragEnter () {
console.log( this.id, "dragenter")
}

function dragLeave () {
console.log(this.id, "dragleave")
}

function dragDrop () {
console.log (this.id, "dragdrop")
}







})
