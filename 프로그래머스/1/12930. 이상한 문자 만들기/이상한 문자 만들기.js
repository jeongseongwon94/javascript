function solution(s) {
    let arr = [];
    s.split(" ").forEach((word) => {
        let wordArr = word.split("");
        for(let i=0; i<wordArr.length; i++){
            if(i % 2 === 0){
                wordArr[i] = wordArr[i].toUpperCase();
            }
            if(i % 2 === 1){
                wordArr[i] = wordArr[i].toLowerCase();
            }
        }
        arr.push(wordArr.join(''));
    })
    return arr.join(' ');
}