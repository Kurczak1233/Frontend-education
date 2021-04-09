import React from 'react'

export function Test()
{
    const functioon = (Arg) => console.log("Argument funkcji: " + Arg)
    const functioon1 = Arg => console.log("Jedyny argument funkcji: " + Arg)
    const functioon2 = Arg =>{ console.log("Jedyny argument funkcji: " + Arg)}
    const functioon3 = (Arg1, Arg2) =>{ return `argument funkcji: ${Arg1} + ${Arg2}`}
    //Z eventem
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => console.log(this)); //This wskazuje na window obiekt globalny
    btn.addEventListener('click', function() { console.log(this)}); //This wskazuje na buttona.
    //Join()
    const users= ["Michal", "Adam", "Kuba"];
    const string = users.join(" "); //"Michal Adam Kuba"
    //Concat()
    const users1= ["Michal", "Adam", "Kuba"];
    const appended = users.concat("Beata"); // Dodano beate...
    //Operator spread
    const users2= ["Michal", "Adam", "Kuba"];
    const expandedUser = [...users, "Michalina"]; //Dodano Michalinę...
    //Map()
    const users3= ["Michal", "Adam", "Kuba"];// Map stworzy nowa tablice jak inne wyżej...
    const UserFirstLetterUpperCase = users.map(user => user[0].toUpperCase())
    console.log(UserFirstLetterUpperCase) // ["M", "A", "K"]
    //Map() v2. //Zwraca tablice o tej samej długości.
    const numbers = [1,2,3];
    const doubleNumbers = numbers.map(number => number*2);//[2,4,6]
    //forEach()
    const usersAge = [20,21,23,24];
    usersAge.forEach(age => age*2); //returns undefined
    usersAge.forEach(age => `za rok każdy będzie miał ${age+1} lat`); //pokaże prawidłowo.
    let usersTotalAge = 0; // 0 => 88
    usersAge.forEach(age => usersTotalAge+=age);
    //Creating in dom section
    const usersAge1 = [20,21,23,24];
    const section = document.createElement('section');
    usersAge.forEach((age,index,array) => {
        section.innerHTML += (
            `<h1> Użytkownik ${index + 1}</h1>
            <p>Wiek ${age}</p>`
        )
        if(index === array.length-1)
        {
            document.body.appendChild(section);
        }
        }
    )
    //Filter()
    const users24= ["Michal", "Adam", "Kuba"];
    const NameWith6Letters = users.filter(user => user.length===6)//Michal
    //FindIndex()
    const users33= ["Michal", "Adam", "Kuba"];
    const FindUserWhereKIsPresent = users.findIndex(user => user.indexOf("k") > -1)
        
};