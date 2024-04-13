function solution(arr1, arr2) {
    let array = [];
    for(let i=0; i<arr1.length; i++){
        array[i] = [];
        for(let j=0; j<arr1[i].length; j++){
            array[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return array;
}