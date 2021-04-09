import React from 'react'

export function Test()
{
    class Country {
        constructor(name, capital, population)
        {
            //This dotyczy tego tworzeonego obiektu!
            this.name = name;
            this.capital = capital;
            this.population = population;
            this.showName = () => console.log(this.name);
        }
        showCountryName()
        {
            console.log(`Nazwa kraju to ${this.name}`)
        }
    }
    const poland = new Country('Polska', 'Warsaw', 38800000);
    
    //Dziedziczenie

    class Person {
        constructor(name)
        {
            this.name = name;
        }
        showName() {
            console.log(`Imie tego osobnika to ${this.name}`)
        }
    }

    class Student extends Person {
        constructor(name = "", degrees = [])
        {
            super(name);
            this.degrees = degrees;
        }
        showDegrees(){
            const completed = this.degrees.filter(degree => degree > 2)
            console.log(`Studenciak ${this.Name} ma stopnie ${this.degrees} i zaliczył już ${(this.completed.length)}`)
        }
    }



}
