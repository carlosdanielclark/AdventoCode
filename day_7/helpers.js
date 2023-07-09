// Archivo
const isFile = (element)=> {
    try {
      return parseInt(element.split(" ")[0]) >= 0;
    } catch {
      return false;
    }
  }
  
//Ejecutó comando
const isCommand = (element)=> {
  return element.trim()[0] === "$";
}
// Es un directorio
const isDir = (element)=> {
  return element.split(" ")[0] === "dir";
}

const getDirectory = (current, prev = "")=> {
  return prev === "" ? "/" : prev + current + "/";
}

const changeDir = (arg, props)=> {
  if (arg === null) {
    throw new Error("Invalid directory");
  }
  
  switch (arg) {       
    case "/":         
      props.Path.length = 0;
      props.Path.push("/");
      if (!props.Directories.hasOwnProperty("/")) {
        props.Directories["/"] = { Size: 0, Check: true };
      }
      break;
    case "..":         
      props.Path.pop();
      break;
    default:
      props.Path.push(getDirectory(arg, props.Path[props.Path.length - 1]));
      break;
  }
}

const list = (sentences, props)=> {
  do {
    props.SistemFiles++; 
    const sentence = sentences[props.SistemFiles];
    const sentenceParts = sentence.split(" "); 
    // Exit view
    if (isFile(sentence)) {
      for (const directory of props.Path) { 
        // File size                    
        const fileSize = parseInt(sentenceParts[0]);  
        props.Directories[directory].Size += fileSize;
        if (props.Directories[directory].Check) {
          const dirSize = props.Directories[directory].Size;
          if (dirSize <= 100000) {
            props.SumOfAllDirWithAtMost100M += fileSize;
          } else {
            props.Directories[directory].Check = false;
            props.SumOfAllDirWithAtMost100M -= dirSize - fileSize;
          }
        }
      }
    } else {
      const dirChild = getDirectory(sentenceParts[1], props.Path[props.Path.length - 1]);
      if (props.Directories.hasOwnProperty(dirChild)) {
        props.Directories[props.Path[props.Path.length - 1]].Size +=
          props.Directories[dirChild].Size;
      } else {
        props.Directories[dirChild] = { Size: 0, Check: true };
      }
    }

    if (props.SistemFiles >= sentences.length - 1) break;
  } while (!isCommand(sentences[props.SistemFiles + 1]));
}

module.exports = {
    isCommand,
    changeDir,
    list
}