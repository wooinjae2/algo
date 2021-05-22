function solution(brown, yellow) {
    var answer = [];
    let width = (brown/2)-3;
    let height = 1;

    while( width >= height){
        const result = width * height;
        
        if(width-1 < height+1){
            break;
        }

        if(result !== yellow){
            width--;
            height++;
        }else{
            break;
        }
    }
    answer.push(width+2, height+2);
    console.log(answer);
    return answer;

}

solution(8,1);
solution(10,2);
solution(24,24);