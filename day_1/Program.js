console.log('Hello');

const fs = require('fs'),
path = require('path'),    
filePath = path.join(__dirname, 'data.txt');

// Leer el archivo de texto
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    return console.error(error);
  }

  // Dividir el archivo en líneas
  const lines = data.split('\n');

  // Crear una matriz para almacenar los datos de cada línea
  const dataArray = [];

  // Recorrer cada línea del archivo
  lines.forEach(line => {
    // Dividir la línea en campos
    const fields = line;

    // Agregar los campos a la matriz
    dataArray.push(fields);
  });

  // Utilizar la matriz de datos para realizar cualquier acción necesaria
  //console.log( dataArray );
  const supplyOfTheElf = amountOfCalories( dataArray );
  const totalOfCalories = amountOfCalories( dataArray )
  //console.log( amountOfCalories( dataArray ) );
  console.log( maxElement( supplyOfTheElf ) );
  console.log( firstThreeElves( totalOfCalories ) );
  
});

// Funcion para sacar la cantidad de calorias por Elfo
const amountOfCalories = (arr)=>{
    let calories=0, total=0, elf=[];
    for (const elem of arr) {
        if( elem !== '' ){ 
            calories = total + parseInt(elem);
            if( calories > total ){
                total = calories;
                elf.pop()   
            }
            
        } else if( elem == '' ){
            calories = 0;
            total = 0;
        }
        
        if( calories <= total ){
            elf.push( total );
        }
        
    }

    return elf; 
}

// Funcion que determina el elfo que mayor cantidad 
// de calorias tiene.
const maxElement = (arr)=>{
    let totalCalories = Math.max(...arr), elf=null;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element == totalCalories){
            elf = i+1;
        }
    }
    
    return {elf, totalCalories};
}

// Funcion que determinar el total de calorías de los tres primeros elfos
const firstThreeElves = (arr)=>{
    let acumulated = 0;

    const decArr = arr.sort( (a,b)=>{ 
        return (a > b)? -1 : 1 
    }).slice(0, 3);

    console.log( decArr )
    acumulated = decArr.reduce((a,b) => a+b, 0);

    return acumulated
}

// ------------- Funciones auxiliares -------------
// Funcion para determinar elementos de un array organizado
const findIndexOfTheElements = (decArr, arr)=>{
    let listOfIndex = [];

    for (const eIterator of decArr) {
        for (let i = 0; i < arr.length; i++){
            const element = newArr[i];
            if(eIterator == element){
                listOfIndex.push( i );
            }
        }
    };

    return listOfIndex
}