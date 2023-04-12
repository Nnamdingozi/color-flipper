const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");
btn.addEventListener("click", function(){
let hexcolors = "#";
for(let i = 0; i < 6; i++){
    hexcolors += hex[getRandomNum()];
}
colors.textContent = hexcolors;
document.body.style.backgroundColor = hexcolors;
})
function getRandomNum() {
   return Math.floor(Math.random() * hex.length)
}