const foo = { text: "text1", number: 5, boolean: true };
const bar = { text: "text2", number: 50, boolean: true };
const baz = { text: "text3", number: 2, boolean: false };

console.log({ foo, bar, baz });
console.table([foo, bar, baz]);
console.log(`%c My Friends`, `color: orange`);

//Time tracking

console.time("loop");
let i = 0;
while (i < 100000000) {
  i++;
}
console.timeEnd("loop");

//Tracking

const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe(); 
