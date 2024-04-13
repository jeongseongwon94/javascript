function solution(numbers) {
    
   const arr = Array.from({length: 10}, (_, i) => i);
   return arr.filter(x=> !numbers.includes(x)).reduce((acc, curr) =>  acc + curr, 0)
    
}