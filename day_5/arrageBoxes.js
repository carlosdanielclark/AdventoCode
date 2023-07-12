// Ordenar elementos en array
const arrangeBoxes = (stacks, move, from, to)=>{
    let size = stacks.length-1;
    let subSize = stacks[size].length-1;
    let fromCol = from - 1;
    let toCol = to - 1; 
    
    // Buscar elementos a mover
    let store = [], counter = 0;
    for (let i = 0; i < size; i++) {
        const e = stacks[i][fromCol];
        if( e!=='' && counter<move){ 
            stacks[i][fromCol] = '';
            store.push( e ); // ( unshift ) para solución 2
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
    let size = prop.length-1, n = prop[size].length - 1;
    let auxStore = Array(n+1).fill('');
    // Recorrer elemntos del array
    for (let col = 0; col < auxStore.length; col++) {
        const e1 = auxStore[col];
        if( e1 === '' ){
            for (let row = 0; row < prop.length; row++) {
                const e2 = prop[row][col];
                if(e2 !== '' && typeof e2 !== "number"){
                    auxStore[col] = e2;
                    break;
                }
            }
        }
    }
    let store = auxStore.join('')
    return store;
};

module.exports={
    arrangeBoxes
}
