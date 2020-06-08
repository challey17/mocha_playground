/* Write a function named diff that accepts two arrays a and b, 
return the array that results in removing all elements of b from a.
 If a = [1,2,3] and b = [2] the result should be [1,3] */

function diff(a, b) {
  // loop through array, return n, except if n is apart of array b
  return a.filter((n) => !b.includes(n));
}

module.exports = diff;
