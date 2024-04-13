function solution(absolutes, signs) {
    let array = [];
    for(i=0; i<=signs.length-1; i++){
        if(signs[i] === true){
            array.push(absolutes[i])
        }
        else{array.push(absolutes[i] * -1)}
    }
    return array.reduce((acc, curr) => acc + curr , 0)
}