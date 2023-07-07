const path = require('path');    
const input = path.join(__dirname, 'data.txt');

const { 
    getCompletyOverlapPairCount 
} = require('./solution_1');

const { 
    getOverlapPairCount 
} = require('./solution_2');

function main() {
 
  const solution1 = getCompletyOverlapPairCount(input);
  console.log('solution1: ', solution1);
  const solution2 = getOverlapPairCount(input);
  console.log('solution2: ', solution2);
  
};

main();