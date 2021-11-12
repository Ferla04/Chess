function bishopMovement(rows,columns,CHESS, arrSelector, i, j){

    let colorP = CHESS[i][j][0];
    let jNegtv = j-1;
    let jPostv = j+1;
    let jN = true;
    let jP = true;

    for(let index = i+1; index < rows; index++){
        if(jNegtv >= 0 && jN) jN = checkBishopMove(jNegtv,index,CHESS,arrSelector,colorP);
        if(jPostv < columns && jP) jP = checkBishopMove(jPostv,index,CHESS,arrSelector,colorP);
        jNegtv--
        jPostv++
    }

    jNegtv = j-1;
    jPostv = j+1;
    jN = true;
    jP = true;

    for(let index= i-1; index >= 0; index--){
        if(jNegtv >= 0 && jN) jN = checkBishopMove(jNegtv,index,CHESS,arrSelector,colorP);
        if(jPostv < columns && jP) jP = checkBishopMove(jPostv,index,CHESS,arrSelector,colorP);
        jNegtv--
        jPostv++
    }
}


function checkBishopMove(NPJ,index,CHESS,arrSelector,colorP){

    if(CHESS[index][NPJ][0] == colorP) return false;
    if(CHESS[index][NPJ].split(" ").join("").length > 0){
        arrSelector[index][NPJ].style.display = 'block';
        return false;
    }
    arrSelector[index][NPJ].style.display = 'block';
    return true;
}
