var o = {}; //Notacja lirerałowa - obiekt
typeof o; // object
var arr = [22,56,78];
typeof arr; //object
var plane = {
    model: "BlackBird",
    country: "USA",
    printInfo: function()
    {
        console.log(this.model, this.country);
    }
};
plane.printInfo(); //Blackbird USA
plane.year = 1971;
plane.printInfo = function()
{
    console.log(this.model, this.country, this.year);
}
plane.printInfo(); //Blackbird USA 1971
/// Najpopularniejsze tworzenie obiektów : LITERAŁY 
//SPOSÓB 1 tworzenia obiektów
function CreatePlane(planeModel, planeYear, planeBrand)
{
    return {  //Zwramy LITERAŁ obiektu!
        model: planeModel,
        brand: planeBrand,
        year: planeYear,
        printInfo: function()
        {
            console.log(this.model, this.brand, this.year)
        }
    }
}

let b = creatPlane("747", 1965, "boeing");
b.printInfo() // to co wyżej... Dzięki takiemu zabiegowi możemy tworzyć wieleo obiektów
//przy pomocy jednej funkcji

var d = new Date(2050,5,6);
d.toDateString(); // Wyświetli date.
var s = new String(525);
s.toString(); // "525"
var arr = new Array(2,5,6,7);
arr.toString(); //"2,5,6,7"
//Tworzymy sobie konstruktor i go użyjemy! (Mało popularny)
//SPOSÓB 2 tworzenia obiektów, mniej praktyczny
function Car(carBrand, carModel, carYear) { //Z dużej litery bo konstruktor!
    if((this instanceof Car) === false) return new Car(carBrand, carModel, carYear);
    this.brand = carBrand; //Funckja wejdzie 2 raz i przydzieli wartości polom.
    this.model = carModel;
    this.year = carYear;
    this.printInfo = function()
    {
        console.log(this.brand, this.year, this.model);
    }
}
let car1 = new Car("Audi", "A4", 2007);
car1.printInfo(); //Audi A4 2007

//Tworzenie obiektów przez funkcje Object.create
//SPOSÓB 3 tworzenia obiektów
var x = Object.create({a:5,b:1}); //proptytp
x.a // 5
x.b // 1
//Sprawdzanie czy właściwość istnieje w danym obiekice
if("year" in b); true //do sth (TRUE!);
if(b.hasOwnProperty("year")); true //do sth (TRUE!)

//przegląd obiektów

for(prop in b)
{
    console.log(prop + ":" + b.prop); //Przejrzenie to co ma w środku b + prototypy! 
}
for(prop in b)
{
    if(b.hasOwnProperty(prop)) console.log(prop + ":" + b.prop); //Przejrzenie to co ma w środku b BEZ PROTOTYPÓW!! 
}

//Kopiowanie obiektów
//Płytkie
var object = {a:5, b:1};
var clone = object;
clone === object //true
clone.b = 3; 
clone === object; //True bo pracujemy na tym  samym obiekcie i będą wyglądać tak samo (referencja!)

//Głebokie
var object2 = {a:5, b: {c:5,d:2},c: "txt"}
var copy = JSON.stringify(source);
copy;// "a:5, b: {c:5,d:2},c: "txt"" Tutaj wszystko jako string
//A tutaj jako klon obiektu
copy = JSON.parse(JSON.stringify(object2));

//GETTERY I SETTERY
var person = {
    firstname: null,
    lastname: null,
    get fullname ()
    {
        return this.firstname + " " + this.lastname;
    },
    set fullname (newName)
    {
        var splited = newName.split(" ");
        this.firstname = splited[0];
        this.secondname = splited[1];
    }
}
person.fullname = "Ola Kowalska";
person.firstname; //Ola
person.secondname; //Kowalska