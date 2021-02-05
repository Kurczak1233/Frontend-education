//+/- += ++ **=... itd.

function printVar(data)
{
    console.log("Wartość w funkcji" + data);
}
let a = 1;
console.log("Przed wywołaniem: " + a); //1
printVar(a++); //POSTINKREMENTACJA! (pierwsze wywoła, potem ikrementuje) //Wartość w funkcji : 1
console.log("Po wywołaniu " + a) //2

console.log("Przed wywołaniem: " + a); //2
printVar(++a); //PREINKREMENTACJA! (pierwsze zinkrementuje, potem funkcja) //Wartość w funkcji : 2
console.log("Po wywołaniu " + a) //2

//Ścisłe operatory porównania
// == vs ===
// == Operator luźnego porównania. Sprawdza wartości
// === Operator ścisłsłego porównania. Sprawdza wartości i typy
if(5 == "5") true //Bo zostanie skonwertowany string do num
if(5 === "5") false //Bo nie będzie konwersji.