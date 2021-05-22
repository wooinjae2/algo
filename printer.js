
function solution(priorities, location) {
    var answer = 0;
    const newPris = priorities.map((pri, idx) => {return{pri, loc:idx }})
    let count = 1;
    while(newPris.length> 0){
        let max = Math.max(...newPris.map(item => item.pri));
        let remove = {};
        for(let i = 0; i < newPris.length; i++){
          if(max === newPris[i].pri){
              remove = newPris.shift();
              break;
          }else{
            newPris.push(newPris.shift());
            i--;
          }
        }
        if(remove.loc === location){
            break;
        }
        
        count++;
        
        
    }
    return count;
}

solution([2, 1, 3, 2],2);
solution([1, 1, 9, 1, 1, 1], 0);