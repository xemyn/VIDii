// JavaScript Document
console.log("Howdy!");


// De deuren van de kast kunnen open en dicht.
var element1 = document.querySelector("section:nth-of-type(3)");
element1.addEventListener("click", toggleDoor);
var element2 = document.querySelector("section:nth-of-type(4)");
element2.addEventListener("click", toggleDoor);

function toggleDoor() {
    element1.classList.toggle("linkerdeurOpen");
    element2.classList.toggle("rechterdeurOpen");
}

/////////////////////////////
// Boek een & bron: [JS les]
/////////////////////////////
// Het eerste boek die je aanklikt vanuit de plank op de kast
var deEersteBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(1) button")
deEersteBoekButton.addEventListener("click", eersteBoek);

function eersteBoek() {
    var boekEen = document.querySelector("article:nth-of-type(2)")
    boekEen.classList.toggle("openEersteBoek");
}
// Het eerste boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deEersteOpenBoekButton = document.querySelector("article:nth-of-type(2)")
deEersteOpenBoekButton.addEventListener("click", eersteOpenBoek);

function eersteOpenBoek() {
    var boekOpenEen = document.querySelector("article:nth-of-type(2)")
    boekOpenEen.className = ''; 
}

/////////////////////////////
// Boek twee & bron: [JS les]
/////////////////////////////
// Het tweede boek die je aanklikt vanuit de plank op de kast
var deTweedeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(2) button")
deTweedeBoekButton.addEventListener("click", tweedeBoek);

function tweedeBoek() {
    var boekTwee = document.querySelector("article:nth-of-type(3)")
    boekTwee.classList.toggle("openTweedeBoek");
}
// Het tweede boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deTweedeOpenBoekButton = document.querySelector("article:nth-of-type(3) section:nth-of-type(1) button:nth-of-type(1) img")
deTweedeOpenBoekButton.addEventListener("click", tweedeOpenBoek);

function tweedeOpenBoek() {
    var boekOpenTwee = document.querySelector("article:nth-of-type(3)")
    boekOpenTwee.className = ''; // Alles in de class vervangen met niks ( ''  ) // Jeffrey kwam hiermee
}

// Naar de volgende bladzijde op tweedeboek 
var devolgendebladboek2button = document.querySelector("article:nth-of-type(3) section:nth-of-type(2) button:nth-of-type(1) img")
devolgendebladboek2button.addEventListener("click", volgendeBlad);

function volgendeBlad() {
    var boektweeblad = document.querySelector("article:nth-of-type(4)")
    boektweeblad.classList.toggle("openvoglendeblad");
}

// Het tweede boek & volgende baldzijde is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var terugvolg = document.querySelector("article:nth-of-type(4) section:nth-of-type(1) button:nth-of-type(1) img")
terugvolg.addEventListener("click", vorigepagina);

function vorigepagina() {
    var boekOpenTweevolg = document.querySelector("article:nth-of-type(4)")
    boekOpenTweevolg.classList.toggle("terugVorigePagina");
}


/////////////////////////////
// Boek drie & bron: [JS les]
/////////////////////////////
// Het derde boek die je aanklikt vanuit de plank op de kast
var deDerdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(3) button")
deDerdeBoekButton.addEventListener("click", derdeBoek);

function derdeBoek() {
    var boekDrie = document.querySelector("article:nth-of-type(5)")
    boekDrie.classList.toggle("openDerdeBoek");
}

// Het derde boek is geopend en je wilt naar de volgende bladzijde 
var devolgendebladboek3button = document.querySelector("article:nth-of-type(5) section:nth-of-type(2) button:nth-of-type(1) img")
devolgendebladboek3button.addEventListener("click", volgblad2);

function volgblad2() {
    var boekdrieblad = document.querySelector("article:nth-of-type(6)")
    boekdrieblad.classList.toggle("openvoglendeblad2");
}

// Het derde boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deDerdeOpenBoekButton = document.querySelector("article:nth-of-type(5) section:nth-of-type(1) button:nth-of-type(1) img")
deDerdeOpenBoekButton.addEventListener("click", derdeOpenBoek);

function derdeOpenBoek() {
    var boekOpendrie = document.querySelector("article:nth-of-type(5)")
    boekOpendrie.className = '';
}
// Het derde boek & volgende baldzijde is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var terugvolg2 = document.querySelector("article:nth-of-type(6) section:nth-of-type(1) button:nth-of-type(1) img")
terugvolg2.addEventListener("click", vorigepagina2);

function vorigepagina2() {
    var boekOpendrievolg = document.querySelector("article:nth-of-type(6)")
    boekOpendrievolg.classList.toggle("terugVorigePagina2");
}


/////////////////////////////
// Boek vier & bron: [JS les]
/////////////////////////////
// Het vierde boek die je aanklikt vanuit de plank op de kast
var deVierdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(4) button")
deVierdeBoekButton.addEventListener("click", vierdeBoek);

