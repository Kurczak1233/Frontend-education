//FUNKCJA
function test()
{

}
//WYRAŻENIE FUNKCYJNE
var source = function()
{

}

test();
source();

//Wążną różnicą jest hoisitng przy wyrażeniu funkcyjnym a funkcją.
//Funkcje można wywołać przed zadeklarowaniem (dzięki hoistingu)
//Wyrażenie funkcyjne już nie
test(); // OK
source(); //Nie zadeklarowana!
function test()
{

}
//WYRAŻENIE FUNKCYJNE
var source = function()
{

}
