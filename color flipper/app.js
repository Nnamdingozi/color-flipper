const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    //get random number between 0 and 3 bc const color is an array with 3 as the last index
    const randomNum = getRandomNum(); //this points to color red
   console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});
function getRandomNum() {
     return Math.floor(Math.random() * colors.length);
}