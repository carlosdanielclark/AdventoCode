// Hacer grupos de tres
const splitGroupOfThree = ( prop )=>{
    let group = [];
    for (let i = 0; i < prop.length; i += 3) {
        group.push(prop.slice(i, i + 3));
    }
     return group;
};

// Buscar elementos iguales
const insignia = ( prop1, prop2, prop3 )=>{
    const isRepeated = new Set();
    for (let i = 0; i < prop1.length; i++) {
        if (prop2.includes(prop1[i]) && prop3.includes(prop1[i])) {
            isRepeated.add(prop1[i]);
        }
    }
    return [...isRepeated]; 
};

// Obtener prioridades
const getPriority = ( type )=>{
    if ( type <= 90 && type >= 65 )
    return type - 64 + 26; // MAYUSCULAS
    if ( type <= 122 && type >= 97 )
    return type - 96; // minusculas
    throw new Error("invalid item");
};

const findInsigniaAndPriority = ( prop )=>{
    // Declarar variables auxiliares
    let  e_insignea = null, priority = null, acumulate2=null, 
    store_e_insignea = [], store_priority2 = []; 

    for (const backpack of prop) {
        const [ isRepeated ]  = insignia( backpack[0], backpack[1], backpack[2] );
        e_insignea = isRepeated;
        priority = getPriority( e_insignea.charCodeAt(0) );

        // Almacenar valores
        store_e_insignea.push( e_insignea );
        store_priority2.push( priority );
    }
    acumulate2 = store_priority2.reduce((a,b) => a+b, 0 );

    return {store_e_insignea, store_priority2, acumulate2};
};

module.exports = {
    splitGroupOfThree,
    insignia,
    findInsigniaAndPriority
}