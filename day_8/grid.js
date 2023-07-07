function Grid(grid) {
    const length = grid.length;
    const vessel = new Array(length).fill(null).map(() => new Array(length).fill(0));
  
    for (let col = 0; col < length; col++) {
      for (let row = 0; row < length; row++) {
        vessel[col][row] = parseInt(grid[col][row]);
      }
    }
  
    this.getLength = function() {
      return length;
    };
  
    this.get = function(x, y) {
      return vessel[x][y];
    };
  }

  module.exports = {
    Grid
  }