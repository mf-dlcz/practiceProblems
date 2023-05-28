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
  if (s.length % 2 !== 0) {
    return false
  }
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') {
    return false
  }
  if (s[s.length - 1] === '(' || s[s.length - 1] === '{' || s[s.length - 1] === '[') {
    return false
  }

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let arr = []

  for (let i = 0; i < s.length; i++) {
    // if it's an opening bracket, push into stack
    // else, assume it's closing bracket and check if it matches anything
    if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
      arr.push(s[i])
    } else if (pairs[arr.pop()] !== s[i]) {
      console.log(pairs[arr.pop()], s[i])
      return false
    }
  }
  // return arr.length === 0
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isValid("(([]})"))