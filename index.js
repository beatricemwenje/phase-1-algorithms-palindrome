
function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length

  for (let i = 0; i < (len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false
    } else {
      return true
    }
  }
}

