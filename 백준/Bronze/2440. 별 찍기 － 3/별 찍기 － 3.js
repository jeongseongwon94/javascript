  const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
  
  const n = Number(input);

  function star(n) {
    if (n === 0) return;

    console.log("*".repeat(n));
    star(n - 1);
  }
  star(n);