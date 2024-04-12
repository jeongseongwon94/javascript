function solution(n) {
  let divisor = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisor += i;
    }
  }
  return divisor;
}