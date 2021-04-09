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
        }
    }
    const poland = new Country('Polska', 'Warsaw', 38800000);
    



    
}
