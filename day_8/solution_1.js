const { Grid } = require('./grid');

function Tree(height, row, col) {
    this.Height = height;
    this.X = col;
    this.Y = row;
}
  
function Cross() {}

Cross.Vertical = [-1, 0, 1, 0];
Cross.Horizontal = [0, 1, 0, -1];
Cross.Directions = 4;

function Solution(input) {
    const treeMap = new Grid(input);
    let visibleTrees = 0;
    let highestTreeScore = 0;
  
    for (let row = 1; row < treeMap.getLength() - 1; row++) {
      for (let col = 1; col < treeMap.getLength() - 1; col++) {
        const cursor = new Tree(treeMap.get(row, col), row, col);
        if (visibleTree(cursor)) {
          visibleTrees++;
        }
      }
    }
  
    visibleTrees += treeMap.getLength() * 4 - 4;
  
    function visibleTree(currentTree) {
      let checkVisibility = false;
      let treeScore = 1;
  
      for (let i = 0; i < Cross.Directions; i++) {
        let x = currentTree.X + Cross.Horizontal[i];
        let y = currentTree.Y + Cross.Vertical[i];
        let edge = Cross.Horizontal[i] + Cross.Vertical[i] > 0 ? treeMap.getLength() : -1;
        let visibility = true;
        let count = 0;
  
        while (x !== edge && y !== edge) {
          count++;
          if (treeMap.get(y, x) >= currentTree.Height) {
            visibility = false;
            break;
          }
  
          x += Cross.Horizontal[i];
          y += Cross.Vertical[i];
        }
  
        treeScore *= count;
  
        if (visibility) {
          checkVisibility = true;
        }
      }
  
      if (treeScore > highestTreeScore) {
        highestTreeScore = treeScore;
      }
  
      if (checkVisibility) {
        return true;
      }
  
      return false;
    }
  
    this.VisibleTrees = visibleTrees;
    this.HighestTreeScore = highestTreeScore;
  }

  module.exports = {
    Solution
  }