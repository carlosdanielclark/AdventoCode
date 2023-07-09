const isFile = (sentence)=> {
    try {
      return parseInt(sentence.split(" ")[0]) >= 0;
    } catch {
      return false;
    }
  }
  
const isCommand = (sentence)=> {
  return sentence.trim()[0] === "$";
}
/*
const isDir(sentence)=> {
  return sentence.split(" ")[0] === "dir";
}*/

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
    props.SentenceIndex++;
    const sentence = sentences[props.SentenceIndex];
    const sentenceParts = sentence.split(" ");
    
    if (isFile(sentence)) {
      for (const directory of props.Path) {                    
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

    if (props.SentenceIndex >= sentences.length - 1) break;
  } while (!isCommand(sentences[props.SentenceIndex + 1]));
}

module.exports = {
    isCommand,
    changeDir,
    list
}