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

console.log(pets)