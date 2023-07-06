const fs = require('fs');
const { getPairs } = require('./helper');

const getCompletyOverlapPairCount = ( input )=>{
  const reader = fs.readFileSync(input, 'utf-8').split('\n');

  let count = 0;
  for (let i = 0; i < reader.length; i++) {
    const line = reader[i];
    const pairs = getPairs( line );
    if (itsCompletyOverlapPair(pairs[0], pairs[1])) count++;
  }

  return count;
}

const itsCompletyOverlapPair = ( pair1, pair2 )=>{
  const condition1 = pair1[0] <= pair2[0] && pair1[1] >= pair2[1];
  const condition2 = pair2[0] <= pair1[0] && pair2[1] >= pair1[1];

  if (condition1 || condition2) {
    return true;
  }
  return false;
}

module.exports = {
  getCompletyOverlapPairCount
};