test();

function test()
{
    var data;
    console.log(data)
    data = 4;
    console.log(data)
}

//Mając taką funkcję, JavaScript przenosi wszystkie deklaracje na górę, przez co możliwe jest wywołanie jej. 
var a = 5
function test2(a, b)
{
    return a + b
}
var b = 4
test2(a,b);
console.log(c);

//Powyższe zapytanie zadeklaruje zmienne, ale przypisanie nastąpi PO wywołaniu funkcji, dlatego wynikiem będzie NaN.

var a = 5;
console.log(a); //Przejdzie ale bez przypisanej wartości (undefined)
let b = 5;
console.log(b); //Nie przejdzie, bo let MUSI mieć przypisaną wartość.

