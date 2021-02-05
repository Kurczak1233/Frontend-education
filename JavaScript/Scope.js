//LET
//Ma zasięg lokalny
if(true)
{
    let a = 5;
}

console.log(a); // NIE MA A!

if(true)
{
    var a = 4;
}

console.log(a); //4

//Var ma znów zasięg globalny, można go używać poza blokiem.

for(var i = 0; i < a; i++)
{
    true;
}
console.log(i); //Mamy do niej dostęp!
for(let i = 0; i < a; i++)
{
    true;
}
console.log(i); //Nie mamy do niej dostępu!

//Var ma za to zakres FUNKCYJNY
function dosth(a,b) {
    var data = 20;
    console.log(a,b,data);
}
dosth(5,6);
console.log(data); //Nie ma!

//Ustrzeganie się przed ndapisywaniem nieistniejącej zmiennej
function check()
{
    "use strict";
    newNum = 200; 
}
check(); //Nie zadziała, bo nie mamy globalnej zmiennej newNum!

//Poprawne działanie na typu danych let

let x = 10
if(true)
{
    let x = 50;
    console.log(x) //50
    window.x = 30;
    console.log(window.x) //30
}