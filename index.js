function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
    // check each character to the corresponding letter from the end
    const j = word.length - 1 - i;
    const startCharacter = word[i];
    const endCharacter = word[j];
     // if any letters don't match, return false
    if (startCharacter !== endCharacter) return false;
  }
  return true
}

/* 
  Add your pseudocode here
  that means if the
  first letter is the same as the last letter and the second letter is the same as
  the second to last letter, and so on, until we reach the middle, return true.

  iterate from the beginning to the middle
    check each character to the corresponding letter from the end
      if any letters don't match, return false

    return true
*/

/*
  Add written explanation of your solution here
abba
^  ^
 ^^ 
  true

robot
^   ^
  false

  make a function that returns true if a word is a palindrome. that means if the
  first letter is the same as the last letter and the second letter is the same as
  the second to last letter, and so on, until we reach the middle, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

}

module.exports = isPalindrome;
