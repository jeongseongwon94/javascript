function solution(n)
{
    const strArray = n.toString().split("");
    let sum = 0;
    
    strArray.forEach(function(i){
        sum += Number(i);    
    })
    
    return sum
}