function vierdeBoek() {
    var boekVier = document.querySelector("article:nth-of-type(7)")
    boekVier.classList.toggle("openVierdeBoek");
}
// Het vierde boek is geopend en je wilt naar de volgende bladzijde
var devolgendebladboek4button = document.querySelector("article:nth-of-type(7) section:nth-of-type(2) button:nth-of-type(1) img")
devolgendebladboek4button.addEventListener("click", volgbladvanvierde);

function volgbladvanvierde() {
    var boekvierblad = document.querySelector("article:nth-of-type(8)")
    boekvierblad.classList.toggle("openvoglendeblad4");
}

// Het Vierde boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deVierdeOpenBoekButton = document.querySelector("article:nth-of-type(7) section:nth-of-type(1) button:nth-of-type(1) img")
deVierdeOpenBoekButton.addEventListener("click", vierdeOpenBoek);

function vierdeOpenBoek() {
    var boekOpenvier = document.querySelector("article:nth-of-type(7)")
    boekOpenvier.className = ''; // Alles in de class vervangen met niks ( ''  ) // Jeffrey kwam hiermee
}
// Het vierde boek & volgende baldzijde is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var terugvolg4 = document.querySelector("article:nth-of-type(8) section:nth-of-type(1) button:nth-of-type(1) img")
terugvolg4.addEventListener("click", vorigepagina4);

function vorigepagina4() {
    var boekOpenviervolg = document.querySelector("article:nth-of-type(8)")
    boekOpenviervolg.classList.toggle("terugVorigePagina4");
}


/////////////////////////////
// Boek vijf & bron: [JS les]
/////////////////////////////
// Het vijfde boek die je aanklikt vanuit de plank op de kast
var deVijfdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(5) button")
deVijfdeBoekButton.addEventListener("click", vijfdeBoek);

function vijfdeBoek() {
    var boekVijf = document.querySelector("article:nth-of-type(9)")
    boekVijf.classList.toggle("openVijfdeBoek");
}

// Het vijfde boek is geopend en je wilt naar de volgende bladzijde
var devolgendebladboek5button = document.querySelector("article:nth-of-type(9) section:nth-of-type(2) button:nth-of-type(1) img")
devolgendebladboek5button.addEventListener("click", volgbladvanvijfde);

function volgbladvanvijfde() {
    var boekvijfblad = document.querySelector("article:nth-of-type(10)")
    boekvijfblad.classList.toggle("openvoglendeblad5");
}

// Het vijfde boek & volgende baldzijde is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var terugvolg5 = document.querySelector("article:nth-of-type(10) section:nth-of-type(1) button:nth-of-type(1) img")
terugvolg5.addEventListener("click", vorigepagina5);

function vorigepagina5() {
    var boekOpenvijfvolg = document.querySelector("article:nth-of-type(10)")
    boekOpenvijfvolg.classList.toggle("terugVorigePagina5");
}


// Het Vijfde boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deVijfdeOpenBoekButton = document.querySelector("article:nth-of-type(9) section:nth-of-type(1) button:nth-of-type(1) img")
deVijfdeOpenBoekButton.addEventListener("click", vijfdeOpenBoek);

function vijfdeOpenBoek() {
    var boekOpenvijf = document.querySelector("article:nth-of-type(9)")
    boekOpenvijf.className = ''; // Alles in de class vervangen met niks ( ''  ) // Jeffrey kwam hiermee
}


/////////////////////////////
// Boek zes & bron: [JS les]
/////////////////////////////
// Het zesde boek die je aanklikt vanuit de plank op de kast
var deZesdeBoekButton = document.querySelector("article:nth-of-type(1) section:nth-of-type(9) li:nth-of-type(6) button")
deZesdeBoekButton.addEventListener("click", zesdeBoek);

function zesdeBoek() {
    var boekZes = document.querySelector("article:nth-of-type(11)")
    boekZes.classList.toggle("openZesdeBoek");
}

// Naar de volgende bladzijde op zesde boek 
var devolgendebladboek6button = document.querySelector("article:nth-of-type(11) section:nth-of-type(1) button:nth-of-type(1) img")
devolgendebladboek6button.addEventListener("click", volgbladvanzesde);

function volgbladvanzesde() {
    var boekzesblad = document.querySelector("article:nth-of-type(11)")
    boekzesblad.classList.toggle("openvoglendeblad6");
}

// Het zesde boek is open geklapt en je wilt via het opengeklapte boek weer terug naar de homepagina
var deZesdeOpenBoekButton = document.querySelector("article:nth-of-type(11) section:nth-of-type(1) button:nth-of-type(1) img")
deZesdeOpenBoekButton.addEventListener("click", zesdeOpenBoek);

function zesdeOpenBoek() {
    var boekOpenZes = document.querySelector("article:nth-of-type(11)")
    boekOpenZes.className = ''; // Alles in de class vervangen met niks ( ''  ) // Jeffrey kwam hiermee
}






