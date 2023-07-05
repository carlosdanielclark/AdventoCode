// Separar articulos dentro de la mochila
const makeBackpack = ( prop )=>{
    const backpack = [];
    for (const iterator of prop) {
        backpack.push( iterator.split('') );
    }
    return backpack;
};

// Separar mochila en dos compartimento
const splitBackpack = ( prop )=>{
    const half = Math.ceil( prop.length / 2 );
    const firstHalf = prop.splice(0, half);
    return [ firstHalf, prop ];
};

// Buscar elementos iguales
const equalElements = ( compartment1, compartment2 )=>{
    const e_elements = new Set();
    const set2 = new Set( compartment2 );
    for ( let i = 0; i < compartment1.length; i++ ) {
      if ( set2.has( compartment1[i]) ) {
        e_elements.add( compartment1[i] );
      }
    }
    return [...e_elements];
};

// Obtener prioridades
const getPriority = ( type )=>{
    if ( type <= 90 && type >= 65 )
    return type - 64 + 26; // MAYUSCULAS
    if ( type <= 122 && type >= 97 )
    return type - 96; // minusculas
    throw new Error("invalid item");
};

// Organizar los articulos de la mochila
const organizeBackpack = ( prop )=>{
        // Declarar variables auxiliares
        let equal_elements = [], priority = null, store_priority = [],
        store_equal_elements = [],compartment1 = [], compartment2 = [], 
        acumulate = null;
        
        // Acomodar mochila
        for (const iterator of prop) {
            const [ firstHalf, secondHalf ] = splitBackpack( iterator );
            compartment1 = [...firstHalf];
            compartment2 = [...secondHalf];

            // Unico tipo de elemento común
            equal_elements = equalElements( compartment1, compartment2 );
            // Prioridad del tipo de artículo
            priority = getPriority( equal_elements[0].charCodeAt(0) );

            // Almacenar valores
            store_equal_elements.push( equal_elements[0] );
            store_priority.push( priority );
        }
        acumulate = store_priority.reduce((a,b) => a+b, 0 );

    return { store_equal_elements, store_priority, acumulate };
};

module.exports = {
    makeBackpack,
    splitBackpack,
    equalElements,
    getPriority,
    organizeBackpack
}