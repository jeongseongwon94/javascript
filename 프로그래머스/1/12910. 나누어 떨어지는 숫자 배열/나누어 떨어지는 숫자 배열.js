function solution(arr, divisor) {
   let array = [];
for(i=0; i<=arr.length-1; i++){
    if(arr[i] % divisor === 0 ){
        array.push(arr[i])
    }
}
    if(array.length === 0){
        array.push(-1)
    }
    return array.sort((a,b)=> a-b)
}