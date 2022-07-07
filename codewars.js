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