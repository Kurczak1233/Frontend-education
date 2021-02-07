//
function sumAll(...params)
{
console.log("Parametry funckji:" + params)
let sum = 0;
return params.reduce( function(suma,value)
    {
    return suma+value;
    });
}
console.log(sumAll(10,20,30,40));