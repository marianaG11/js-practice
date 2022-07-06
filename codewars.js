//1. convert string to a number 8ku
const stringToNumber = function(str){
    return Number(str)
};
str = '234'
console.log(stringToNumber(str));


//3. reverse array order 8ku
function reverseOrder(a){
    let newArray = a.reverse();
    return newArray;
};
a = [1, 2, 4, 5]
console.log(reverseOrder(a));


//3. given a string of words, return the length of the shortest word(s) 7ku
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

