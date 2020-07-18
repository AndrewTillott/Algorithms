

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
