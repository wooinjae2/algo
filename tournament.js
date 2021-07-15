function solution(n,a,b)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(n,a,b);
    while(a !== b){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    console.log(answer);
    
    return answer;
}


solution(8,	4,	7)
solution(8,	1,	2);
