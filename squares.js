let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+ 30;
let zIndex = 1000;
for (let i = 0; i < squareCount; i++) {
    addSquare();
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }
    return color;

}

function addSquare() {
    let square = document.createElement("div");
    square.className = "square";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.backgroundColor = getRandomColor();
    squareArea.appendChild(square);
    square.onclick = changeZIndex;
}

function changeColors() {
    let squareColors = [];
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        squareColors.push(square.style.backgroundColor);
    });
    squares.forEach(square => {
        square.style.backgroundColor = getRandomColor();
    });
}
function changeZIndex() {
    zIndex++;
    this.style.zIndex = zIndex;
    
}