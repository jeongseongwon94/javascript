function solution(num) {
    if(num === 1){
       return 0
    }
    for(i=1; i < 500; i++){
            num % 2 === 0 ? num = num / 2 : num  = num * 3 + 1
          if(num === 1){
              return i
          }
       }
    return -1
}
