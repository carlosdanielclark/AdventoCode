const fs = require('fs');
const path = require('path');    
const inputfile = path.join(__dirname, 'data2.txt');

const { Solution } = require('./solution_1');

function main() {
  
  fs.readFile(inputfile, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file");
      return;
    }

    const input = data.split("\n").filter(Boolean);
    
    const solution = new Solution(input);

    console.log( 'solution1:',solution.VisibleTrees);
    console.log( 'solution2:',solution.HighestTreeScore);

  });
}

main();