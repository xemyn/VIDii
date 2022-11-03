// JavaScript Document
console.log("Howdy!");

var element1 = document.querySelector("section:nth-of-type(6)");
element1.addEventListener("click", toggleDoor);

// function toggleDoor() {
// element1.classList.toggle("rechterdeurOpen");
// }


var element2 = document.querySelector("section:nth-of-type(3)");
element2.addEventListener("click", toggleDoor);

function toggleDoor() {
element2.classList.toggle("linkerdeurOpen");
element1.classList.toggle("rechterdeurOpen");
}