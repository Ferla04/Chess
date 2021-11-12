function putPieces(chess,piece,columns,rows,rowsStart){
    let start = (columns - 8)/2;
    let limit = start + 8 -1;
    let cont = 1;

    if(rowsStart == 1 || rowsStart == rows - 2){
        for(let i = start; i <= limit; i++){
            chess[rowsStart][i] = piece[0];
        }
    }else{
        for(let i = start; i <= limit; i++){
            chess[rowsStart][i] = piece[cont];
            cont++
        }
    }
}


function changeToFigures(array){
    switch (array) {
        case 'B-P': case 'W-P': if(array == 'B-P'){return'♟'} return '♙'
        case 'B-T': case 'W-T': if(array == 'B-T'){return'♜'} return '♖'
        case 'B-H': case 'W-H': if(array == 'B-H'){return'♞'} return '♘'
        case 'B-B': case 'W-B': if(array == 'B-B'){return'♝'} return '♗'
        case 'B-K': case 'W-K': if(array == 'B-K'){return'♚'} return '♔'
        case 'B-Q': case 'W-Q': if(array == 'B-Q'){return'♛'} return '♕'
        default:return ' '
    }
}

//---------------------- TAMAÑO DE LOS CUADROS DEL AJEDREZ ----------------------
function calculateSizeSquare(rows, columns){
    // Calcular tamaño del tablero dependiendo de la resolución de pantalla, 
    // cantidad de filas y columnas
    if(rows >= columns){
        return (screen.height - (screen.height * 0.25)) / rows;
    }else{
        return (screen.width - (screen.width * 0.50)) / columns;
    }
}


function createPiecesHTML(arraySquare,arrSelector,i,j,square,sizeSquare){

    //creacion del div/cuadros ajedrez tiene dos hijos contPieces y selectorPiece;
    let DIV_COLS = document.createElement('div');
    square = CHESS_HTML.appendChild(DIV_COLS);
    square.style.width = `${sizeSquare}px`;//Tamaño Cuadros
    square.style.height = `${sizeSquare}px`;
    arraySquare[i].push(square);//Empujar columnas
    
    //guardar la piezas en un contenedor las fichas y las cambia a figuras
    let contPieces = document.createElement('div'); //div que contiene las piezas
    contPieces.id = `r${i}c${j}`;
    contPieces.innerHTML = changeToFigures(CHESS[i][j]);
    DIV_COLS.appendChild(contPieces); //colocar las fichas
    
    if((i+j)%2 != 0) arraySquare[i][j].style.backgroundColor = '#0a0a0a';
    arraySquare[i][j].style.fontSize = `${sizeSquare}px`; //Centrar Pieza
    arraySquare[i][j].style.lineHeight = `${sizeSquare}px`;

    //selector: la bolita que muestra el movimiento
    let selectorPiece = document.createElement('p');
    selectorPiece.className = 'seltPiece';
    selectorPiece.style.width = `${sizeSquare - 28}px`;
    selectorPiece.style.height = `${sizeSquare - 28}px`;
    // selectorPiece.style.minWidth = `${sizeSquare - 10}px`;
    // selectorPiece.style.minHeight = `${sizeSquare - 10}px`;
    // console.log(selectorPiece.style.width);
    DIV_COLS.appendChild(selectorPiece);
    arrSelector[i].push(selectorPiece);
}


function replacePiece(CHESS,pos1, pos2, pi, pj){

    let thePiece = document.getElementById(`r${pos1}c${pos2}`);
    let theSelect = document.getElementById(`r${pi}c${pj}`);

    CHESS[pi][pj] = CHESS[pos1][pos2];
    CHESS[pos1][pos2] = '   ';
    thePiece.innerHTML = changeToFigures(CHESS[pos1][pos2]);
    theSelect.innerHTML  = changeToFigures(CHESS[pi][pj]);

}



//---------------------- COLORES ----------------------
function changeColor(array,pos1, pos2){
    if((pos1+pos2)%2 != 0) {
        array[pos1][pos2].style.backgroundColor = '#0a0a0a';
    }else{
        array[pos1][pos2].style.backgroundColor = '#fff';
    }
}


function cleanBackgroundColor(rows,columns,array){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            array[i][j].style.display = 'none';
        }
    }
}


function colorPieceCycle(CHESS){//Turno color
    if(CHESS == color){
        color == 'W'? color = 'B': color = 'W';
        return true;
    }else{
        CHESS == 'W'? console.log('Turno pieza Negra'):console.log('Turno pieza Blanca')
        return false;
    }
}