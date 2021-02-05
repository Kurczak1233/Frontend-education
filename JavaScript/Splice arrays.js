//[Array splice (startCount, deleteCount, addItem1, addIem2)]

var months = ["styczeń", "luty", "kwiecień", "maj"];
months.splice(2, 0, "marzec"); //Dodanie marca na 2 pozycje w tablicy (0, 1 -->2) , 0 elementów jest kasowanych
console.log(months); //["styczeń", "luty", "marzec", "kwiecień" ,"maj"]

var deletedElement = months.splice(0,1,"test"); //Usunięcie jednego z indeksu 0 i dodanie testu
console.log(months); //"test, luty, marzec..."
console.log(deletedElement); //Styczen 

//Funckja splice zwraca elementy skasowane, dlatego możemy przypisać do niej variable.

var tab = ["a", "b", "c", "d", "e"];
tab.splice(2,1, "x", "y", "z");
console.log(tab); //"a", "b","x", "y", "z" , "d", "e" 
var tab = ["a", "b", "c", "d", "e"];
tab.splice(-3,1, "x", "y", "z");
console.log(tab);  //"a", "b","x", "y", "z" , "d", "e" 