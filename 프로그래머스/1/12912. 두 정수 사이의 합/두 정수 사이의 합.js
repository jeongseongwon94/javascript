function solution(a, b) {
   let array = [];
   if(a < b){
   for(i=a; i<=b; i++){
       array.push(i)
   }
   }
    for(i=b; i<=a; i++){
        array.push(i)
    }
   return array.reduce((acc, cur)=> acc + cur, 0)
}