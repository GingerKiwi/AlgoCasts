// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3) array method

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// Array method cleaned up:

// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// 2) ES6 reduce helper:

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => {
//         return char + recersed;
//     }, '');
// }

// 3) ES6 reduce helper with arrow function - smilififed:

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '')
}


// 1) ES6 for loop:

// function reverse(str) {
// let reversed = '';

// for (let character of str) {
//     reversed = character + reversed;
// }
// return reversed;

// }

module.exports = reverse;
