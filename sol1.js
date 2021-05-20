function solution (dataList) {

    const answer = dataList.reduce((acc, data) =>{
        console.log(data)
        const dsplit = data.split(' ');
        
        acc[dsplit[0]] = acc[dsplit[0]] ?  acc[dsplit[0]] - Number(dsplit[2]) : Number(dsplit[2])  * -1;
        acc[dsplit[1]] = acc[dsplit[1]] ? acc[dsplit[1]] + Number(dsplit[2]): Number(dsplit[2]); 
        console.log(dsplit[0], acc)
        return acc;
    }, {})
    
    const arr = Object.values(answer);

    const min = Math.min(...arr);
    if(min >= 0){
        return ['None'];
    }

    const result = Object.keys(answer).reduce((acc, data)=>{
      if(answer[data] === min){
          acc.push(data);
      }
      return acc;
    }, [])
    console.log(result);
    return result;
}


const data = ['a b 3',
'a b 3',
'a b 3',
'a b 3',
'a b 3',
'a b 3',
'a b 3'];

solution(data);
