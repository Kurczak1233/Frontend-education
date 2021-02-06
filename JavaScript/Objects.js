//Literał obiektu
var o = {};
typeof o; // object

var arr = [10, 20, "Arr"];
typeof arr; //object

//Przykładowa notacja literałowa.

var rect = {x:10, y0, width:100, height:200};

var car = {
    name: "Chervrolet",
    model: "Mako Shako",
    year: 1965,
    details:{
        type: "contept car",
        codename: "XP-6554"
    },
    information: function() {
        console.log(this.name, this.model, this.details.type);
    }
}
car.information();

//Konstruktor w javascript

function Car(brand, model) //argumenty
{ //Dynamicznie tworzymy propoerty
    this.brand = brand; //this odwołuje się do właściwości cara
    this.model = model; //W ten sposób tworzymy obiekt z właściwościami
    this.printInfo = function() {
        console.log(this.brand, this.model)
    }
}

const car = new Car("Playmonth", "Baraccuda");
car.printInfo();

//Popularny błąd w konstruktorze: brak new

let car  = Car("BMW", "5"); //BRAK NEW! Wywoła się jako funckja
car.printInfo()//Car is undefined!

//Jak go więc rozwiązać?

function Car(brand, model)
{
    if((this instanceof Car) === false){
        return new Car(brand, model);
    }
    this.brand = brand; //this odwołuje się do właściwości cara
    this.model = model; //W ten sposób tworzymy obiekt z właściwościami
    this.printInfo = function() {
        console.log(this.brand, this.model)
    }
}

const car1 = Car("GMC", "Syclone"); //W tym wypadku, jest to zabezpieczone
const car1 = new Car("Ford", "Mondeo");

//Dostęp do właściwości obiektu

var obj = {
    name: "test", size: 10,
    log: function()
    {
        console.log(this.name, this.size);
    }
};

console.log(obj.name); //test
console.log(obj["size"]); //10 //Notacja tablicowa
obj["log"](); //Wywołanie funkcji notacją tablicową!

obj.codeName = "XP"; //Dodanie własciwości 
obc["codeName"] = "GD";

delete obj.name //Skasowanie własciwości

var plane = {name: "Black" , brand:"Lock"};

if("name" in plane) console.log(plane.name);
if("model" in plane) console.log(plane.model); //Nie ma takiej prop.
//Ma własną właściwość?
if(plane.hasOwnProperty("brand")) console.log(plane.brand) 

plane.hasOwnProperty("hasOwnProperty"); //Dziedziczy tą funkcję więc false


//Stała w obiektach
const a = {data: 10} //Stała jest tylko referencja do obiektu!
a.data = 50; //Możliwe.
b = {info:55} // Niemożliwe! nie można przypisać do ref, nowego obiektu.

//Pętla forech w obiektach
var obj = {a:10, b:"text", print: function(){}}

for(prop in obj)
{
    if(obj.hasOwnProperty(prop))
    {
        console.log("property: " + prop +  " wartość: " + obj.prop)
    }
}
//Inny sposób
//Otrzymujemy obietk bez funckji dziedziczonych!
const objKeys = Object.keys(obj);
for(let i=0; i<objKeys.length; i++)
{
    console.log("property: " + objKeys[i] + "wartość " + obj.objKeys[i]);
}
//Inny sposób
//Otrzymujemy obietk bez funckji dziedziczonych!
const objValues = Object.values(obj);
for(let i=0; i < objValues.length; i++)
{
    console.log("i: " + i + "wartość " + objValues[i]);
}
//Inny sposób
//Otrzymujemy obietk bez funckji dziedziczonych!
const objEntries = Object.entries(obj);
for([key, value] of objEntries)
{
    console.log("key: " + key + "value  " + value);
}

//Płytka kopia i połaczenie obiektów <PŁYTKA KOPIA>
const sourceObj = {data: 10, str:"txt", obj: {a:5}};
let clone = {info: 88};
let result = Object.assign(clone, sourceObj);

clone === result; //true
sourceObj === result;  //false

result; //88,10,txt obj:{a:5}
result.obj === sourceObj.obj; //true, ale współdzielą obiekt obj!!!

//Tworzenie głebokiej kopii <GŁĘBOKA KOPIA>
var source = {str: "txt", num: 10, date: new Date(2020,2,5), obj:{a:5}}
var copy = JSON.parse(JSON.stringify(soruce));

console.log(copy===source); //false, oddzielny obiekt
counsole.log(copy.obj === source.obj); //false, oddzielny obiekt
typeof source.date; // object
typeof copy.date; //string
console.log(copy.data)//string w ISO formacie

//Jest dobra, ale dla prostych obiektów. Obiekt Date formatuje się do string

//Dodwanie właściwości do obiektu
var someObj = {a: 5};

Object.defineProperty (someObj, "propName", {
    value: 20,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(someObj.propName);
someObj; //a:5, propName: 20
delete someObj.propName;
console.log(someObj.propName);