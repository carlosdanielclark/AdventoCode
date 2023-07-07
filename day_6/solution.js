const GetCharCountBeforeMarket = (input, markerLength)=> {
    const marker = new Array(markerLength);
   
    for (let i = 0, j = 0; i < input.length; i++) {
      marker[j] = input[i];
  
      const moveCursor = CompareToOther(marker, input[i], j);
  
      if (moveCursor > 0) {
        for (let k = 0; k + moveCursor < marker.length; k++) {
          marker[k] = marker[k + moveCursor];
        }
  
        j -= moveCursor - 1;
      } else {
        j++;
      }
  
      if (j >= marker.length) {
        return i + 1;
      }
    }
  
  }
  
  const CompareToOther = (compareTo, value, fromIndex)=> {
    if (value == null || fromIndex < 0 || fromIndex >= compareTo.length) {
      throw new Error("invalid Data to Compare");
    }
  
    for (let i = fromIndex - 1; i >= 0; i--) {
      if (compareTo[i] === value) {
        return i + 1;
      }
    }
  
    return 0;
  }

  module.exports = {
    GetCharCountBeforeMarket
  }