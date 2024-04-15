  const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  const a = parseInt(input[0]);

  let b = a - 1;
  for (let i = 0; i < a; i++) {
    console.log(" ".repeat(b) + "*".repeat(i * 2 + 1));
    b--;
  }