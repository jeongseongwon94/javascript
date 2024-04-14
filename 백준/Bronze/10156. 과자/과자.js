const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const cost = parseInt(input[0]);
const num = parseInt(input[1]);
const money = parseInt(input[2]);
const answer = cost * num - money;

console.log(answer < 0 ? 0 : answer);