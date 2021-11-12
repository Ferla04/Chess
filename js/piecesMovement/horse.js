function horseMovement(rows,columns,CHESS,arrSelector,i, j){

    checkHorseMove(i+2,'i',rows,j-1,j+1,columns,CHESS,arrSelector,i,j);
    checkHorseMove(j+2,'j',columns,i-1,i+1,rows,CHESS,arrSelector,i,j);
    checkHorseMove(i-2,'i', 0,j-1,j+1,columns,CHESS,arrSelector,i,j);
    checkHorseMove(j-2,'j', 0,i-1,i+1,rows,CHESS,arrSelector,i,j);
}


function checkHorseMove(prin,type,limit,negtv,postv,limitP,CHESS,arrSelector,i,j){

    let colorP = CHESS[i][j][0];

    if(limit == 0){
        if(prin >= limit){
            validatorHorseMove(prin,type,negtv,postv,limitP,CHESS,arrSelector,colorP);
        }
    }else{
        if(prin < limit){
            validatorHorseMove(prin,type,negtv,postv,limitP,CHESS,arrSelector,colorP);
        }
    }
}

function validatorHorseMove(prin,type,negtv,postv,limitP,CHESS,arrSelector,colorP){
    if(type == 'i'){
        if(postv < limitP && CHESS[prin][postv][0] != colorP){
            arrSelector[prin][postv].style.display = 'block';
        } 
        if(negtv >= 0 && CHESS[prin][negtv][0] != colorP){
            arrSelector[prin][negtv].style.display = 'block';
        }  
    }else{
        if(postv < limitP && CHESS[postv][prin][0] != colorP){
            arrSelector[postv][prin].style.display = 'block';
        } 
        if(negtv >= 0 && CHESS[negtv][prin][0] != colorP){
            arrSelector[negtv][prin].style.display = 'block';
        }  
    }
}