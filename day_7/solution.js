const {
    isCommand,
    changeDir,
    list
} = require("./helpers");

const solution = (input)=> {
    const props = { 
      SistemFiles: 0, 
      SumOfAllDirWithAtMost100M: 0, 
      Directories: {},
      DierectorySize: 0, 
      Path: [] 
    };

    for (props.SistemFiles = 0; props.SistemFiles < input.length; props.SistemFiles++) {
      const element = input[props.SistemFiles]; 
      if (isCommand(element)) {           
        const commandParts = element.split(" ");
        const com = commandParts[1].trim();
        const arg = com === "cd" ? commandParts[2].trim() : null;
        const command = { Com: com, Arg: arg };
        runCommand(command, input, props);
      } else {           
        throw new Error("Invalid Input");
      }
    }
    
    getSmallestButEnoughDir(props.Directories, props.DierectorySize);
  }

  const getSmallestButEnoughDir = (directories, directory)=> {    
    directories = Object.fromEntries(Object.entries(directories).sort((a, b) => a[1].Size - b[1].Size));
    directory = Object.fromEntries(Object.entries(directory))
    console.log("Directorios:")
    console.log(directories);
    console.log("Directorios con tamaño <= a 100000:");
    const filtered = Object.entries(directories)
        .filter(([key, value]) => value.Size <= 100000)
        .map(([key, value]) => ({ [key]: value }));
  
    const sum = filtered.reduce((acc, cur) => acc + Object.values(cur)[0].Size, 0);          
    console.log(filtered);
    console.log("Suma Total de directorios <= 100000");
    console.log(sum);

    freeSpace(directories)
  }

  const runCommand = (command, sentences, props)=> {
    switch (command.Com) {
      case 'cd':
        changeDir(command.Arg, props);
        break;
      case 'ls':
        list(sentences, props);
        break;
      default:          
        throw new Error("Invalid Command");
    }
  }

  const freeSpace = (directories)=> {
    const spaceAvailable = 70000000 - directories["/"].Size; 
    //Obtener todos los elementos que cumplan la condicion 
    const dirToDel = Object.entries(directories)
      .filter(([key, value]) => value.Size + spaceAvailable >= 30000000);
    //Ya esta ordenado pero para asegurar que tome el menor Size que cumpla la condici'on
    const minSizeDir = dirToDel.reduce((min, dir) => {
      return dir[1].Size < min[1].Size ? dir : min;
    }, dirToDel[0]);
    console.log("Directorio a eliminar:");
    console.log(minSizeDir);
  }

module.exports = { solution }