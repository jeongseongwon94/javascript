function solution(arr) {
const minNum = [...arr].sort((a,b) => a-b)[0];
const result = arr.filter((x)=> x !== minNum);
if( result.length === 0 ){
    return [-1]
}
    return result
   
}
                      
                      