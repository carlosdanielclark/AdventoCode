const path = require('path');    
const input = path.join(__dirname, 'data2.txt');
const stacksFile = path.join(__dirname, 'stack.txt');
/*
const { 
    Solution1,  
} = require('./solution_aux');

const soltion1 = Solution1.GetCratesString(input, stacks, Solution1.UseInstruction);
console.log(soltion1);
*/

const { 
    getCratesString,  
} = require('./solution_1');

getCratesString(input)


