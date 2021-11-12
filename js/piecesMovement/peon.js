function peonMovement(rows,columns,CHESS, arrSelector, i, j){

    let colorP = CHESS[i][j][0];

    if(colorP == 'B') {
        if(i == 1 && CHESS[i+1][j].split(" ").join("").length == 0 && CHESS[i+2][j].split(" ").join("").length == 0) arrSelector[i+2][j].style.display = 'block';
        checkPeonMove(i+1,j-1,j+1,'W',j,CHESS,arrSelector,rows,columns);

    }else if(colorP == 'W'){
        if(i == rows-2 && CHESS[i-1][j].split(" ").join("").length == 0 && CHESS[i-2][j].split(" ").join("").length == 0) arrSelector[i-2][j].style.display = 'block';
        checkPeonMove(i-1,j-1,j+1,'B',j,CHESS,arrSelector,rows,columns);

    }
}

function checkPeonMove(ejeI, negtv, postv,eatColor,j,CHESS, arrSelector, rows ,columns){
    if(ejeI < 0 || ejeI >= rows) return;
    if(CHESS[ejeI][j].split(" ").join("").length == 0) arrSelector[ejeI][j].style.display = 'block';
    if(negtv >= 0){
        if(CHESS[ejeI][negtv][0] == eatColor) arrSelector[ejeI][negtv].style.display = 'block';
    }
    if(postv < columns){
        if(CHESS[ejeI][postv][0] == eatColor) arrSelector[ejeI][postv].style.display = 'block';
    }
}