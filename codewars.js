//1. convert string to a number (8kyu)
const stringToNumber = function(str){
    return Number(str)
};
str = '234'
console.log(stringToNumber(str));


//2. reverse array order (8kyu)
function reverseOrder(a){
    let newArray = a.reverse();
    return newArray;
};
a = [1, 2, 4, 5]
console.log(reverseOrder(a));


//3. given a string of words, return the length of the shortest word(s) (7kyu)
function shortestWord(s){
    let words = s.split(" "); //split the string
    let shortest = words[0].length;

    for (let i = 1; i < words.length; i++){
        if(shortest > words[i].length){
            shortest = words[i].length;
        }
    }
    return shortest;
};
s = 'this is a test'
console.log(shortestWord(s));

//4. merge 2  sorted arrays into one (8kyu)
function mergeArrays(arr1, arr2){
    //concat() merges 2 or more arrays
    //sort() method sorts the elements of an array in place and returns the sorted array
    //array.from() creates a new array instance 
    return Array.from(new Set(arr1.concat(arr2).sort((x, y) => x-y)))
};

arr1= [1, 3, 5]
arr2 = [2, 4, 6]
console.log(mergeArrays(arr1, arr2));

//5. Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated. (7kyu)
function sortString(s){
    let evens = '';
    let odds = '';
    for (let i = 0; i < s.length; i++){
        if (i % 2 !==0){ //if there is a remainder, add to the odds
            odds += s[i]
        } else {
            evens += s[i]
        }
    }
    return evens + ' ' + odds
};
s = 'this is test number two'
console.log(sortString(s));

//6. find the middle element (7kyu)
    //create a function that when provided with a triplet
    //returns the index of the numerical element that lies between the other two elements.
function gimme(triplet){
    return triplet.indexOf(triplet.concat().sort(function(a, b) {return a -b })[1])
}
triplet = [1, 2, 4]
console.log(gimme(triplet));

//another method
function gimme(triplet){
    const copy = [] 
    for (let i of triplet) {copy.push(i)}
    copy.sort((a, b) => a-b);
    return triplet.indexOf(copy[1]);
};
triplet = [1, 5, 2]
console.log(gimme(triplet));


//7. remove vowels (7kyu)
    // write a function that takes a string and return a new string with all vowels removed.

function removeVowels(str){
    return str.replace(/[aeiou]/gi, ''); //regex
    //[aeiou] is a character class/set
    //g and i are regex modifiers
    //g means global (find all matches), i means case insensitive (to also match the upper case vowels)
    //replace the matches w/ an empty string, removing the vowels
}; 
str = 'does this work' 
console.log(removeVowels(str));

//8. powers of 2 (8kyu)
    //Complete the function that takes a non-negative integer n as input
    //and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
    let powers = []; //create empty array 
    for (i = 0; i <= n; i++){
        //Math.pow() takes 2 arguments: (base, exponent)
        powers.push(Math.pow(2, i)) //push() adds elements to end of array
    }
    return powers;
};
n = 2
console.log(powersOfTwo(n));

//9. nice array (7kyu)
    //A Nice array is defined to be an array where for every value n in the array
    //there is also an element n - 1 or n + 1 in the array.

    //every() method tests whether all elements in the array pass the test implemented by
    //the function; returns a Boolean value
const isNice = arr => Boolean(arr.length) && arr.every(i => arr.includes(i-1) || arr.includes(i+1));

arr = [2, 10, 9, 3]
console.log(isNice(arr));


//10. return the closest number multiple of 10 (7kyu)
const closestMultiple10 = num => Math.round(num/ 10) * 10

num = 22
console.log(closestMultiple10(num))


//11. sum of odd numbers (7kyu)
    //every row increases by one number
    //n is the row number
    //Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) 
function rowSumOddNumbers(n){
    return Math.pow(n, 3); //n is base, 3 is exponent
};
n = 2
console.log(rowSumOddNumbers(n));


//12. get the middle character (7kyu)
    //return the middle character of the word
    //if the word's length is odd return middle, if even return the 2 middle ones

function getMiddle(string){
    let middleChar = Math.floor(string.length / 2);
    if (string.length % 2 == 0){ //if s.length is even
        return string[middleChar - 1] + string[middleChar] //return 2 characters
    } else {
        return string[middleChar] //return one character
    }
};
string = "testingg"
console.log(getMiddle(string));

    //method 2 using slicing 
        //slice() method extracts a section of a string and returns a new one
        //slice(indexStart, indexEnd) (indexEnd not inclusive)
function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2 + 1);
};
s = "testingg"
console.log(getMiddle(s));

//13. Complementary DNA (7kyu)
    // method 1 w/ for loop
function dnaStrand(dna){
    let secondStrand = ""
    for ( i = 0; i < dna.length; i++ ){
        if (dna[i] == 'A'){
            secondStrand += ('T')
        }
        else if (dna[i] == 'T'){
            secondStrand += ('A')
        }if (dna[i] == 'G'){
            secondStrand += ('C')
        }if (dna[i] == 'C'){
            secondStrand += ('G')
        }
    }
    return secondStrand
};

dna = 'ATGCC'
console.log(dnaStrand(dna))

    //method2 with split and map
