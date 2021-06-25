function solution(s) {
  var answer = -1;
  let charArr = s.split("");
  
  let count = 1;
  while (true) {
    
    const stack = [];
    if (count !== 0) {
      count = 0;
      
      charArr.forEach((data, idx) => {
        
        if(idx === 0){
          stack.push(data);
        }else{
          
          if(stack.length > 0 && data === stack[stack.length-1]){
            stack.pop();
            count++;
          }else{
            stack.push(data);
          }
        }
        
      })
      
      charArr=stack;
    }else{
      break;
    }
  }
  if(charArr.length === 0){
    return 1;
  }

  return 0;
}

solution("baabaa");
solution("cdcd");
