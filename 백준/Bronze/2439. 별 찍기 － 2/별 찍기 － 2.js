let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  console.log(" ".repeat(a - i) + "*".repeat(i));
}