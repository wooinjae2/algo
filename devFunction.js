
const solution = (progresses, speeds) => {
    console.log(progresses, speeds);
    let answer = [];
    let answerCount = 0;
    while(true){
      for(let i = 0; i< progresses.length; i++){
          progresses[i] += speeds[i];
      }
      let check = false;
      for(let i = 0; i< progresses.length; i++){
          if(progresses[i] >= 100){
              progresses.shift();
              speeds.shift();
              if(!answer[answerCount]){
                answer.push(0);
              }
              answer[answerCount]++;
              i--;
              check = true;
          }else{
              console.log('break;', i);
              break;
          }
      }
      if(check){
          answerCount ++;
      }
      if(progresses.length ===0){
          break;
      }
    }
    console.log(answer)
    return answer;
}

// solution([93, 30, 55],[1, 30, 5]);
// solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])
// solution([99, 99,99],[1, 1, 1]);
// solution([96,99,98,97], [1,1,1,1]);

solution([99, 1, 99, 1], [1, 1, 1, 1]);