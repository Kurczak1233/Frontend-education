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
