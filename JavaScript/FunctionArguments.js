function foo(a,b,c)
{
    a = 5;
    b.a = 4;
    c = {a:3};
}

let a = 1;
let b = {a: 1};
let c = {a : 1};

console.log(a); //PRYMITYW
console.log(b.a); //4
console.log(c.a); //NIE ZMIENI SIĘ !