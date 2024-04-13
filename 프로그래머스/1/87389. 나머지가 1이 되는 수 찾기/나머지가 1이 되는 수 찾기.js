function solution(n) {
   let array = [];
    for(i=1; i<=n; i++){
       if(n % i === 1){
           array.push(i);
       }
   }
 return array[0]
}