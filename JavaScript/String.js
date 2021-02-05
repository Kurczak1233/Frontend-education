"Tekst".length //lenght to właściwość NIE FUNKCJA
var b = 123;
let txt = `Tekst ${s}`; //Szablony tworzymy przy BACKTICKACH (`)
let txt2 = `Tekst, 
test
dziala` //WIeloliniowy tekst
txt.length;
txt[text.length - 1] //Ostatni znak
txt.charAt(0); //Numer znaku
txt.charCodeAt(5); //Unicode znaku 
var txt3 = "Ala ma kota, Ula ma psa";
txt3.indexOf("ma"); //Drugi argument wyszukuje od podanego znaku
if(txt3.indexOf("ma") >= 0) console.log("Jest") // JEST
let re = /[A-Z]/g; //Wyrażenie regularne dla dużych liter od a do z globalnie(dla całego stringa)
let pos = "jakiś Tekst".search(re); //Zwraca 6 (na tym miejscu jest duża litera)
"Hello World \n".trim(); //Kasuje białe znaki zwraca Hello World!
let upCase = "Pewien tEksT".toUpperCase(); //PEWIEN TEKST
let lowerCase = upCase.toLowerCase(); //pewien tekst
let cd = "Tekst".concat(" hhh").concat(" 2.") // łaczenie tekstów
var str =  "01234567";
var a = str.slice(1,6); //12345
var b = str.slice(-1, 8); // 7 od pierwszej od końca 8 znaków
var c = str.slice(-3); //567 //3 od konca
str.substring(3); // 34567
str.substring(2,5); //456
str.substring(-3); //567 bo drugi jest zawsze <nazwa>.length
str.substr(1,5); //12345 //Druga wartośc określa ilość znaków
var str = "A B C D E F"
var data = str.split(" "); //data = [] !
console.log(data.length); //6 bo lenght liczy od 1
console.log(data[2]); //C

var txt = "Html CSS JavaScript PHP Python Sql"
var langs = txt.replace(/sql/i, "MongoDB"); //i daje insensitive czyli wielkość liter nie jest ważna
console.log(langs); //Html CSS JavaScript MongoDB PHP Python Sql

var txt = "Html CSS JavaScript sQL PHP Python Sql"
var langs = txt.replace(/sql/ig, "MongoDB"); //g podmienia WSZYSTKIE wyszukane frazy
console.log(langs); //Html CSS JavaScript MongoDB PHP Python MongoDB
