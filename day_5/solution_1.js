const fs = require('fs');

const { stacks } = require('./stack');

function getCratesString(input) {
  const reader = fs.readFileSync(input, 'utf-8').split('\n');
 
  const [boxes, instructions] = getData( reader )
  const bigStacks = stacks(boxes)
  console.log( bigStacks )
  
  //console.log( boxes )
  //console.log( instructions )

  const inst = getInstruction(instructions[0]);
  console.log( inst )
 
  /*
  for (let i = 0; i < reader.length; i++) {
    const line = reader[i];
    const inst = getInstruction(line);
    useInstruction(stacks, inst);
  }

  let crateString = "";

  for (let i = 0; i < stacks.stack.length; i++) {
    crateString += stacks.stack[i][0];
  }
  */
  return true;
}

function getInstruction(line) {
  const instruction = {};

  let instructionsParts = line.split("move");
  instructionsParts = instructionsParts[1].split("from");
  instruction.move = parseInt(instructionsParts[0]);
  instructionsParts = instructionsParts[1].split("to");
  instruction.from = parseInt(instructionsParts[0]) - 1;
  instruction.to = parseInt(instructionsParts[1]) - 1;

  return instruction;
}

function userInstruction(stacks, instruction) {
  
  for (let i = 0; i < instruction.move; i++) {
    console.log( stacks[instruction.from].length )
    if (stacks[instruction.from].length === 0) break;
    const box = stacks[instruction.from][0];
    console.log( box )
    //stacks[instruction.to].unshift(box);
    //stacks[instruction.from].shift();
  }
  return stacks;
}

function getData(prop) {
  const indiceVacio = prop.indexOf(' ');
  const boxes = prop.slice(0, indiceVacio);
  const instructions = prop.slice(indiceVacio + 1);
  return [boxes, instructions];
}

const transformArray = (prop)=>{
  const arr = [];
  for(let i=0; i<prop.length; i++){ arr[i] = 'stack'+i }
  const obj = arr.reduce((acc, curr, index) => ({...acc, [curr]: prop[index]}), {});
  console.log(obj);
  return obj;
}


module.exports = {
  getCratesString,
};