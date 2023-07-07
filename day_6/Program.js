const fs = require('fs');
const path = require('path');    
const inputfile = path.join(__dirname, 'data2.txt');

const { 
  GetCharCountBeforeMarket 
} = require('./solution');

const main = ()=> {
 
     fs.readFile(inputfile, "utf-8", (err, data) => {
        if (err) {
          console.log("Error reading file");
          return;
        }

        const inputRequest = data.split("\n");

        let solution1 = [];
        for (let i = 0; i < inputRequest.length; i++) {
          const input = inputRequest[i].trim();
          solution1[i] = GetCharCountBeforeMarket(input, 4);
        }

        const solution2 = GetCharCountBeforeMarket(inputRequest[0], 14);

        console.log('solution1:',solution1);
        console.log('solution2:', solution2);

      });
}

main()