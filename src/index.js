
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let emptyMat = [];

    if (arguments.length == 0) matrix = emptyMat;
    matrix.forEach(function(outsideMatrix, index) {
        if(index % 2) outsideMatrix.reverse();
        outsideMatrix.forEach(insideMatrix => emptyMat.push(insideMatrix))
    })

    return emptyMat;
}
