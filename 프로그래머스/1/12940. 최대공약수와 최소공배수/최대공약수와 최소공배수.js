function solution(n, m) {
    let gcd = 1;
    let lcm = 1;
    
    for(let i=2; i<=Math.min(n,m); i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    
    while(true){
      if((lcm % n == 0) && (lcm % m == 0)){
        break;
      }
      lcm++;
    }
    
    return [gcd,lcm]
    
    // const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    // const lcm = (a, b) => a * b / gcd(a, b);
    // return [gcd(n, m), lcm(n, m)];
    
}