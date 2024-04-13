function solution(arr)
{
   return arr.filter((value, i, arr) => {
       return arr[i-1] !== value;
   })
}