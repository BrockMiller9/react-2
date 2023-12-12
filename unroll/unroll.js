function unroll(square) {
    let result = [];
    let startRow = 0, endRow = square.length - 1;
    let startCol = 0, endCol = square[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Traverse from left to right
        for (let i = startCol; i <= endCol; i++) {
            result.push(square[startRow][i]);
        }
        startRow++;

        // Traverse downwards
        for (let i = startRow; i <= endRow; i++) {
            result.push(square[i][endCol]);
        }
        endCol--;

        // Make sure we are now on a different row
        if (startRow <= endRow) {
            // Traverse from right to left
            for (let i = endCol; i >= startCol; i--) {
                result.push(square[endRow][i]);
            }
            endRow--;
        }

        // Make sure we are now in a different column
        if (startCol <= endCol) {
            // Traverse upwards
            for (let i = endRow; i >= startRow; i--) {
                result.push(square[i][startCol]);
            }
            startCol++;
        }
    }

    return result;
}


module.exports = unroll;
