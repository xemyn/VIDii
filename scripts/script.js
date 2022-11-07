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


// Het eerste boek die je aanklikt zodat je een boek opent
// var deEersteBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(1) button")
// deEersteBoekButton.addEventListener("click", eersteBoek);

// function eersteBoek() {
//     var boekEen = document.querySelector("article:nth-of-type(2)")
//     boekEen.classList.add("openEersteBoek");
// }
// Het eerste boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
// var deEersteOpenBoekButton = document.querySelector("article:nth-of-type(2) button")
// deEersteOpenBoekButton.addEventListener("click", eersteOpenBoek);

// function eersteOpenBoek() {
//     var boekOpenEen = document.querySelector("article:nth-of-type(2)")
//     boekOpenEen.classList.add("openEersteBoekButton");
// }

// var deEersteOpenBoekButton = document.querySelector("article:nth-of-type(8) section:nth-of-type(1) button:nth-of-type(1)")
// deEersteOpenBoekButton.addEventListener("click", eersteOpenBoek);

// function eersteOpenBoek() {
//     var boekOpenEen = document.querySelector("article:nth-of-type(8)")
//     boekOpenEen.classList.add("openEersteBoekButton");
// }



// Het eerste boek is open geklapt en je wilt via het opengeklapte boek weer naar anderre pagina van het eerste boek
// var deEersteOpenBoekButtonVolg = document.querySelector("article:nth-of-type(2) section:nth-of-type(2) button:nth-of-type(1)")
// deEersteOpenBoekButtonVolg.addEventListener("click", eersteOpenBoekVolg);

// function eersteOpenBoekVolg() {
//     var boekOpenEenVolg = document.querySelector("article:nth-of-type(8)")
//     boekOpenEenVolg.classList.add("openEersteBoekButtonVolg");
// }

// Het eerste boek die je aanklikt zodat je een boek opent
var deEersteBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(1) button")
deEersteBoekButton.addEventListener("click", eersteBoek);

function eersteBoek() {
    var boekEen = document.querySelector("article:nth-of-type(2)")
    boekEen.classList.add("openEersteBoek");
}
// Het eerste boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deEersteOpenBoekButton = document.querySelector("article:nth-of-type(2) button")
deEersteOpenBoekButton.addEventListener("click", eersteOpenBoek);

function eersteOpenBoek() {
    var boekOpenEen = document.querySelector("article:nth-of-type(2)")
    boekOpenEen.classList.add("openEersteBoekButton");
}



// Het tweede boek
var deTweedeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(2) button")
deTweedeBoekButton.addEventListener("click", tweedeBoek);

function tweedeBoek() {
    var boekTwee = document.querySelector("article:nth-of-type(3)")
    boekTwee.classList.add("openTweedeBoek");
}

// Het Derde boek
var deDerdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(3) button")
deDerdeBoekButton.addEventListener("click", derdeBoek);

function derdeBoek() {
    var boekDrie = document.querySelector("article:nth-of-type(4)")
    boekDrie.classList.add("openDerdeBoek");
}

// Het Vierde boek
var deVierdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(4) button")
deVierdeBoekButton.addEventListener("click", vierdeBoek);

function vierdeBoek() {
    var boekVier = document.querySelector("article:nth-of-type(5)")
    boekVier.classList.add("openVierdeBoek");
}

// Het vijfde boek
var deVijfdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(5) button")
deVijfdeBoekButton.addEventListener("click", vijfdeBoek);

function vijfdeBoek() {
    var boekVijf = document.querySelector("article:nth-of-type(6)")
    boekVijf.classList.add("openVijfdeBoek");
}

// Het zesde boek
var deZesdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(6) button")
deZesdeBoekButton.addEventListener("click", zesdeBoek);

function zesdeBoek() {
    var boekZes = document.querySelector("article:nth-of-type(7)")
    boekZes.classList.add("openZesdeBoek");
}


// link staat hier onder
//www.tnado.com/blog/javascript-move-div-with-the-mouse/?cookie=accept
var elem = document.querySelector('section:nth-of-type(10)'), 
    div = document.querySelector('section:nth-of-type(10) div'), 
    x = 0, 
    y = 0, 
    mousedown = false; 

 // div event mousedown 
div.addEventListener('mousedown', function (e) { 
     // mouse state set to true 
    mousedown = true; 
     // subtract offset 
    x = div.offsetLeft - e.clientX; 
    y = div.offsetTop - e.clientY; 
}, true); 

 // div event mouseup 
div.addEventListener('mouseup', function (e) { 
     // mouse state set to false 
    mousedown = false; 
}, true); 

 // element mousemove to stop 
elem.addEventListener('mousemove', function (e) { 
     // Is mouse pressed 
    if (mousedown) { 
         // Now we calculate the difference upwards 
        div.style.left = e.clientX + x + 'px'; 
        div.style.top = e.clientY + y + 'px'; 
    } 
}, true);