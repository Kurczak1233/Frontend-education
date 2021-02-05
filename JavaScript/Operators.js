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

//Porównania obiektów
// === dla obiektów sprawdza REFERENCJE
let c = {data: 22};
let d = {data: 22};
if(c === d) false //Nie wykona się bo referencje są różne!

//Operatory relacyjne
let num = {num: 10};
if("num" in obj) console.log("zmienna num w obj"); //in sprawdza czy coś jest w obiekcie

let arr = ["one", "two", "three"]
if(1 in arr) console.log("udało się");

var type = typeof arr //Array

var data = new Date(Getdate());
if(date instanceof Date) true;

//Operator trójargumentówy
var data = (5 > 8) ? 5 : 8; //True = 5  ,false = 8