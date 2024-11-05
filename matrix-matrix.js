const matrixA = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5] 
];
const matrixB = [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2],
];

function Matrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    
    if (colsA !== rowsB) {
        console.log("Матриці не можна множити");
        return null;
    }

    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

const result = Matrices(matrixA, matrixB);


    console.log(result);
