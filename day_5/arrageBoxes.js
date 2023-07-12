// Ordenar elementos en array
const arrangeBoxes = (stacks, move, from, to)=>{
    let size = stacks.length-1;
    let subSize = stacks[0].length-1;
    let fromCol = from - 1;
    let toCol = to - 1; 
    
    // Buscar elementos a mover
    let store = [], counter = 0;
    for (let i = 0; i < size; i++) {
        const e = stacks[i][fromCol];
        if( e!=='' && counter<move){ 
            stacks[i][fromCol] = '';
            store.push( e );
            counter++ 
        };
    }
  
    // Almacenar elementos
    for (let i = 0; i < store.length; i++) {
        let e1 = Array(subSize+1).fill('');
        let flag = 0;  
        // Buscar elementos por columnas
        for (let j = 0; j < size + 1; j++) {
            const e2 = stacks[size - j];
            if( e2[toCol]=='' ){
                e2[toCol] = store[i];
                store[i] = '';
            }else{
                // flag avisa si la columna esta llena
                flag = 1
            }
        } 
        if( flag == 1 ){
            e1[toCol] = store[i];
            stacks.unshift( e1 );
        }
    };

    // Eliminar array vacios
    let index = 0
    for (const e of stacks) {
        let counter = 0
        e.forEach( (d) => { if( d=='')counter++ });
        if( counter == e.length ){
            // Buscar el indice
            index = stacks.indexOf( e );
        }
    }

    let stackList = stacks.slice( index+1 )
    let topStacks = topBoxes( stackList );
    return [stackList, topStacks];
};

const topBoxes = (prop)=> {
    let auxStore = [];
    for(const e1 of prop) {
      let row = 0;
      
      
      if( e1[row]!=='' && row<e1.length && typeof e1 !== "number"){
        console.log( 'e1: ',e1[row] )
        //auxStore.push( e1 );
        row++;
      }
      /*e1.forEach( (e2) => { console.log( 'e2: ',e2 )
        if( e2!=='' && col<e1.length && typeof e2 !== "number"){
            
          auxStore.push( e2 );
          col++;
        }
      });*/
    }
    let store = auxStore.join(' ')
    return store;
  };

module.exports={
    arrangeBoxes
}
