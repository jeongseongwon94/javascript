function solution(price, money, count) {
    // let sumPrice = 0;
    // for(i=1; i<=count; i++){
    //     sumPrice += price * i;
    // }
    
    // return sumPrice
    
    const sumPrice = Array.from({length:count}, (_,i) => i+1).reduce((acc, cur) => acc + cur * price, 0);
    if (sumPrice < money) return 0;
    
    return sumPrice - money
    
}