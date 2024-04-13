function solution(d, budget) {
  let sum = 0;
  let count = 0;
  const sortedD = d.sort((a,b) => a - b );

    for(let i=0; i< sortedD.length; i++){
      sum+= sortedD[i];
        if(sum <= budget){
             count ++;
        }
  }
    return count
}