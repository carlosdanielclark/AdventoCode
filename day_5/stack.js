
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
  const result = [];
  
  //console.log( prop )
  for (let i = 0; i < prop.length; i += 3) {
    result.push(prop.slice(i, i + 3));
  }

  //console.log( result ) 

  let subResult1 = [];
  for (const iterator of result) {
    subResult1.push( ...iterator )
  }

  //console.log( subResult1 ) 

  const subResult2 = [];
  let count = 0;
 for (let i = 0; i<subResult1.length; i++) {
      const element = subResult1[i];
    
      //console.log( count ) 
      //console.log( element, i ) 

      if( (i+1)%3 == 0 && element == '' ){
          subResult2.push( '' );
          
      }else{
        
        if( element !== '' ){
          subResult2.push( element );
        }
      }
      
  }

  //console.log( subResult2.slice(0, number), number ) 
  
  return subResult2.slice(0, number);
}

module.exports = { stacks };