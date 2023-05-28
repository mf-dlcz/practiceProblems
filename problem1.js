// Valid parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' or ']', determine if the input string is valid.

// An input string is valid if:

// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// - Every close bracket has a corresponding open bracket of the same type.

// ex: 
// input: "()"  // true
// input: "()[]{}" // true
// input: "(]" // false
// input: "({)}" // false
// input: "({})" // true
// input: "({[]})"
// input: "()(("

// edge cases:
// #1: if odd length, return false
// #2: if 1st is closing el, return false
// #3: if last item is opening, return false

// Create an object map for valid pairs
// Create empty array to store opening elements
// loop over string
// if it's an opening el, push into empty arr
// else, assume it's a closing bracket check if it matches last item in the array
// if it doesn't match correctly, return false
// if we make it through the full string and arr is empty, return true 

const isValid = (s) => {
  //I've created two variables that contain an array of chars each
  let opening = ['(', '{', '[']
  let closing = [')', '}', ']']

  // Checking to make sure the value passed is not an odd number of characters
  // By using the length method on the string and diving the length by 2. Its remainder will
  // let us know if its even or odd. If the remainder is 0 = even; 1 = odd.
  if (s.length % 2 !== 0) {
    return false
  }
  //checks if the chars in s are included in the closing array
  if (s.includes(closing)) {
    return false
  }
  //checks if the chars in s are included in the opening array
  if (s.includes(opening)) {
    return false
  }
  // this is an object with keys and value pairs
  // the key is the opening and the value is the closing
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  //Empty array where I will eventually .push() items
  let arr = []

  //Traditional For loop specifically for looping through strings 
  for (let i = 0; i < s.length; i++) {
    // if it's an opening bracket, push into stack
    // else, assume it's closing bracket and check if it matches anything
    //checks string at given index [i] if it's === to the value of the opening array
    if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
    //each element is being pushed to the empty array created in line 58
      arr.push(s[i])
      //pairs[given index is removed] !== s at given index [i]
    } else if (pairs[arr.pop()] !== s[i]) {
      console.log(pairs[arr.pop()], s[i])
      return false
    }
  }
  // return arr.length === 0
  //checks to see if the length of the array is 0 which means it's empty
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isValid("(([]})"))

  /// ** Bonus:
  // replace all the || conditions with .includes()
  // **Hint: create an array with all opening brackets, and also all closing brackets
  // arr1 = ['[','(', '{']
  // same w/ closing for arr2