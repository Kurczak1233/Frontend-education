// Typy proste:
var num = 15;
var str = "text";
var flag = true; 
var el = null; //ZWARACA OBIEKT ALE TO TYP PROSTY!
var info; //UNDEFINED Zmienna niezdefiniowana
let mySymbol = Symbol("Sym"); //Symbol
let bignum = 1n // większe niż max dozwolone liczby (MAX_SAFE_INTIGER);
//Typy złożone
var tab = []; //Tablice
var obj = {}; //Obiekty
var tab = new Object(); //jw.
var data = new Data(); // jw

//Typy proste są NIEMUTOWALNE tzn:
let str = "Ala ma Kota";
str[0] = "X";
console.log(str); //Ala ma Kota
console.log(str[0]); // A
//Nie można modyfikować typów prostych.
//Cykl życia zmiennej wygląda więc następująco:
//1. Deklarowanie zmiennej z nadaniem lub nie jej typu po wartości przypisanej do niej.
let a = 5;
//2. Stworzenie drugiej zmiennej i zastąpienie pierwotnej nową wartością.
let b = 10;
a = b;
//3. Orginalna zmienna a zostaje przekazana do usunięcia (Garbage collector)
//4. Nazwa zmiennej a zostanie przypisana do innego miejsca w pamięci i nadana jej wartość poprzez KOPIĘ.
//5. Istnieją więc 2 zmienne jedna kopia a druga nie mająca nic wspólnego z pierwotną zmienną a
console.log(a, b) // 10 , 10

//Typy złożone (obiekty) są MUTOWALNE tzn:
let arr = [20, "string", true]; //tablica z intem/stringiem/booleanem
arr[0] = 1;
console.log(arr[0]); //1;