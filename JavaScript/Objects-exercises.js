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
///
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