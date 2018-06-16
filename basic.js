variable = "varIabLe";
console.log(`This is one way to pass a ${variable}`);
console.log('This is another way to pass a ' + variable);
console.log('Let\'s check types:\n');
var number = 5.1234098098098345098153451;
console.log(`${number} is a type of ` + typeof number);
var string = "Stringy" + "cheese";
var num2str = 1 + "cat";
var array = [];
console.log(`${string} is a ` + typeof string);
console.log(`${num2str} is a ` + typeof num2str + ` where we concatenate a number and a string`);
console.log(`${array} is an empty ` + typeof array);
var rando = Math.random();
console.log('Generate a random number: ' + rando);
var rando1 = rando * 10;
console.log('Make it between 1 and 10:' + rando1);
console.log(Object.getOwnPropertyNames(Math));

console.log("\n\nNow we want to practice arrow functions.\n");
function fn1(params) {
    return params * 2;
  };
 var fn2 = (params) => params * 2;


console.log("For fn1, we use return.  For fn2, we use the arrow function");
console.log(`fn1 returns ${fn1(4)}`);
console.log(`fn2 returns ${fn2(4)}`);
