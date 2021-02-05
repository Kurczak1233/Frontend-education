//Tworzenie tablic
var a = []; // Literał tablicowy
var a = [1,2,3,"tsts", [2,4]] // Definiowanie elementów
var a = new Array(); // Operator new z Konstruktorem
var a = Array(5,5,2,6,"55"); //Konstruktor bez operatora new

//Ustalanie długości tablic //BEZUŻYTECZNE!
var a = new Array(5); //empty x 5 (lenght = 5)
var a = [5] //Literały

//Ustalenie wartości
var a = new Array.of(5); //[Wartość : 5]
a.push(55, 5 ,6); //Dodawanie elementu na koniec 
a[a.length] = 55; //Inny sposób poprzedniego
a.lenght = 2// UCINANIE elementów tablicy
delete a[1] //Usuwanie pojedynczego elementu (drugiego)
1 in a//szukanie indexu w tablicy
var b = new Array(5).fill(10); //Tworzenie 5 elementowej tablicy wypełnionej dziesiątkami

//Iterowanie po tablicy
//Forem (wiadomo)... albo Foreachem
b.forEach( function(item, index, array){
console.log(index, item);});
//Przewagą ForEacha nad forem jest to, że nie iterue po PUSTYCH miejscach

//Dodwanie do siebie tablic
var a = [1,2,3];
var b = [4,5,6];
var c = a.concat(b);

var a = [1,2,3];
var b = [4,5,6];
var c = a.concat(b);
c = c.join("POMIĘDZY");//Do stringa i dodanie pomiędzy wartościami stringa

c.reverse(); //Odwracanie

var pop = c.pop(); //Przypisanie ostatniego elementu do zmiennej i wyrzucenie elementu
var result = a.shift(); //Pobranie pierwszego elementu i usunięcie go
var newlenght = a.unshift(1,2); //Dodanie elementów do tablicy 

//Wyszukiwanie elementów
let months = ["styczeń" ,"luty", "maj", "lipiec"];
var result = months.indexOf("luty");  //Sprawdzanie czy jest luty
//returns: 1 (INDEX)