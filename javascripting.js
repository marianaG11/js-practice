//accessing array values
const food = ['apple', 'pizza', 'pear']

console.log(food[1]);

//array filtering 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filtered = numbers.filter(function(number){
    return (number %2) === 0
});

console.log(filtered);

//arrays
const pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni']
console.log(pizzaToppings);

//for loop
let total = 0;
const limit = 10;
for (let i = 0;  i < limit; i++){
    total += i
};

console.log(total);

//function-arguments
function math (firstArg, secondArg, thirdArg) {
    return (secondArg * thirdArg) + firstArg
};

console.log(math(53, 61, 67));

//if statement
const fruit = 'mango';
if (fruit.length > 5){
    console.log('fruit has more than 5 characters');
}else {
    console.log('fruit name has 5 characters or less');
};

//looping through arrays
const pets = ['dog', 'cat', 'hamster']
for (let i = 0; i < 3; i++){
    pets[i] = pets[i] + 's'
};

console.log(pets);

//number to string
let n = 128;
n = n.toString();

console.log(n);
// can also write it in one line console.log(n.toString());


//objects
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'thin',
    serves: 1
};
console.log(pizza);

//object properties
const foods = {
    types: 'only pizza'
};

console.log(foods.types);

//object keys
const car = {
    make: 'Tesla',
    model: 's',
    year: 2022
};
//using the Object.keys() method, prints an array of strings where each string
//is a key in the object
const keys = Object.keys(car);

console.log(keys);

//revisiting strings
let burgers = 'burgers are alright';
//use .replace() method to change the string to
burgers = burgers.replace('alright', 'delicious')

console.log(burgers);

//string length
const example = 'example string';
console.log(example.length); //.length property

//rounding numbers
const roundUp = 1.5;
//use Math.round() method
const rounded = Math.round(roundUp);

console.log(rounded);

//scope
//Functions defined inside other functions, known as nested functions
//have access to their parent function's scope

//IIFE, Immediately Invoked Function Expression, is a common pattern for creating local scopes
(function () { // the function expression is surrounded by parenthesis
    // variables defined here
    // can't be accessed outside
  })() // the function is immediately invoked


const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()

// Use your knowledge of the variables' scope and place
//the following code inside one of the functions so the output is a: 1, b: 8, c: 6
//console.log(`a: ${a}, b: ${b}, c: ${c}`);