/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Algemene bronnen: 
/*http://mrcoles.com/piano/ */
/*http://makeymakey.com/piano/ */
/*https://www.youtube.com/watch?v=xts3zWbuB18 */
/*http://codepen.io/bennettfeely/details/GvAcf?preview_height=442 */
/*http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example */
/*http://www.w3schools.com/js/js_function_parameters.asp */
/*http://stackoverflow.com/questions/1451009/javascript-infamous-loop-issue */

//Geluidsbron: 
/*http://freesound.org/people/jobro/packs/2489/ */

/*
Audio locatie met bestandsnaam. 
*/
var baseFileName = "assets/audio/sound";

/*
Hier maak ik de extensie van de audio files bekend.
*/
var fileExtension = ".wav";

/*
Het totaal nummer van keysounds.
*/
var numberOfKeysounds = 6;

/*
Hier maak ik de array aan die alle audio bestanden onthoud die later hier naar toe worden gepushed. 
*/
var keysounds = [];


function registerKeysounds() {

    /*
    Ik maak hier de loop aan die een waarde toekent aan de list items en de audio bestanden. De loop wordt uitgevoerd totdat alle keysounds een waarde hebben gekregen. Dit heb ik bekend gemaakt met de var "numberofKeysounds". Hierna stopt de loop. 
    */
    var i;
    for (i = 0; i < numberOfKeysounds; i++) {

        /*
        Hier maak ik twee addeventlisteners aan, die pas actief worden na een klik event op een list item. Na het triggeren van de listeners, worden er voor beide een andere function gestart (createPlayKeysound en counter). 
        */
        document.getElementsByTagName('LI')[i].addEventListener("click", createPlayKeysound(i), false);
        document.getElementsByTagName('LI')[i].addEventListener("click", counter, false);
        /*
        Hier wordt de bestandsnaam bekend gemaakt. Concat werkt als volgt: baseFileName (“assets/audio/sound”) + i (0, 1, 2 etc.) + extension (“.wav”). Resultaat: “assets/audio/sound0.wav”, “assets/audio/sound1.wav”, “assets/audio/sound2.wav” etc.
        */
        var fileName = baseFileName.concat(i.toString(), fileExtension);
        /*
        Hier wordt de audio file aangemaakt en naar de array gepushed. 
        */
        keysounds.push(new Audio(fileName));
    }
}

/*
Deze function wordt aangeroepen door de addeventlistener en spreekt vervolgens de function playKeysound aan om geen issues te krijgen met de loop.  
*/
function createPlayKeysound(i) {
    return function () {
        playKeysound(i);
    };
}

function start() {
    registerKeysounds();
}

/*
Function start wordt eenmalig uitgevoerd na het refreshen van de pagina. 
*/
window.onload = start;

/*
Na de volgende function te starten zal op basis van het indexnummer het audio bestand afspelen. 
*/
function playKeysound(index) {
    keysounds[index].play();
}

/*
Hieronder maak ik een nieuwe alinea (p tag) aan.  
*/
var number = 0;
var myNewElement = document.createElement("p");

/*
De alinea krijgt hier een id mee. 
*/
myNewElement.setAttribute("id", "newP");
/*
Dan wordt de zojuist aangemaakte alinea gekoppeld aan de al bestaande alinea met de id "aantaltoetsen". 
*/
aantaltoetsen.appendChild(myNewElement);
/*
Vervolgens wordt hier de (start) waarde van "number" naar de zojuist aangemaakte alinea geschreven. 
*/
myNewElement.innerHTML = number;

/*
Hier maak ik de functie aan om iedere keer +1 aan de waarde van "number" toe te voegen nadat de eventaddlistener geactiveerd wordt door een klik. 
*/
function counter() {
    number++;
    /*
    de nieuwe waarde wordt naar de eerder aangemaakte alinea weggeschreven met id: "newP". 
    */
    document.getElementById("newP").innerHTML = number;
}