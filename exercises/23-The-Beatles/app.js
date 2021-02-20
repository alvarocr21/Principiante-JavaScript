

//Your code above ^^^

function sing(){
    let part1 = 'let it be';
    let part2 = 'words of wisdom';
    let part3 = 'there will be an answer';
    let completo = ''
    for(let i = 0; i<12;i++){
        
        if(i==0){
        completo = part1
        }else if (i == 4){
            completo = completo+', '+part2
        }else if(i==10){
            completo = completo+', '+part3
        }else if(i==11){
            completo =completo+', '+part1
        } else{
            completo =completo+', '+part1
        }
    }
    
return completo


}

console.log(sing());