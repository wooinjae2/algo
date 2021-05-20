function solution(start_time, end_time){
  const times = start_time.reduce((acc, data, idx) => {
      acc.push({start: data, end: ((end_time[idx]+data) -1)})
      return acc;
  },[])
  console.log(times);
  
  times.sort(sortF);
  console.log(times);
  let count = 0;
  let max = 0;
  list = [];
  times.forEach((d, idx) => {
      if(d.start > max) {
          max = d.end;
          count++;
          list.push(d);
      }
  })
  
  console.log(list, count);
//어떻게 나올까 ?

}

function sortF(a, b){
  return a.end - b.end;
}




const start_time = [4,3,5,6,7];

const running_time = [3,4,1,1,2];

solution(start_time, running_time);

/**
 * 
 * 
 * [1,1,1,1] if(check[i])
 */