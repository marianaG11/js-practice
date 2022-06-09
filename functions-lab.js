//to run on terminal: node (filename)

//1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments
//and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression
function maxOfTwoNumbers(a, b) {
    if (a >= b){
        return a;
    }else {
        return b;
    }
};


console.log(maxOfTwoNumbers(2, 7));

//2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments
//and returns the largest of them
const maxOfThree = function(a, b, c){
    if (a >= b && a >= c){
        return a;
    }else if (a >= b && b >= c){
        return b;
    }else {
        return c;
    }
};

console.log(maxOfThree(1, 2, 3))

//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument
//and returns true if it is a vowel, false otherwise
function isCharAVowel(character){
    character = character.toLowerCase();
    return ('aeiou'.indexOf(character) > -1)
}

console.log(isCharAVowel('e'));

//4. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers.
//For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(arr){
    let total = 1;
    for (let i = 0; i < arr.length; i++){
        total *= arr[i];
    }
    return total;
};

console.log(multiplyArray([7, 8, 9]));