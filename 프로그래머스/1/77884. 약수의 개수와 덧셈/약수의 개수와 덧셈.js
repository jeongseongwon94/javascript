function solution(left, right) {
  let divisor = 0;
    let sum = 0;
    for(i=left; i<=right; i++){
      for(j=1; j<=i; j++){
          if(i % j === 0){
              divisor++;
          }
      }
        if(divisor % 2 === 0 ){
            sum +=i;
            divisor = 0;
        }
        else{
            sum -=i;
            divisor = 0;
        }
  }
    return sum
}