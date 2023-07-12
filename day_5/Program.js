const path = require('path');    
const input = path.join(__dirname, 'data.txt');
const stacksFile = path.join(__dirname, 'stack.txt');

const { 
    getCratesString,  
} = require('./solution_1');

console.log( getCratesString(input) )
// Resultado 1 VJSFHWGFT
// Resultado 2 LCTQFBVZV
