//functions
console.log(`hello ${name}!!`)

sayHello('mariana')
//function expression 
//here, the function itself is stored in a variable; therefore use the function keyword like above, instead of this
//preferred way to write functions:
const sayGoodbye = function(goodByePhrase, name){
  console.log(`${goodByePhrase} ${name}!`)
}
//can have as many parameters, but need to pass on values for the parameters
sayGoodbye('adios', 'kate')
sayGoodbye('bye', 'tim')

//some functions wont have parameters ex:
function sayHi() {
  console.log('Hi')
}
sayHi()

//function declarations get hoisted; meaning when program runs, program will look for the function keyword they get brought to top

//arrow functions: need to be careful where they are used, keyword: this doesnt work with this?
// arrows and arrays
const colors = ['purple', 'red', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
colors.forEach((color) => {
  console.log(color)
})

colors.forEach(color => color.toUpperCase())

//to give function a value: return keyword and the value. return is the exit of the function

//practice: problem 1
function computerArea(width, height){
  let area= width * height;
  console.log('The area of a rectangle with a width of '+ width + ' and a height of ' + height + ' is ' + area +  ' square units');
}
computerArea(5,5);

//scope
/* global scope: when a variable is declared outside
//local: when a variable is declared inside. 
variables flow from outside in.


*/
const kimName ='kim';
function getPlayerName(){
 const jimName = 'jim';

function getLastName(){
  const lastName ='garcia'
}
getLastName();
}
console.log(getPlayerName())
// var pollutes the global name space, so dont use- it "leaks"


//get random int
function getRandomInt(min, max){
  return Math.floor(Math.random()* (max-min + 1 ) + min);
}
getRandomInt(5, 10);

//write a function expression example
const planetHasWater = function(planet){
  if (planet=== 'earth'|| planet ==='mars'){
    return 'true';
  }else 
    return 'false';
  }
planetHasWater('mars');

console.log(planetHasWater('venus'));

