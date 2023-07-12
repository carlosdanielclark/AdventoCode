const fs = require('fs');

const { stacks } = require('./stack');
const { arrangeBoxes } = require('./arrageBoxes');

const getCratesString = (input)=> {
  const reader = fs.readFileSync(input, 'utf-8').split('\n');
  const [boxes, instructions] = getData( reader );
  const { Count, Stack } = stacks(boxes);

  console.log( 'Stack: ',Stack )

  /* Area de desarrollo */
  const {move, from, to} = getInstruction(instructions[0]);
  console.log({move, from, to} )
  const [stackList, topStacks] = arrangeBoxes(Stack, move, from, to);
  console.log( 'stackList: ',stackList )
  console.log( 'topStacks: ',topStacks )

  /*Area de produccion*//*
  let supplyStacks=[], crateString = '';
  for (let i = 0; i < instructions.length; i++) {
    const {move, from, to} = getInstruction(instructions[i]);
    let [stackList, topStacks] = arrangeBoxes(Stack, move, from, to);
    console.log( 'supplyStacks: ', stackList )
    crateString = topStacks;
    console.log( 'crateString: ', crateString )

  }
  */
  return true;
}

const getData = (prop)=> {
  const indiceVacio = prop.indexOf(' ');
  const boxes = prop.slice(0, indiceVacio);
  const instructions = prop.slice(indiceVacio + 1);
  return [boxes, instructions];
}

const getInstruction = (line)=> {
  const instruction = {};
  let instructionsParts = line.split("move");
  instructionsParts = instructionsParts[1].split("from");
  instruction.move = parseInt(instructionsParts[0]);
  instructionsParts = instructionsParts[1].split("to");
  instruction.from = parseInt(instructionsParts[0]) - 0;
  instruction.to = parseInt(instructionsParts[1]) - 0;
  return instruction;
}


module.exports = {
  getCratesString,
};