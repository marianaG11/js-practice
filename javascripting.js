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
}

console.log(total);