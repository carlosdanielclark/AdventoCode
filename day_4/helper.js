const getPairs = ( line )=> {
    const pairs = line.trim().split(",");
    
    const pair1Str = pairs[0].split("-");
    const pair2Str = pairs[1].split("-");

    const pair1 = [ parseInt(pair1Str[0]), parseInt(pair1Str[1]) ];
    const pair2 = [ parseInt(pair2Str[0]), parseInt(pair2Str[1]) ];
 
    return [ pair1, pair2 ];
};

module.exports = {
    getPairs
};