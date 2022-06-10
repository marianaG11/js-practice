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

console.log(maxOfThree(1, 2, 3));

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

//5. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function(...args){ //spread syntax
    return args.length;
}

console.log(numArgs("1", 1, "2", 2));

//6. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it.
//For example, reverseString('rockstar'); would return the string "ratskcor"

function reverseString(str){
    let reverseStr = ""; //create new string
    for (let i = str.length -1; i >= 0; i--){ //iterate the string starting from the last character through the first character
        reverseStr += str[i]; //then concatenate each character to the new string
    }
    return reverseStr; //return the new string
};

console.log(reverseString("mariana"));

//or 
function reverseString(str){
    return str
    .split("") //split the string by characters; turns string into an array of characters
    .reverse() //reverses the array of characters
    .join(""); //joins the characters back together into a string
};

console.log(reverseString("mariana"));

//7. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument
//and returns the length of the longest string
const longestStringInArray = function(arr){
    let longestString = '';
    arr.map(function(str){
        if (str.length > longestString.length){
            longestString = str; //the str is now the longestString
        }       
    })
    return longestString;
};

//or
const longestStringInArray2 = arr => arr.reduce((a, b) => b.length > a.length ? b : a);

console.log(longestStringInArray(['hi', 'hello', 'what\'s up']));

//8. Define a function, as a function declaration, stringsLongerThan that takes an array of strings
//and a number as arguments; and returns an array of the strings that are longer than the number passed in.
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]
const stringsLongerThan = function(arr, len){
    return arr.filter(function(str){
        return (str.length > len)
    })
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 5));