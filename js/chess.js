//--------------------------- CREACION DE TODO ---------------------------

function verificar(){

    let advice = document.getElementById('advice');
    columns = Number(colsInput.value);
    rows = Number(rowsInput.value);

    if((columns < 8 || columns%2 != 0) && (rows < 4 || rows%2 != 0)){
        return advice.innerHTML = 'Valor invalido en columnas y filas';

    }else if(rows < 4 || rows%2 != 0){
        return advice.innerHTML = 'Valor invalido en filas';

    }else if(columns < 8 || columns%2 != 0){
        return advice.innerHTML = 'Valor invalido en columnas';

    }

    //CAMBIOS HTML
    advice.innerHTML = '';
    colsInput.setAttribute('readonly',true);
    rowsInput.setAttribute('readonly',true);
    buttonMake.style.display = 'none';
    buttonClean.style.display = 'block';

    
    //CREACION DE LA ETIQUETA DEL CHESS
    CreateTagChess();
    CHESS_HTML = document.getElementById('chess');

    //LLAMADOS
    createChess(CHESS,PIECES_BLACK,PIECES_WHITE,columns,rows);
    createGraphicChess(CHESS,CHESS_HTML,columns,rows);

}


function CreateTagChess(){
    let contChess = document.getElementById('contChessClean');
    contChess.appendChild(document.createElement('section')).setAttribute('id','chess');
}


function clean(){
    //configuración
    CHESS = [];
    color = 'W';
    CHESS_HTML.remove();
    colsInput.removeAttribute('readonly',true);
    rowsInput.removeAttribute('readonly',true);
    buttonMake.style.display = 'block';
    buttonClean.style.display = 'none';
}


//--------------------------- Creacion del tablero(consola) ---------------------------

function createChess(CHESS,PIECES_BLACK,PIECES_WHITE,columns,rows){

    for(let i = 0; i < rows; i++){
        CHESS.push([]);
        for(let j = 0; j < columns; j++){
            CHESS[i].push('   ');
        }
    }
    putPieces(CHESS,PIECES_BLACK,columns,rows, 0);//Piezas negras
    putPieces(CHESS,PIECES_BLACK,columns,rows, 1);//peones negros
    putPieces(CHESS,PIECES_WHITE,columns,rows, rows-1);//piezas blancas
    putPieces(CHESS,PIECES_WHITE,columns,rows, rows-2);//peones blancos
    console.log(CHESS);
}


//--------------------------- Creacion del tablero(grafico) ---------------------------


function createGraphicChess(CHESS,CHESS_HTML,columns,rows){

    let sizeSquare = 0;
    let square;
    let arraySquare = [];
    let arrSelector = [];
    let status1 = true;
    let other = false;
    let place = [];
    let resultado;

    //Se crea el tamaño de los cuadros dependiendo que la cantidad que sean
    sizeSquare = calculateSizeSquare(rows, columns); 

    /*CONFIGURACIÓN */
    CHESS_HTML.style.width = `${(columns * sizeSquare)}px`;
    CHESS_HTML.style.height = `${(rows * sizeSquare)}px`;
    
    for(let i = 0; i < rows; i++){
        arraySquare.push([]);
        arrSelector.push([]);
        for(let j = 0; j < columns; j++){

            //Creacion de los cuadros con sus fichas y CREACION DE LAS COLUMNAS
            createPiecesHTML(arraySquare,arrSelector,i,j,square,sizeSquare);
    
            //-----------------  SELECCIONAR PIEZA - MOVER  -----------------------------------
            arraySquare[i][j].addEventListener('click', function(){
                if(status1 && CHESS[i][j].split(" ").join("").length > 0){
                    resultado = colorPieceCycle(CHESS[i][j][0]); //Turno pieza;
                    if(resultado){
                        console.log(`selected piece R${i} C${j}`);
                        verifyMoviePiece(rows,columns,CHESS[i][j][2],CHESS, arrSelector,i, j);
                        status1 = false;
                        other = true;
                        arraySquare[i][j].style.backgroundColor = COLOR_SELECT;
                        place.push(i,j);
                    }
                }else if(arraySquare[i][j].style.backgroundColor == COLOR_SELECT){
                    console.log(`deselected piece R${i} C${j}`)
                    color == 'W'? color = 'B': color = 'W'; //Turno pieza;
                    status1 = true;
                    other = false;
                    place.splice(0,2);
                    changeColor(arraySquare,i,j);
                    cleanBackgroundColor(rows,columns,arrSelector);
                    
                }else if(other && CHESS[i][j].split(" ").join("").length == 0){
                    if(arrSelector[i][j].style.display == 'block'){
                        status1 = true;
                        other = false;
                        replacePiece(CHESS,place[0],place[1],i,j);
                        changeColor(arraySquare,place[0],place[1]);
                        cleanBackgroundColor(rows,columns,arrSelector);
                        place.splice(0,2);
                        console.log(CHESS);
                    }
                }
            })
    
            //HOVER
            // arraySquare[i][j].addEventListener('mouseover', function(){
            //     if(arraySquare[i][j].style.backgroundColor != COLOR_SELECT && arraySquare[i][j].style.backgroundColor != COLOR_MOVE){
            //         arraySquare[i][j].style.backgroundColor = '#ac8b90af';
            //     }
            // })
    
            // arraySquare[i][j].addEventListener('mouseout', function(){
            //     if(arraySquare[i][j].style.backgroundColor != COLOR_SELECT && arraySquare[i][j].style.backgroundColor != COLOR_MOVE){
            //         changeColor(arraySquare,i,j);
            //     }
            // })
        }
    }
}



function verifyMoviePiece(rows,columns,typePiece, CHESS, arrSelector,i, j){

    // i = rows
    // j = colums
    switch (typePiece) {
        case 'P': peonMovement(rows,columns,CHESS, arrSelector, i, j);
            break;
        case 'T': towerMovement(rows,columns, CHESS, arrSelector, i, j);
            break;
        case 'H': horseMovement(rows,columns,CHESS, arrSelector,i, j); 
            break;
        case 'B': bishopMovement(rows,columns,CHESS, arrSelector, i, j);
            break; 
        case 'Q': queenMovement(rows,columns,CHESS, arrSelector,i, j);
        default:
            break;
    }
    // console.log(typePiece);
    
}

// function verifyMoviePiece(rows,columns,typePiece, CHESS, arrSelector,i, j){

   

// }

