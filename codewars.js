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