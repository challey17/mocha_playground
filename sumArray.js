/* Write a function sum that accepts an array of values 
returns a Promise that resolves the sum of the values in the array. 
The array may contain numbers and strings. 
If the strings can safely be converted to numbers then use the 
converted numbers as part of the sum, otherwise, ignore them. 
sum([1, '2', 'a', 3]) should resolve to 6. */

function sum(arr) {
  return new Promise((resolve, reject) => {
    const ans = arr.reduce((acc, curr) => {
      const num = parseFloat(curr);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
    resolve(ans);
  });
}

module.exports = sum;
