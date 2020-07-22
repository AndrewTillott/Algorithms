/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

function sumPrimes(num) {
  let arr = [];
  for(let i = 2; i <= num; i++){
      isPrime(i);
  }

  function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
      if(prime){arr.push(num)};
}

  return arr.reduce((total, item)=>{
    return total + item;
  }, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));


/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let newArr = [1, 1];
  let total = 0;

  while(newArr[newArr.length-1]< num){
  total = newArr[newArr.length-2] + newArr[newArr.length-1]
  newArr.push(total);
  }

  return newArr.filter((item)=>{
    return item % 2 == 1 && item <= num;
  }).reduce((total, x)=>{
    return total + x;
  }, 0)

}

console.log(sumFibs(4));


/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  
  let tempArr = ['a'];
  let newArr = [];
  let regex = /[&<>"']/


str.split('')
  .forEach((item)=>{
      switch(item){
    case '&': tempArr[0] = '&amp;';
    break;
    case '<': tempArr[0] = '&lt;';
    break;
    case '>': tempArr[0] = '&gt;';
    break;
    case '"': tempArr[0] = '&quot;';
    break;
    case "'": tempArr[0] = '&apos;';
    break;
  }
    if(regex.test(item)==true){
     newArr.push(item.replace(item, tempArr[0]));
    } else {
    newArr.push(item);
    }
  })

    return newArr.join('');


}

console.log(convertHTML("Dolce & Gabbana"));


/*

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.


*/

function uniteUnique(...arr) {
    let newArr = [];
    //loop through the arrays and then the inner elements
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
          //If the element is not already in the newArr then push it in
        if(!newArr.includes(arr[i][j])){
          newArr.push(arr[i][j]);
        }
      }
    }
    //return the complete newArr with all pushed values
    return newArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  



/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  
    let pair;
    let newArr = [];
      
      str.split('').forEach((item)=>{
       
        switch(item){
          case 'A': pair = 'AT';
          break;
          case 'T': pair = 'TA';
          break;
          case 'G': pair = 'GC';
          break;
          case 'C': pair = 'CG';
          break;
      }
    
        let correctPair = item.replace(item, pair).split('');
        newArr.push(correctPair);
      });
    
      return newArr;
    }

    console.log(pairElement("ATCGA"));
    



    /*
        Find the missing letter in the passed letter range and return it.

        If all letters are present in the range, return undefined.

    */

    function fearNotLetter(str) {

        let testArr = [0, str.charCodeAt(0)];
        let letter;
      
        str.split('').forEach((item, index)=>{
            testArr[0] = testArr[1];
            testArr[1] = item.charCodeAt(0);
            if(testArr[1] != (testArr[0] + 1)){
              letter = str[index];
            }
          })
      
      let finalLetter = letter.charCodeAt(0);
      finalLetter--;
      let codeToLetter = String.fromCharCode(finalLetter);
      let regex = /[a-zA-Z]/
      
      if(regex.test(codeToLetter)){
        return codeToLetter;
      } else {
        return undefined;
      }
      }
      
      console.log(fearNotLetter("abce"));
      console.log(fearNotLetter("stvwx"));
      console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
