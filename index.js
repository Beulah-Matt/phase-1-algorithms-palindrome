function isPalindrome(word) {
  // Write your algorithm here
  //This program is checking whether a word reads the same from front and back
  // If word has even articles, first half is the same as the secondfv

}

/* 
  Add your pseudocode here
use built in sting functions to check if a string is the same in reverse
set conditions: if sring is the same, palindrome. If not, not a palindrome
*/

/*
  Add written explanation of your solution here
  Convert string to an array
  Reverse the array values
  convert array to string
  Use loose inequality
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(string) {
  const arrayValues = string.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');
  if(string == reverseString) {
      return true
  }
  else {
      return false
  }
}
