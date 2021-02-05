//Falsy Values:
let b = ""
if(b) console.log("nie wykona się bo falsy");
//0,-0, "", false, 0n, NaN, undefined, null, false
//Truthly
let b = new Boolean(false);
if(b) console.log("wykona się bo obiekt"); //fałszywy obiekt
//liczby różne od 0, stringi różne od pustego, liczby, tablice
var n = new Number(0);
if(n) console.log("wykona się bo obiekt") // fałszywy obiekt

//Przy okazji null i undefined:
//PORÓWNANIE PROSTE (po konwersji typów wartości są takie same)
if(null == undefined) console.log("wykona się");
//PORÓWNANIE ŚCISŁE (Typy się nie zgadzają)
if(null === undefined) console.log("nie wykona się");