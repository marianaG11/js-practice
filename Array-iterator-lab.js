// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  const inventors1500 = inventors.filter(function(inventor) {
    return (inventor.year >= 1500 && inventor.year < 1600);
  });
  console.log(inventors1500);
  
  
  // Array.prototype.map()
  // // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  
  //map returns a new array
  const fullName = inventors.map(function(inventor) {
    let firstNameLastName = {
      first: inventor.first,
      last: inventor.last
    }
    return firstNameLastName;
    });
  console.log(fullName);
  
  //Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  //no variable needed bc it doees not create anything new!
    inventors.sort(function(a, b){
      return (a.year - b.year);
    });
    console.log(inventors);                         
  
  // 4. Sort the inventors by years lived from shortest to longest lived
   inventors.sort(function(a, b){
     return (a.passed - a.year) - (b.passed - b.year);
   });
  console.log(inventors);
  
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
  // const initialValue = 0;
  // const sumOfYearsLived = inventors.reduce(function(previousValue, currentValue){
  //   return previousValue + currentValue, initialValue
  // });
  // console.log(sumOfYearsLived);
  const sumOfYearsLived= inventors.reduce((acc, inventor) => acc + (inventor.passed - inventor.year), 0);
  console.log(sumOfYearsLived);
  //0 is the initial value, where you want to start
  
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  const  firstLast = people.map(function(person){
    return person.split(', ').reverse().join(' ');
    //this separates the string, and puts it into a new array
    //.split returns new array, that is not stored anywhere
    //.reverse invokes the array that was returned from split  //reverse switches the order of the name
    //.join invokes array that was returned from reverse
  });
  console.log(firstLast);
  //can chain multiple functions!
  
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items.
  // Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.
  let transportation = data.reduce(function(acc, dataValue){
    acc[dataValue] = acc[dataValue] ? acc[dataValue] + 1 : 1;
    return acc;
  }, {});
  console.log(transportation);
  
  
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  let is19OrOlder = devs.some(function(dev){
    return dev.year >= 2003;
  });
  console.log(is19OrOlder);                         
  // some returns boolean value of true/false
  
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?
  //also returns t/f
  let everyoneIsAtLeast19 = devs.every(function(dev){
    return dev.year >= 2003;
  });
  console.log(everyoneIsAtLeast19);
  //returns false
  
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  let specificIdNumber = comments.find(function(comment){
    return comment.id === 823423;
  });
  console.log(specificIdNumber);
  
  
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  let indexOfComment = comments.findIndex(function(comment){
    return comment.id === 123523;
  });
  console.log(indexOfComment);