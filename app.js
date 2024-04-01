const colors = ["green", "red", "blue", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    const selectedColor = colors[randomNumber];
    document.body.style.backgroundColor = selectedColor;
    color.textContent = selectedColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
