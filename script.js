let colArray = ['#b26e88', "#6769e7", "#d2c4aa", "#4cc0d5", "#ef1bef"]
let button1 = document.querySelector('#button1');
button1.onclick = changeColor;
let body = document.querySelector('body');
let randomCol = 1;
button1.onclick = changeColor;
let h2 = document.querySelector('h2');

function changeColor() {
    randomCol = Math.floor(Math.random() * colArray.length) // Math.random() picks a random number 0 to <1 (float)
    body.style.backgroundColor = colArray[randomCol];
    h2.innerText = "Current Color: " + colArray[randomCol];

}
