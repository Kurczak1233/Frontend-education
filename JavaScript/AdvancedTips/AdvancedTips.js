//Spread syntax

const picachu = {name: "Picatchu", lvl: 0}
const stats = [hp:30, mana:50]

const lvl0 = {...picachu, ...stats,}
const lvl1 = {...picachu, hp: 50,}
const lvl1 = {...picachu, mana: 100,}

// Loops

const total = orders.reduce((acc, cur) => acc + cur); //Total obj numbers.

const WithTax = orders.map(v=>v * 1.1);

const highValue = orders.filter(v => v > 100);

//Async
//returns all numbers in one function not in thens.
const sumRandomAsyncNums = async() => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
}