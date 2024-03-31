const colors = ["green", "red", "blue", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

var index = 0;
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[index];
    index = index + 1;
});