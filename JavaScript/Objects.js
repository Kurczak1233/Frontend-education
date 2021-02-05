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