function DNAStrand(dna){
    const bases = { A: 'T', T: 'A', G: 'C', C: 'G'}
    //split() divides string into an ordered list of substrings: [ 'A', 'T', 'G', 'C', 'C' ]
    //map ()creates a new array, populated with the results of calling a provided function on every element
    //in the calling array map(callBackfunction)
    //join() method joins the elements in an array and returns a new string w/ them
    return dna.toUpperCase().split('').map(c => bases[c]).join('');
};
dna = 'ATGCTa'
console.log(DNAStrand(dna));

//14.  weird string case (7kyu)
function toWeirdString(s){
    s = s.toLowerCase().split(' ') //split(' ') removes spaces
    for (let i = 0; i < s.length; i++){
        s[i] = s[i].split('') 
        
        for (let j = 0; j < s[i].length; j++){
            if (j % 2 == 0){ //if index is even
                s[i][j] = s[i][j].toUpperCase()
            }
        }
        s[i] = s[i].join('')
    }
    return s.join(' ')
};

s = 'mariana'
console.log(toWeirdString(s));


// //15. flatten and sort the array (7kyu) gives error in codewars
// function flattenAndSortArray(array1){
//     let flatArray = array1.flat()
//     return flatArray.sort()
    
// }

// array1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
// console.log(flattenAndSortArray(array1))


//16. how many consecutive numbers (7kyu)
    //Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers
    //needed to make the contents of arr consecutive from the lowest number to the highest number

    //using spread syntax and ternary operator
const consecutive = arr => arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0


arr = [ 2, 4, 6, 8]
console.log(consecutive(arr))


//17. bumps in the road (7kyu)
    //Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less
    //return Woohoo!, otherwise return Car Dead

    //using a ternary operator
const bump = road => road.split('n').length > 16 ? "Car Dead": "Woohoo!"

road = 'n____nn'
console.log(bump(road))


//18. all unique (7kyu)
    // determine if a string contains only unique characters. Return true if it does and false otherwise.
    //characters are case sensitive

    //set() store unique values
    //size() returns the number of unique elements in a set object
const hasUniqueChars = str =>
    new Set(str).size == str.length;


str = "test"
console.log(hasUniqueChars(str))


//19. move 10 (7kyu)
    //method 1
    //separate letters into their own elements using split()
    //map() creates new array with new results from a function on every element
const moveTen = s => 
    s.split("").map(element => element.charCodeAt() + 10 > 122 ? String.fromCharCode(element.charCodeAt() - 16) :
    String.fromCharCode(element.charCodeAt() + 10)).join('')

s = "a"
console.log(moveTen(s))


//20. numbers to letters (7kyu)
    //given an array of numbers in string format
    //return a string with numbers corresponding to letters in reverse order
    //include !, ?, ' '
const characters = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(i => characters[i]).join('') //reverse at index element

x = ['26', '25', '24'] //gives a b c 
console.log(switcher(x))


//21. likes vs dislikes (7kyu)
    //Create a function that takes in a list of button inputs and returns the final state.
function likeOrDislike(buttons){
    let currentState = 'Nothing'
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i] === currentState){
            currentState = 'Nothing'  //return Nothing if no button is currently active
        } else {
            currentState = buttons[i]
        }
    } return currentState
};

buttons = ["Like", "Dislike"]
console.log(likeOrDislike(buttons))


    //method 2 using reduce() method and ternary operator
function likeOrDislike(buttons){
   return buttons.reduce((currentState, button) => button === currentState ? "Nothing": button, "Nothing");
};

buttons = ["Like", "Dislike"]
console.log(likeOrDislike(buttons))


//22. find multiples of a number (8kyu)
function findMultiples(integer, limit){
    let result = []
    for (let i = integer; i <= limit; i += integer)
        result.push(i)
    return result
};

console.log(findMultiples(5, 25))


//23. multiples of 3 or 5 (6kyu)
    //return the sum of all the multiples of 3 or 5 below the number passed in
function solution(number){
    let total = 0;
    for (let i = 3; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0)
            total += i
    }
    return total
};

console.log(solution(10));


//24. find numbers which are divisible by a given number (8kyu)
function divisibleBy(numbers, divisor){
    let divisible_numbers = [];
    for (let i = 0; i < numbers.length; i++){
        if( numbers[i] % divisor === 0){
            divisible_numbers.push(numbers[i])
        }
    }
    return divisible_numbers
};

numbers = [1, 2, 3, 4, 5, 6]
divisor = 2 

console.log(divisibleBy(numbers, divisor));

    //method 2 using filter() method
        //filter() creates a shallow copy of a portion of a given array, filtered w/ just the elements
        // that pass the test provided by the function 
function divisibleBy(numbers, divisor){
    return numbers.filter( num => num % divisor === 0);
}

numbers = [1, 2, 3, 4, 5, 6]
divisor = 2 

console.log(divisibleBy(numbers, divisor));

//25. convert number to reversed array of digits (8kyu)
    //toString() method returns a string representing the specified string
    //return the digits of this number within an array in reverse order.
    //split() method divides a string into an ordered list of substrings; returns an array
    //reverse() method reverses an array in place
function digitize(n){
    return n.toString().split("").reverse().map((i) => Number(i)) 
};

n = 1234
console.log(digitize(n));