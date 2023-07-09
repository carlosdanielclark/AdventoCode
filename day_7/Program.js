//Importando paquetes necesarios  
const fs = require("fs");
const path = require('path');  
//Cargando path del fichero  
const input = path.join(__dirname, 'data2.txt'); 

const { solution } = require("./solution");

//Lectura de ficheros
const readFileAsync = (file)=> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error) {
        reject(error);
      }else {
        resolve(data);
      }
    });
  });
}
//Función principal
const main = async()=> {   
    const data = (await readFileAsync(input)).split("\n").map(line => line.replace(/\r/g, ""));
    solution(data);    
}
//Ejecución de Función principal  
main();