function kingMovement(rows,columns, CHESS, arrSelector,i, j){

    let colorP = CHESS[i][j][0];
    
    for(let index = i-1; index <= i+1; index++){
        for(let jdex = j-1;jdex <= j+1; jdex ++){
            if(index >= 0 && index < rows){
                if(jdex >= 0 && jdex < columns){
                    if(CHESS[index][jdex][0] != colorP) arrSelector[index][jdex].style.display = 'block';
                } 
            }
        }
    }

}