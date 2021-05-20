
function solution(m,n,board){
    var answer = 0;
    let newBoard = board.map(d=> d.split(''));
    let ch = true;
    let count = 0;
    while(ch){

        let check = [];
        ch = false;
        for(let i = 0 ; i < m ; i++){
            check[i] = [];
            for(let j = 0; j < n ; j++){
                check[i][j] = 0;
            }
        }
        
        

        for(let i = 0; i < m-1 ; i++){
            for (let j = 0; j < n-1; j++){
               const d1 = newBoard[i][j];
               const d2 = newBoard[i+1][j];
               const d3 = newBoard[i][j+1];
               const d4 = newBoard[i+1][j+1];
               if(d1 === d2 && d1 === d3 && d1 === d4 && d1 !==0){
                 check[i][j] = 1;
                 check[i][j+1] = 1;
                 check[i+1][j] = 1;
                 check[i+1][j+1] = 1;
                 ch = true;
               }
            }
        }

        for(let i = 0 ; i < m ; i++){
            for(let j = 0; j < n ; j++){
                if(check[i][j] ===1){
                    newBoard[i][j] = 0;
                    count++;
                }
            }
        }

        removeFunction(newBoard, m,n)

        
        

    }
    console.log(count)

    return count;
}

function removeFunction ( arr, m,n){
    for(let i = m-1; i>=0; i--){
        for(j = 0 ;j < n ;j++){
            if(arr[i][j] === 0){
                let start = i;
                while(start>=1){

                    start--;
                    if(arr[start][j]){
                        arr[i][j] = arr[start][j];
                        arr[start][j] = 0;
                        break;
                    }

                }
            }
        }
    }
}

    solution(4,5,["CCBDE", "AAADE", "AAABF", "CCBBF"]);

    solution(6,6,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);