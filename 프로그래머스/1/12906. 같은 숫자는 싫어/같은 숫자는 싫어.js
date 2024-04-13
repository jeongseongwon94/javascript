function solution(arr)
{
   return arr.filter((value, i) => {
       return arr[i+1] !== value;
   })
}