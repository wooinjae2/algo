function solution(s) {

    console.log(s);
    const numbersArray = s.substring(1, s.length-1).split("},{");
    numbersArray[0] = numbersArray[0].substring(1, numbersArray[0].length);
    numbersArray[numbersArray.length-1] = numbersArray[numbersArray.length-1].substring(0, numbersArray[numbersArray.length-1].length-1);
    const answer = [];
    
    let max = 0;
    const arr = [];
    for(let i = 0; i < numbersArray.length; i++){
        
        arr.push(numbersArray[i].split(','));
        if(max < numbersArray[i].split(',').length){
            max = numbersArray[i].split(',').length;
            
        }
    }
    
    arr.sort((a,b)=>{
        return a.length - b.length;
    })

    for(let i = 0; i< arr.length; i++){
        
        for(let j = 0; j < arr[i].length; j++){
            
            let check = false;    
            for(let k = 0; k < answer.length; k++){
                if(Number(arr[i][j]) === Number(answer[k])){
                    check = true;
                }
            }

            if(!check){
                answer.push(Number(arr[i][j]))
            }
        }
    }
    console.log(answer);
    
    return answer;
}
solution("{{2,1,3,4},{2},{2,1},{2,1,3}}");