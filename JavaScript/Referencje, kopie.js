//Typy proste/wartościwoe przezujemy przez kopię.

function passByCopy(num, str)
{
    num += num;
    str += "!!!";
    console.log(num, str); // 10, text!!!
}

numer = 5;
text = "text";
console.log(numer, text); //5 , text
passByCopy(numer, text); //Przekazujemy przez kopię i ich nie zwracamy nawet!
console.log(numer, text); //5 , text

//Typy złożone/obiekty przezujemy przez referencje.
function passByReference(nu, re)
{
    nu.a += 5;
    re.push("haha");
    re[0] = "nie text";
}

var number = {
    a: 5
};

var text = ["text"];

passByReference(number, text);
console.log(number.a, text[0], text[1]); //10, nie text, haha