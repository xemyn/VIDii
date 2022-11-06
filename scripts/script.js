// JavaScript Document
console.log("Howdy!");

var element1 = document.querySelector("section:nth-of-type(6)");
element1.addEventListener("click", toggleDoor);

var element2 = document.querySelector("section:nth-of-type(3)");
element2.addEventListener("click", toggleDoor);

function toggleDoor() {
    element2.classList.toggle("linkerdeurOpen");
    element1.classList.toggle("rechterdeurOpen");
}



var deEersteBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(1) button")
deEersteBoekButton.addEventListener("click", eersteBoek);

function eersteBoek() {
    var boekEen = document.querySelector("article:nth-of-type(2)")
    boekEen.classList.add("openEersteBoek");
}