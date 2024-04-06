const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    let rgbaColor = "rgba(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgbaColor;
    color.textContent = rgbaColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}
