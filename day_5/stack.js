
const stacks = (stacks)=> {
  const { count, splitStack} = GetStacksCount(stacks);
  const stack = GetStacks(stacks, splitStack);

  function GetStacksCount(stacks) {
    const lastStack = stacks.slice(-1);

    let splitStack = []
    for (const element of lastStack[0].split('')) {
      if( !/[ ]/g.test(element) ){
        splitStack.push( parseInt(element) )
      }
    }
    
    const count = parseInt(splitStack.length)
    return { count, splitStack };
  }

  function GetStacks(stacks, splitStack) {
    const stack = [];
    
    for (let i = 0; i < stacks.length-1; i++) {
      const lines = stacks[i].split("\n");
      let sizeLines = lines.length;
      //console.log( lines, sizeLines )
      
      for (let e = 0; e < sizeLines; e++) {
        const line = lines[e].split(' ');
        const count = splitStack.length;
        const listStacks = reorganizeArray(line, count)
        stack.push( listStacks )
      }
    }

    stack.push( splitStack )
    return stack;
  }

  return {
    Count: count,
    Stack: stack
  };
}

function reorganizeArray(prop, number) {
  let result = [];
  let i = 0;

  while (i < prop.length) {
    let start = i;
    let end = i + number;
  
    if (end >= prop.length) {
      end = prop.length;
    }
    
    result.push(prop.slice(start, end));
    i += 3;
  }
 
  const subResult = [];
  for (const iterator of result) {
      const element = iterator.filter((elem) => elem !== '')
      if( element.length == 0 ){
          subResult.push( '' );
      }else{
          subResult.push( element );
      }
  }
  
  return subResult.flat();
}

module.exports = { stacks };