let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+ 30;

for (let i = 0; i < squareCount; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.style.top = parseInt(Math.random() * 650) + "px";
    square.style.left = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    squareArea.appendChild(square);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }
    return color;

}