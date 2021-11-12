function towerMovement(rows,columns, CHESS, arrSelector, i, j){
    
    checkTowerMove(i+1,rows,'i',i,j,CHESS,arrSelector);
    checkTowerMove(j+1,columns,'j',i,j,CHESS,arrSelector);
    checkTowerMove(i-1, 0,'i',i,j,CHESS,arrSelector);
    checkTowerMove(j-1, 0,'j',i,j,CHESS,arrSelector);
}

function checkTowerMove(eje, limit, compare,i,j,CHESS,arrSelector){

    let colorP = CHESS[i][j][0];

    if(limit == 0){
        for(let index = eje; index >= limit; index--){
            validatorTowerMove(compare,index,colorP,CHESS,arrSelector,i,j)
            if(!validatorTowerMove(compare,index,colorP,CHESS,arrSelector,i,j)) break;
        }
    }else{
        for(let index = eje; index < limit; index++){
            validatorTowerMove(compare,index,colorP,CHESS,arrSelector,i,j)
            if(!validatorTowerMove(compare,index,colorP,CHESS,arrSelector,i,j)) break;
        }
    }
}


function validatorTowerMove(compare,index,colorP,CHESS,arrSelector,i,j){
    if(compare == 'i'){
        if(CHESS[index][j][0] == colorP) return false; 
        if(CHESS[index][j].split(" ").join("").length > 0){
            arrSelector[index][j].style.display = 'block';
            return false;
        }
        arrSelector[index][j].style.display = 'block';
        return true;
    }else{
        if(CHESS[i][index][0] == colorP) return false; 
        if(CHESS[i][index].split(" ").join("").length > 0){
            arrSelector[i][index].style.display = 'block';
            return false;
        }
        arrSelector[i][index].style.display = 'block';
        return true;
    } 
}