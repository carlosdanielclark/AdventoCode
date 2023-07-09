const {
    isCommand,
    changeDir,
    list
} = require("./helpers");

const solution = (input)=> {
    const props = { SentenceIndex: 0, SumOfAllDirWithAtMost100M: 0, Directories: {}, Path: [] };
    for (props.SentenceIndex = 0; props.SentenceIndex < input.length; props.SentenceIndex++) {
      const sentence = input[props.SentenceIndex]; 
        
      if (isCommand(sentence)) {           
        const commandParts = sentence.split(" ");
        const com = commandParts[1].trim();
        const arg = com === "cd" ? commandParts[2].trim() : null;
        const command = { Com: com, Arg: arg };
        runCommand(command, input, props);
      } else {           
        throw new Error("Invalid Input");
      }
    }
    getSmallestButEnoughDir(props.Directories);
  }

  const getSmallestButEnoughDir = (directories)=> {      
    directories = Object.fromEntries(Object.entries(directories).sort((a, b) => a[1].Size - b[1].Size));
    console.log("Directorios:")
    console.log(directories);
    console.log("Directorios con tamaño <= a 100000:")
    const filtered = Object.entries(directories)
        .filter(([key, value]) => value.Size <= 100000)
        .map(([key, value]) => ({ [key]: value }));
  
    const sum = filtered.reduce((acc, cur) => acc + Object.values(cur)[0].Size, 0);          
    console.log(filtered);
    console.log("Suma Total de directorios <= 100000")
    console.log(sum);
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

module.exports = { solution }