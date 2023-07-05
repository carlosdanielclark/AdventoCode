const fs = require('fs');
path = require('path'),    
input = path.join(__dirname, 'data.txt');

const { 
    makeBackpack, 
    organizeBackpack
} = require('./solution_1');

const { 
    splitGroupOfThree,
    findInsigniaAndPriority
} = require('./solution_2');

// -------- Part One --------
const checkBackpack = ( prop )=>{
    // Obtener datos
    const data = fs.readFileSync( prop, 'utf-8' );
    const rounds = data.split('\n');
    // Separar articulos dentro de la mochila
    const backpack = makeBackpack(rounds);
    // Organizar los articulos de la mochila
    const { store_equal_elements, store_priority, acumulate } = organizeBackpack( backpack );

    return { store_equal_elements, store_priority, acumulate };
}

// -------- Part Two --------
const groupsOfThree = ( prop )=>{
    // Obtener datos
    const data = fs.readFileSync( prop, 'utf-8' );
    const rounds = data.split('\n');
    // Separar articulos dentro de la mochila
    const backpack = makeBackpack(rounds);      
    // Hacer grupos de tres
    const groupOfThree = splitGroupOfThree( backpack )
    // Suma de las prioridades de esos tipos de elementos
    const { store_e_insignea, store_priority2, acumulate2 } = findInsigniaAndPriority( groupOfThree )

    return { store_e_insignea, store_priority2, acumulate2 };
}

// Answare 1
const { store_equal_elements, store_priority, acumulate } = checkBackpack( input );
console.log( store_equal_elements );
console.log( store_priority );
console.log( 'acumulate: ', acumulate ); // 7826
console.log('.........................--- Part Two ---........................');
// Answare 2
const { store_e_insignea, store_priority2, acumulate2 } = groupsOfThree( input );
console.log( store_e_insignea );
console.log( store_priority2);
console.log( 'acumulate: ', acumulate2 ); // 2577